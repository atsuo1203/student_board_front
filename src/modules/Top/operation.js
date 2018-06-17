import {fork, take, put, call, select} from 'redux-saga/effects';

import TopApi from '../../API/TopApi'

import TopAction from './action';
import ArticleModel from '../../models/ArticleModel';
import CategoryModel from '../../models/CategoryModel';
import SortModel from '../../models/SortModel';
import ThreadModel from '../../models/ThreadModel'
import CommentModel from '../../models/CommentModel';

export function* topOperation() {
  yield fork(getCategoryArray);
  yield fork(getSortArray);
  yield fork(getThreadArray);
  yield fork(postThread);
}

/*
 * get
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
    const uniqueKey = String(categoryId)+String(page)+String(sortId)
    const thread1 = 'thread_1' + uniqueKey
    const thread2 = 'thread_2' + uniqueKey
    const thread3 = 'thread_3' + uniqueKey
    const dataList = [
      {id: thread1, title: 'vipからきました',
      date: '2018/05/28(月) 21:07:50.001', categoryId: categoryId, commentCount: 100, speed: 1000,
      comments: [
        {id: 1, nickName: 'たかし', text: 'お前ら反論してみろ' + categoryId, date: '2018/05/28(月) 21:07:50.001',
         threadId: thread1, userId: 1, },
        {id: 2, nickName: 'ぴろゆき', text: '>>1 キモ' + categoryId, date: '2018/05/28(月) 21:30:50.001',
         threadId: thread1, userId: 2, },
      ],},
      {id: thread2, title: 'なんjから来ました',
      date: '2018/05/29(火) 21:07:50.001', categoryId: categoryId, commentCount: 100, speed: 1000,
      comments: [
        {id: 1, nickName: 'たかし', text: 'お前ら反論してみろ' + categoryId, date: '2018/05/28(月) 21:07:50.001',
         threadId: thread2, userId: 1, },
        {id: 2, nickName: 'ぴろゆき', text: '>>1 キモ', date: '2018/05/28(月) 21:30:50.001',
         threadId: thread2, userId: 2, },
      ],},
      {id: thread3, title: '生き物苦手版サイコー',
      date: '2018/05/30(水) 21:07:50.001', categoryId: categoryId, commentCount: 100, speed: 1000,
      comments: [
        {id: 1, nickName: 'たかし', text: 'お前ら反論してみろ' + categoryId, date: '2018/05/28(月) 21:07:50.001',
         threadId: thread3, userId: 1, },
        {id: 2, nickName: 'ぴろゆき', text: '>>1 キモ', date: '2018/05/28(月) 21:30:50.001',
         threadId: thread3, userId: 2, },
      ],},
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
          speed: data.speed, comments: data.comments, index: index+1,
        })
        threadArray.push(thread)
      })
      console.log(threadArray)
      yield put(TopAction.setThreadArray(threadArray))
      yield put(TopAction.setCurrentThread(true, categoryId))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}
/*
 * post
 */
// thread
function* postThread() {
  while (true) {
    const action = yield take('POST_THREAD')
    const categoryId = action.categoryId
    const title = action.title
    const commentText = action.commentText
    const thread4 = 'thread_4'
    const data = {
      id: thread4, title: '今2chを見ているのは',
      date: '2018/05/28(月) 21:07:50.001', categoryId: categoryId, commentCount: 100, speed: 1000,
      comments: [
        {id: 1, nickName: 'ケンジ', text: 'ひろゆきと俺とお前だけだ' + categoryId, date: '2018/05/28(月) 21:07:50.001',
         threadId: thread4, userId: 3, }]
    }
    try {
      // const response = yield call(TopApi.getThreads, categoryId, title, commentText)
      const response = yield call(TopApi.getTest)
      // TODO: dataをresponse.bodyに書き換え
      const thread = new ThreadModel({
        id: data.id, title: data.title, date: data.date,
        categoryId: data.categoryId, commentCount: data.commentCount,
        speed: data.speed, comments: data.comments, index: 'new'
      })
      const threadArray = yield select(store => store.Top.threadArray)
      threadArray.unshift(thread)
      yield put(TopAction.setThreadArray(threadArray))
      yield put(TopAction.setCurrentThread(true, categoryId))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}