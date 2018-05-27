import {Record} from 'immutable';
import CommentModel from './CommentModel'

const ArticleRecord = Record(
  {
    id: 'thread_id',
    title: "vipからきました",
    comments: [new CommentModel()]
  }
);

export default class ArticleModel extends ArticleRecord {
  getId() {
    return this.id
  }
  getTitle() {
    return this.title
  }
  getComments() {
    return this.comments
  }
}
