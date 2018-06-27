import {Record} from 'immutable';

const CommentRecord = Record(
  {
    id: 1,
    nickName: 'たかし',
    text: 'お前ら反論してみろ',
    create_at: '2018/05/28(月) 21:07:50.001',
    updata_at: '2018/05/28(月) 21:07:50.001',
    threadId: 'thread_id',
    userId: 1,
  }
);

export default class CommentModel extends CommentRecord {
  getId() {
    return this.id
  }
  getNickName() {
    return this.nickName
  }
  getText() {
    return this.text
  }
  getDate() {
    return this.date
  }
  getthreadId() {
    return this.threadId
  }
  getUserId() {
    return this.userId
  }
}
