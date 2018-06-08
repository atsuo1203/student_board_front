import {fork, take} from 'redux-saga/effects';
import request from 'superagent';

export function* topOperation() {
  yield fork(hogehogeFunc);
}

function* hogehogeFunc() {
  while (true) {
    const action = yield take('SET_HOGEHOGE');
    const req = testRequest()
    console.log(action.payload)
    console.log(req)
    req
      .then((response) => {console.log(response.body)})
      .catch((error) => {console.log(error)})
    console.log('hogehogehoge')
  }
}

async function testRequest() {
  const req = await request.get('https://jsonplaceholder.typicode.com/posts/1')
  return req
}