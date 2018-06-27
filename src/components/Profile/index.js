import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ProfileAction from '../../modules/Profile/action'

import CommonHeader from '../common/CommonHeader'
import ProfileForm  from './ProfileForm'

class Profile extends Component {
  async componentWillMount() {
    const {actions} = this.props
    actions.getProfile()
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
    const {actions, nickName, twitterName, myProfile} = this.props
    actions.putProfile(nickName, twitterName, myProfile, this.props.history)
  }

  handlePasswordEdit = () => {
    this.props.history.push('./password')
  }

  render() {
    const {nickName, twitterName, myProfile} = this.props
    return (
      <div>
        <CommonHeader title='ユーザ情報編集'/>
        <ProfileForm
          nickName={nickName}
          twitterName={twitterName}
          myProfile={myProfile}
          onChangeNickName={this.handleChangeNickName}
          onChangeTwitter={this.handleChangeTwitter}
          onChangeMyProfile={this.handleChangeMyProfile}
          onClickDecision={this.handleDecision}
          onClickPasswordEdit={this.handlePasswordEdit}
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