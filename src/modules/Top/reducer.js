import CategoryModel from '../../models/CategoryModel'
import SortModel from '../../models/SortModel'

const initializeState = {
  // スレッド関係
  threadArray: [],
  currentThread: {isCategory: true, threadId: 1},
  // カテゴリ関係
  categoryArray: [new CategoryModel({id: 1, name: '雑談'})],
  currentCategory: new CategoryModel({id: 1, name: '雑談'}),
  // ソート関係
  sortArray: [new SortModel({id: 1, name: 'ID昇順'})],
  currentSort: new SortModel({id: 1, name: 'ID昇順'}),
  // 記事関係 [new ThreadModel()] となる予定
  articleArray:  [],
  // ページ関係
  currentPage: 1,
  // ダイアログ関係
  isDialogOpen: false,
  dialogThreadTitle: "",
  dialogThreadComment: "",
  dialogArticleComment: "",
}

export default (state=initializeState, action) => {
  switch (action.type) {
    // スレッド関係
    case "SET_THREAD_ARRAY":
      return Object.assign({}, state, {threadArray: action.payload})
    case "SET_CURRENT_THREAD":
      return Object.assign({}, state, {currentThread: {
        isCategory: action.isCategory,
        threadId: action.threadId
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
    case "SET_ARTICLE_ARRAY":
      return Object.assign({}, state, {articleArray: action.payload})
    // ページ関係
    case "SET_CURRENT_PAGE":
      return Object.assign({}, state, {currentPage: action.payload})
    // ダイアログ関係
    case "SET_IS_DIALOG_OPEN":
      return Object.assign({}, state, {isDialogOpen: action.payload})
    case "SET_DIALOG_THREAD_TITLE":
      return Object.assign({}, state, {dialogThreadTitle: action.payload})
    case "SET_DIALOG_THREAD_COMMENT":
      return Object.assign({}, state, {dialogThreadComment: action.payload})
    case "SET_DIALOG_ARTICLE_COMMENT":
      return Object.assign({}, state, {dialogArticleComment: action.payload})
    default:
      return state;
  }
}