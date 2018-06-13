import {fork, take, put, call, select} from 'redux-saga/effects';

import TopApi from '../../API/TopApi'

import TopAction from './action';
import CategoryModel from '../../models/CategoryModel';
import SortModel from '../../models/SortModel';
import ThreadModel from '../../models/ThreadModel'

export function* topOperation() {
  yield fork(getCategoryArray);
  yield fork(getSortArray);
  yield fork(getThreadArray);
}

/*
ここから下、主に初期で読み込むもの
*/
// categoryArrayを取得してset
function* getCategoryArray() {
  while (true) {
    yield take('GET_CATEGORY_ARRAY')
    const dataList = [
      {id: 1, name: '雑談'},
      {id: 2, name: '勉強'},
      {id: 3, name: '恋愛'},
      {id: 4, name: '部活'},
      {id: 5, name: '進路'},
    ]
    try {
      const response = yield call(TopApi.getTest)
      var categoryArray = []
      // TODO: dataListをresponse.bodyに書き換え
      dataList.forEach(data => {
        const category = new CategoryModel({id: data.id, name: data.name})
        categoryArray.push(category)
      })
      yield put(TopAction.setCategoryArray(categoryArray))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}

// sortArrayを取得して書き換え
function* getSortArray() {
  while (true) {
    yield take('GET_SORT_ARRAY')
    const dataList = [
      {id: 1, name: 'ID昇順'},
      {id: 2, name: 'ID降順'},
      {id: 3, name: '人気昇順'},
      {id: 4, name: '人気降順'},
      {id: 5, name: 'コメント数昇順'},
      {id: 6, name: 'コメント数降順'},
    ]
    try {
      const response = yield call(TopApi.getTest)
      var sortArray = []
      // TODO: dataListをresponse.bodyに書き換え
      dataList.forEach(data => {
        const sort = new SortModel({id: data.id, name: data.name})
        sortArray.push(sort)
      })
      yield put(TopAction.setSortArray(sortArray))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}

// threadArrayを取得して書き換え
function* getThreadArray() {
  while (true) {
    const action = yield take('GET_THREAD_ARRAY')
    const categoryId = action.categoryId
    const page = action.page
    const sortId = action.sortId
    const dataList = [
      {id: 'thread_1'+String(categoryId), title: 'vipからきました',
      date: '2018/05/28(月) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000},
      {id: 'thread_2'+String(categoryId), title: 'なんjから来ました',
      date: '2018/05/29(火) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000},
      {id: 'thread_3'+String(categoryId), title: '生き物苦手版サイコー',
      date: '2018/05/30(水) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000},
    ]
    try {
      // const response = yield call(TopApi.getThreads, categoryId, page, sortId)
      const response = yield call(TopApi.getTest)
      var threadArray = []
      // TODO: dataListをresponse.bodyに書き換え
      dataList.forEach((data, index) => {
        const thread = new ThreadModel({
          id: data.id, title: data.title, date: data.date,
          categoryId: data.categoryId, commentCount: data.commentCount,
          speed: data.speed, index: index+1,
        })
        threadArray.push(thread)
      })
      console.log('threadArray')
      console.log(threadArray)
      const threadArrays = yield select(store => store.Top.threadArrays)
      threadArrays[categoryId] = threadArray
      yield put(TopAction.setThreadArrays(threadArrays))
      yield put(TopAction.setCurrentThread(true, 1))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}