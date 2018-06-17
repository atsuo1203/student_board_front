import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ProfileAction from '../../modules/Profile/action'

import CommonHeader from '../common/CommonHeader'
import ProfileForm  from './ProfileForm'

class Profile extends Component {
  componentWillMount() {
    // TODO
    // ユーザ情報をsetする
  }

  handleChangeNickName = (event) => {
    const {actions} = this.props
    actions.setNickName(event.target.value)
  }

  handleChangeTwitter = (event) => {
    const {actions} = this.props
    actions.setTwitterName(event.target.value)
  }

  handleChangeMyProfile = (event) => {
    const {actions} = this.props
    actions.setMyProfile(event.target.value)
  }

  handleDecision = () => {
    const {nickName, twitterName, myProfile} = this.props
    console.log(nickName, twitterName, myProfile)
    this.props.history.push('./top')
  }

  render() {
    return (
      <div>
        <CommonHeader title='ユーザ情報編集'/>
        <ProfileForm
          onChangeNickName={this.handleChangeNickName}
          onChangeTwitter={this.handleChangeTwitter}
          onChangeMyProfile={this.handleChangeMyProfile}
          onClickDecision={this.handleDecision}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  nickName: store.Profile.nickName,
  twitterName: store.Profile.twitterName,
  myProfile: store.Profile.myProfile,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProfileAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));