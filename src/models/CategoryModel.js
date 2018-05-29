import {Record} from 'immutable';

const CategoryRecord = Record(
  {
    id: '1',
    name: '雑談',
  }
);

export default class CategoryModel extends CategoryRecord {
  getId() {
    return this.id
  }
  getName() {
    return this.name
  }
}
