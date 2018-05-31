import CategoryModel from '../../models/CategoryModel'
import SortModel from '../../models/SortModel'
import ThreadModel  from '../../models/ThreadModel'

const initializeState = {
  // ユーザ関係
  userName: "名前はまだない",
  // スレッド関係
  // categoryIdをkeyにするdict[array]
  threadArrays: {1: [new ThreadModel({id: 'thread_id',
    title: "vipからきました",
    date: '2018/05/28(月) 21:07:50.001',
    categoryId: '1',
    commentCount: 100,
    speed: 1000,
    index: 1,
  })]},
  currentThread: {isCategory: true, threadID: 1},
  // カテゴリ関係
  categoryArray: [new CategoryModel({id: 1, name: '雑談'})],
  currentCategory: new CategoryModel({id: 1, name: '雑談'}),
  // ソート関係
  sortArray: [new SortModel({id: 1, name: 'ID昇順'})],
  currentSort: new SortModel({id: 1, name: 'ID昇順'}),
}

export default (state=initializeState, action) => {
  switch (action.type) {
    // ユーザ関係
    case "SET_USER_NAME":
      return Object.assign({}, state, {userName: action.payload})
    // スレッド関係
    case "SET_THREAD_ARRAYS":
      return Object.assign({}, state, {threadArrays: action.payload})
    case "SET_CURRENT_THREAD":
      return Object.assign({}, state, {currentThread: {
        isCategory: action.isCategory,
        threadID: action.threadID
      }})
    // カテゴリ関係
    case "SET_CATEGORY_ARRAY":
      return Object.assign({}, state, {categoryArray: action.payload})
    case "SET_CURRENT_CATEGORY":
      return Object.assign({}, state, {currentCategory: action.payload})
    // ソート関係
    case "SET_SORT_ARRAY":
      return Object.assign({}, state, {sortArray: action.payload})
    case "SET_CURRENT_SORT":
      return Object.assign({}, state, {currentSort: action.payload})
    default:
      return state;
  }
}