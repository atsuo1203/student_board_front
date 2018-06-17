import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import OtherProfileAction from '../../modules/OtherProfile/action'

import CommonHeader from '../common/CommonHeader'
import OtherProfileForm  from './OtherProfileForm'

class OtherProfile extends Component {
  async componentWillMount() {
    console.log(this.props.match.params.userId)
    // const userID = this.props.location.props.userId
    // console.log(userID)
  }

  render() {
    return (
      <div>
        otherProfile
        {/* <CommonHeader title='ユーザ情報編集'/>
        <OtherProfileForm
          nickName={nickName}
          twitterName={twitterName}
          otherProfile={otherProfile}
          onChangeNickName={this.handleChangeNickName}
          onChangeTwitter={this.handleChangeTwitter}
          onChangeMyOtherProfile={this.handleChangeMyOtherProfile}
          onClickDecision={this.handleDecision}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  nickName: store.OtherProfile.nickName,
  twitterName: store.OtherProfile.twitterName,
  otherProfile: store.OtherProfile.otherProfile,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(OtherProfileAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OtherProfile));