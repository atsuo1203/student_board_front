import CategoryModel from '../../models/CategoryModel'
const initializeState = {
  // ユーザ関係
  userName: "名前はまだない",
  // スレッド関係
  currentThread: {isCategory: true, threadID: "1"},
  // カテゴリ関係
  categoryArray: [new CategoryModel({id: '1', name: '雑談'})],
  currentCategory: new CategoryModel({id: '1', name: '雑談'}),
}

export default (state=initializeState, action) => {
  switch (action.type) {
    // ユーザ関係
    case "SET_USER_NAME":
      return Object.assign({}, state, {userName: action.payload})
    // スレッド関係
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
    default:
      return state;
  }
}