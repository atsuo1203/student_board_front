import {Record} from 'immutable';

const SortRecord = Record(
  {
    id: 1,
    name: 'ID順',
  }
);

export default class SortModel extends SortRecord {
  getId() {
    return this.id
  }
  getName() {
    return this.name
  }
}
