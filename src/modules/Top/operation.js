import {fork, take, put, call, select} from 'redux-saga/effects';

import TopApi from '../../API/TopApi'

import TopAction from './action';
import CategoryModel from '../../models/CategoryModel';
import SortModel from '../../models/SortModel';
import ThreadModel from '../../models/ThreadModel'
import CommentModel from '../../models/CommentModel';

export function* topOperation() {
  yield fork(getCategoryArray);
  yield fork(getSortArray);
  yield fork(getThread);
  yield fork(reloadThread);
  yield fork(getThreadArray);
  yield fork(postThread);
  yield fork(postComment);
}

/*
 * get
 */
// categoryArrayを取得してset
function* getCategoryArray() {
  while (true) {
    yield take('GET_CATEGORY_ARRAY')
    try {
      const response = yield call(TopApi.getCategories)
      const dataList = response.body
      var categoryArray = []
      dataList.forEach(data => {
        const category = new CategoryModel({id: data.category_id, name: data.name})
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
    try {
      const response = yield call(TopApi.getSorts)
      const dataList = response.body
      var sortArray = []
      dataList.forEach(data => {
        const sort = new SortModel({id: data.sort_id, name: data.name})
        sortArray.push(sort)
      })
      yield put(TopAction.setSortArray(sortArray))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}

function* getThread() {
  while (true) {
    const action = yield take('GET_THREAD')
    const threadId = action.payload
    try {
      const response = yield call(TopApi.getThread, threadId)
      const data = response.body
      const thread = new ThreadModel({
        id: data.thread.thread_id, title: data.thread.title,
        update_at: data.thread.update_at, create_at: data.thread.create_at,
        categoryId: data.thread.category_id, commentCount: data.thread.comment_count,
        speed: data.thread.speed, index: 0,
        comments: data.comments.map(comment => {
          return new CommentModel({
            id: comment.comment_id, nickName: comment.name, text: comment.text,
            create_at: comment.create_at, update_at: comment.update_at,
            threadId: comment.threadId, userId: comment.userId,})
        }),
      })
      const articleArray = yield select(store => store.Top.articleArray)
      const threadArray = yield select(store => store.Top.threadArray)
      var isExist = false
      articleArray.forEach(article => {
        if (article.id === thread.id) {
          isExist = true
        }
      });
      if (!isExist) {
        articleArray.push(thread)
        yield put(TopAction.setArticleArray(articleArray))
      }
      const currentCategory = yield select(store => store.Top.currentCategory)
      yield put(TopAction.setCurrentThread(true, currentCategory.id))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}

// threadを取得して書き換え
function* reloadThread() {
  while (true) {
    const action = yield take('RELOAD_THREAD')
    const threadId = action.payload
    try {
      const response = yield call(TopApi.getThread, threadId)
      const dataList = response.body.comments
      var commentList = []
      dataList.forEach(data => {
        const comment = new CommentModel({
          id: data.comment_id, nickName: data.name, text: data.text,
          create_at: data.create_at,
          threadId: data.threadId, userId: data.userId,
        })
        commentList.push(comment)
      })
      var newArticleArray = []
      const articleArray = yield select(store => store.Top.articleArray)
      articleArray.forEach(article => {
        if (article.id === threadId) {
          const newArticle = new ThreadModel({
            id: article.id, title: article.title, update_at: article.update_at,
            create_at: article.create_at,
            categoryId: article.categoryId, commentCount: article.comment_count,
            speed: article.speed, index: article.index, comments: commentList
          })
          newArticleArray.push(newArticle)
        } else {
          newArticleArray.push(article)
        }
      });
      yield put(TopAction.setArticleArray(newArticleArray))
      yield put(TopAction.setCurrentThread(false, threadId))
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
    const paging = action.paging
    const sortId = action.sortId
    try {
      const response = yield call(TopApi.getThreads, categoryId, paging, sortId)
      var threadArray = []
      response.body.forEach((data, index) => {
        const thread = new ThreadModel({
          id: data.thread_id, title: data.title, create_at: data.create_at, update_at: data.update_at,
          categoryId: data.category_id, commentCount: data.comment_count,
          speed: data.speed, index: index+1,
        })
        threadArray.push(thread)
      })
      yield put(TopAction.setThreadArray(threadArray))
      const currentThread = yield select(store => store.Top.currentThread)
      yield put(TopAction.setCurrentThread(currentThread.isCategory, currentThread.threadId))
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
    try {
      const response = yield call(TopApi.postThread, title, categoryId, commentText)
      const data = response.body
      const thread = data.thread
      const comment = data.comments[0]
      const newThread = new ThreadModel({
        id: thread.thread_id, title: thread.title, update_at: thread.update_at, create_at: thread.create_at,
        categoryId: thread.categoryId, commentCount: thread.comment_count,
        speed: thread.speed, index: 'new',
        comments: [new CommentModel({
          id: comment.comment_id, nickName: comment.name, text: comment.text,
          update_at: comment.update_at, create_at: comment.create_at,
          threadId: comment.threadId, userId: comment.userId,})]
      })
      const threadArray = yield select(store => store.Top.threadArray)
      threadArray.unshift(newThread)
      yield put(TopAction.setThreadArray(threadArray))
      yield put(TopAction.setCurrentThread(true, categoryId))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}

// thread
function* postComment() {
  while (true) {
    const action = yield take('POST_COMMENT')
    const threadId = action.threadId
    const commentText = action.commentText
    try {
      const response = yield call(TopApi.postComment, threadId, commentText)
      const dataList = response.body
      var commentList = []
      dataList.forEach(data => {
        const comment = new CommentModel({
          id: data.comment_id, nickName: data.name, text: data.text,
          create_at: data.create_at,
          threadId: data.threadId, userId: data.userId,
        })
        commentList.push(comment)
      })
      var newArticleArray = []
      const articleArray = yield select(store => store.Top.articleArray)
      articleArray.forEach(article => {
        if (article.id === threadId) {
          const newArticle = new ThreadModel({
            id: article.id, title: article.title, update_at: article.update_at,
            create_at: article.create_at,
            categoryId: article.categoryId, commentCount: article.comment_count,
            speed: article.speed, index: article.index, comments: commentList
          })
          newArticleArray.push(newArticle)
        } else {
          newArticleArray.push(article)
        }
      });
      yield put(TopAction.setArticleArray(newArticleArray))
      yield put(TopAction.setCurrentThread(false, threadId))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}