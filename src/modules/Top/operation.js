import {fork, take, put, call} from 'redux-saga/effects';

import TopApi from '../../API/TopApi'

import TopAction from './action';
import CategoryModel from '../../models/CategoryModel';

export function* topOperation() {
  yield fork(getCategoryArray);
}

// categoryArrayを返す
function* getCategoryArray() {
  while (true) {
    yield take('GET_CATEGORY_ARRAY')
    // 取得で想定されるデータ response.body とかで今後は取る予定
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