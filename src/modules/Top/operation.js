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
    const dataList = [
      {category_id: 1, name: '雑談'},
      {category_id: 2, name: '勉強'},
      {category_id: 3, name: '恋愛'},
      {category_id: 4, name: '部活'},
      {category_id: 5, name: '進路'},
    ]
    try {
      const response = yield call(TopApi.getTest)
      var categoryArray = []
      // TODO: dataListをresponse.bodyに書き換え
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
    const dataList = [
      {sort_id: 1, name: 'ID昇順'},
      {sort_id: 2, name: 'ID降順'},
      {sort_id: 3, name: '人気昇順'},
      {sort_id: 4, name: '人気降順'},
      {sort_id: 5, name: 'コメント数昇順'},
      {sort_id: 6, name: 'コメント数降順'},
    ]
    try {
      const response = yield call(TopApi.getTest)
      var sortArray = []
      // TODO: dataListをresponse.bodyに書き換え
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
    // TODO: curretnCategoryはいらないから後で消す
    const currentCategory = yield select(store => store.Top.currentCategory)
    const data = {
      thread: {thread_id: threadId, title: 'getThread' + threadId,
        create_at: '2018/05/28(月) 21:07:50.001',
        update_at: '2018/05/28(月) 21:07:50.001',
        categoryId: currentCategory.categoryId, commentCount: 100, speed: 1000,},
      comments: [
        {comment_id: 1, nickName: 'たかし', text: 'すれ取得乙',
          create_at: '2018/05/28(月) 21:07:50.001',
          update_at: '2018/05/28(月) 21:07:50.001',
         threadId: threadId, userId: 1, },],
    }
    try {
      // const response = yield call(TopApi.getThread, threadId)
      const response = yield call(TopApi.getTest)
      // TODO: rerloadThreadをresponse.bodyに書き換え
      const thread = new ThreadModel({
        id: data.thread.thread_id, title: data.thread.title,
        update_at: data.thread.update_at, create_at: data.thread.create_at,
        categoryId: data.thread.categoryId, commentCount: data.thread.commentCount,
        speed: data.thread.speed, index: 0,
        comments: data.comments.map(comment => {
          return new CommentModel({
            id: comment.id, nickName: comment.nickName, text: comment.text,
            create_at: comment.create_at, update_at: data.update_at,
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
    // TODO: curretnCategoryはいらないから後で消す
    const currentCategory = yield select(store => store.Top.currentCategory)
    const data = {
      thread: {thread_id: threadId, title: 'reload後やで' + threadId,
        create_at: '2018/05/28(月) 21:07:50.001',
        update_at: '2018/05/28(月) 21:07:50.001',
        categoryId: currentCategory.categoryId, commentCount: 100, speed: 1000,},
      comments: [
        {comment_id: 1, nickName: 'たかし', text: 'リロード乙',
          create_at: '2018/05/28(月) 21:07:50.001',
          update_at: '2018/05/28(月) 21:07:50.001',
         threadId: threadId, userId: 1, },],
    }
    try {
      // const response = yield call(TopApi.getThread, threadId)
      const response = yield call(TopApi.getTest)
      // TODO: rerloadThreadをresponse.bodyに書き換え
      const reloadThread = new ThreadModel({
        id: data.thread.thread_id, title: data.thread.title,
        update_at: data.thread.update_at, create_at: data.thread.create_at,
        categoryId: data.thread.categoryId, commentCount: data.thread.commentCount,
        speed: data.thread.speed, index: 0,
        comments: data.comments.map(comment => {
          return new CommentModel({
            id: comment.id, nickName: comment.nickName, text: comment.text,
            create_at: comment.create_at, update_at: data.update_at,
            threadId: comment.threadId, userId: comment.userId,})
        }),
      })
      const articleArray = yield select(store => store.Top.articleArray)
      const threadArray = yield select(store => store.Top.threadArray)
      var newArticleArray = []
      var newThreadArray = []
      articleArray.forEach(article => {
        if (article.id === reloadThread.id) {
          var newArticle = new ThreadModel({
            id: reloadThread.id, title: reloadThread.title,
            update_at: reloadThread.update_at, create_at: data.reloadThread.create_at,
            categoryId: reloadThread.categoryId, commentCount: reloadThread.commentCount,
            speed: reloadThread.speed, comments: reloadThread.comments, index: article.index,
          })
          newArticleArray.push(newArticle)
        } else {
          newArticleArray.push(article)
        }
      });
      threadArray.forEach(thread => {
        if (thread.id === reloadThread.id) {
          var newThread = new ThreadModel({
            id: reloadThread.id, title: reloadThread.title,
            update_at: reloadThread.update_at, create_at: data.reloadThread.create_at,
            categoryId: reloadThread.categoryId, commentCount: reloadThread.commentCount,
            speed: reloadThread.speed, comments: reloadThread.comments, index: thread.index,
          })
          newThreadArray.push(newThread)
        } else {
          newThreadArray.push(thread)
        }
      });
      yield put(TopAction.setArticleArray(newArticleArray))
      yield put(TopAction.setThreadArray(newThreadArray))
      const currentThread = yield select(store => store.Top.currentThread)
      yield put(TopAction.setCurrentThread(currentThread.isCategory, currentThread.threadId))
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
    const dataList = [
      {
        thread_id: 1, title: 'vipからきました',
        update_at: '2018/05/28(月) 21:07:50.001', create_at: '2018/05/28(月) 21:07:50.001',
        categoryId: categoryId, commentCount: 100, speed: 1000,
      },
      {
        thread_id: 2, title: 'なんJからきました',
        update_at: '2018/05/28(月) 21:07:50.001', create_at: '2018/05/28(月) 21:07:50.001',
        categoryId: categoryId, commentCount: 100, speed: 1000,
      },
    ]
    try {
      const response = yield call(TopApi.getThreads, categoryId, paging, sortId)
      console.log(response.body)
      var threadArray = []
      // TODO: dataListをresponse.bodyに書き換え
      dataList.forEach((data, index) => {
        const thread = new ThreadModel({
          id: data.thread_id, title: data.title, create_at: data.create_at, update_at: data.update_at,
          categoryId: data.categoryId, commentCount: data.commentCount,
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
    const data = {
      thread: {thread_id: thread4, title: title,
      create_at: '2018/05/28(月) 21:07:50.001', update_at: '2018/05/28(月) 21:07:50.001',
      categoryId: categoryId, comment_count: 100, speed: 1000,},
      comments: [
        {
          comment_id: 1, nickName: 'ケンジ', text: commentText,
          create_at: '2018/05/28(月) 21:07:50.001', update_at: '2018/05/28(月) 21:07:50.001',
          threadId: thread4, userId: 3, }]
    }
    try {
      const response = yield call(TopApi.postThread, title, categoryId, commentText)
      console.log(response)
      // TODO: dataをresponse.bodyに書き換え
      const comment = data.comments[0]
      const thread = new ThreadModel({
        id: data.thread_id, title: data.title, update_at: data.update_at, create_at: data.create_at,
        categoryId: data.categoryId, commentCount: data.comment_count,
        speed: data.speed, index: 'new',
        comments: [new CommentModel({
          id: comment.id, nickName: comment.nickName, text: comment.text,
          update_at: comment.update_at, create_at: comment.create_at,
          threadId: comment.threadId, userId: comment.userId,})]
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

// thread
function* postComment() {
  while (true) {
    const action = yield take('POST_COMMENT')
    const threadId = action.threadId
    const commentText = action.commentText
    const data = {
      id: 3, nickName: 'たかし', text: commentText,
      create_at: '2018/05/28(月) 21:07:50.001', update_at: '2018/05/28(月) 21:07:50.001',
      threadId: threadId, userId: 1,
    }
    try {
      // const response = yield call(TopApi.postComment, thread_id, commentText)
      const response = yield call(TopApi.getTest)
      // TODO: dataをresponse.bodyに書き換え
      const comment = new CommentModel({
        id: data.id, nickName: data.nickName, text: data.text,
        update_at: data.update_at, create_at: data.create_at,
        threadId: data.threadId, userId: data.userId,
      })
      const articleArray = yield select(store => store.Top.articleArray)
      articleArray.forEach(article => {
        if (article.threadId === threadId) {
          article.comments.push(comment)
        }
      });
      const threadArray = yield select(store => store.Top.threadArray)
      threadArray.forEach(thread => {
        if (thread.id === threadId) {
          thread.comments.push(comment)
        }
      });
      yield put(TopAction.setArticleArray(articleArray))
      yield put(TopAction.setThreadArray(threadArray))
      yield put(TopAction.setCurrentThread(false, threadId))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}