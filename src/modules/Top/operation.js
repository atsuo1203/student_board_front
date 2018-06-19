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

// threadを取得して書き換え
function* getThread() {
  while (true) {
    const action = yield take('GET_THREAD')
    const threadId = action.payload
    // TODO: curretnCategoryはいらないから後で消す
    const currentCategory = yield select(store => store.Top.currentCategory)
    const data = {
      thread: {thread_id: threadId, title: 'reload後やで' + threadId,
        date: '2018/05/28(月) 21:07:50.001',
        categoryId: currentCategory, commentCount: 100, speed: 1000,},
      comments: [
        {comment_id: 1, nickName: 'たかし', text: 'リロード乙', date: '2018/05/28(月) 21:07:50.001',
         threadId: threadId, userId: 1, },
        {comment_id: 2, nickName: 'ぴろゆき', text: '>>1 キモ', date: '2018/05/28(月) 21:30:50.001',
         threadId: threadId, userId: 2, },],
    }
    try {
      // const response = yield call(TopApi.getThread, threadId)
      const response = yield call(TopApi.getTest)
      // TODO: rerloadThreadをresponse.bodyに書き換え
      const reloadThread = new ThreadModel({
        id: data.thread.thread_id, title: data.thread.title, date: data.thread.date,
        categoryId: data.thread.categoryId, commentCount: data.thread.commentCount,
        speed: data.thread.speed, index: 0,
        comments: data.comments.map(comment => {
          return new CommentModel({
            id: comment.id, nickName: comment.nickName, text: comment.text,
            date: comment.date, threadId: comment.threadId, userId: comment.userId,})
        }),
      })
      const articleArray = yield select(store => store.Top.articleArray)
      const threadArray = yield select(store => store.Top.threadArray)
      var newArticleArray = []
      var newThreadArray = []
      articleArray.forEach(article => {
        if (article.id === reloadThread.id) {
          var newArticle = new ThreadModel({
            id: reloadThread.id, title: reloadThread.title, data: reloadThread.data,
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
            id: reloadThread.id, title: reloadThread.title, data: reloadThread.data,
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
    const page = action.page
    const sortId = action.sortId
    const uniqueKey = String(categoryId)+String(page)+String(sortId)
    const thread1 = 'thread_1' + uniqueKey
    const thread2 = 'thread_2' + uniqueKey
    const thread3 = 'thread_3' + uniqueKey
    const dataList = [
      {
        thread: {thread_id: thread1, title: 'vipからきました',
          date: '2018/05/28(月) 21:07:50.001',
          categoryId: categoryId, commentCount: 100, speed: 1000,},
        comments: [
          {comment_id: 1, nickName: 'たかし', text: 'お前ら反論してみろ' + categoryId, date: '2018/05/28(月) 21:07:50.001',
           threadId: thread1, userId: 1, },
          {comment_id: 2, nickName: 'ぴろゆき', text: '>>1 キモ' + categoryId, date: '2018/05/28(月) 21:30:50.001',
           threadId: thread1, userId: 2, },],
      },
      {
        thread: {thread_id: thread2, title: 'なんjから来ました',
          date: '2018/05/29(火) 21:07:50.001',
          categoryId: categoryId, commentCount: 100, speed: 1000,},
        comments: [
          {comment_id: 1, nickName: 'たかし', text: 'お前ら反論してみろ' + categoryId, date: '2018/05/28(月) 21:07:50.001',
           threadId: thread2, userId: 1, },
          {comment_id: 2, nickName: 'ぴろゆき', text: '>>1 キモ', date: '2018/05/28(月) 21:30:50.001',
           threadId: thread2, userId: 2, },],
      },
      {
        thread: {thread_id: thread3, title: '生き物苦手版サイコー',
          date: '2018/05/30(水) 21:07:50.001',
          categoryId: categoryId, commentCount: 100, speed: 1000,},
        comments: [
          {comment_id: 1, nickName: 'たかし', text: 'お前ら反論してみろ' + categoryId, date: '2018/05/28(月) 21:07:50.001',
           threadId: thread3, userId: 1, },
          {comment_id: 2, nickName: 'ぴろゆき', text: '>>1 キモ', date: '2018/05/28(月) 21:30:50.001',
           threadId: thread3, userId: 2, },],
      },
    ]
    try {
      // const response = yield call(TopApi.getThreads, categoryId, page, sortId)
      const response = yield call(TopApi.getTest)
      var threadArray = []
      // TODO: dataListをresponse.bodyに書き換え
      dataList.forEach((data, index) => {
        const thread = new ThreadModel({
          id: data.thread.thread_id, title: data.thread.title, date: data.thread.date,
          categoryId: data.thread.categoryId, commentCount: data.thread.commentCount,
          speed: data.thread.speed, index: index+1,
          comments: data.comments.map(comment => {
            return new CommentModel({
              id: comment.id, nickName: comment.nickName, text: comment.text,
              date: comment.date, threadId: comment.threadId, userId: comment.userId,})
          }),
        })
        threadArray.push(thread)
      })
      yield put(TopAction.setThreadArray(threadArray))
      const currentThread = yield select(store => store.Top.currentThread)
      console.log(currentThread)
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
      date: '2018/05/28(月) 21:07:50.001', categoryId: categoryId, commentCount: 100, speed: 1000,},
      comments: [
        {comment_id: 1, nickName: 'ケンジ', text: commentText, date: '2018/05/28(月) 21:07:50.001',
         threadId: thread4, userId: 3, }]
    }
    try {
      // const response = yield call(TopApi.getThreads, categoryId, title, commentText)
      const response = yield call(TopApi.getTest)
      // TODO: dataをresponse.bodyに書き換え
      const comment = data.comments[0]
      const thread = new ThreadModel({
        id: data.thread.thread_id, title: data.thread.title, date: data.thread.date,
        categoryId: data.thread.categoryId, commentCount: data.thread.commentCount,
        speed: data.thread.speed, index: 'new',
        comments: [new CommentModel({
          id: comment.id, nickName: comment.nickName, text: comment.text,
          date: comment.date, threadId: comment.threadId, userId: comment.userId,})]
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
      id: 3, nickName: 'たかし', text: commentText, date: '2018/05/28(月) 21:07:50.001',
      threadId: threadId, userId: 1,
    }
    try {
      // const response = yield call(TopApi.postComment, thread_id, commentText)
      const response = yield call(TopApi.getTest)
      // TODO: dataをresponse.bodyに書き換え
      const comment = new CommentModel({
        id: data.id, nickName: data.nickName, text: data.text,
        date: data.date, threadId: data.threadId, userId: data.userId,
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