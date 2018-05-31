import {Record} from 'immutable';

const ThreadRecord = Record(
  {
    id: 'thread_id',
    title: "vipからきました",
    date: '2018/05/28(月) 21:07:50.001',
    categoryId: 1,
    commentCount: 100,
    speed: 1000,
    index: 1,  // スレッドの番号 dbには入っていないので、画面側で振り直す
  }
);

export default class ThreadModel extends ThreadRecord {
  getId() {
    return this.id
  }
  getTitle() {
    return this.title
  }
  getDate() {
    return this.date
  }
  getCategoryId() {
    return this.categoryId
  }
  getCommentCount() {
    return this.commentCount
  }
  getSpeed() {
    return this.speed
  }
}
