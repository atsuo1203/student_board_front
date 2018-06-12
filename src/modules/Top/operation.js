import {fork, take, put, call} from 'redux-saga/effects';

import TopApi from '../../API/TopApi'

import TopAction from './action';
import CategoryModel from '../../models/CategoryModel';
import SortModel from '../../models/SortModel';

export function* topOperation() {
  yield fork(getCategoryArray);
  yield fork(getSortArray);
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
      console.log(response.body)
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