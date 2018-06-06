import Login from './modules/Login/reducer'
import Top from './modules/Top/reducer'
import {combineReducers} from 'redux';

export default combineReducers({
  Login,
  Top,
})