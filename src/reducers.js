import Register from './modules/Register/reducer'
import PreRegister from './modules/Register/reducer'
import Profile from './modules/Profile/reducer'
import Login from './modules/Login/reducer'
import Top from './modules/Top/reducer'
import {combineReducers} from 'redux';

export default combineReducers({
  Register,
  PreRegister,
  Profile,
  Login,
  Top,
})