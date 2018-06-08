import {fork, take} from 'redux-saga/effects';

export function* topOperation() {
  yield fork(hogehogeFunc);
}

function* hogehogeFunc() {
  while (true) {
    const action = yield take('SET_HOGEHOGE');
    console.log('きてますよ！')
    console.log(action.payload)
  }
}
