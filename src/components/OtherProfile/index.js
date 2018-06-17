import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import OtherProfileAction from '../../modules/OtherProfile/action'

import CommonHeader from '../common/CommonHeader'
import OtherProfileForm  from './OtherProfileForm'

class OtherProfile extends Component {
  async componentWillMount() {
    const {actions} = this.props
    const userId = this.props.match.params.userId
    actions.getOtherProfile(userId)
  }

  handleDecision = () => {
    this.props.history.push('/top')
  }

  render() {
    const {nickName, twitterName, otherProfile} = this.props
    return (
      <div>
        <CommonHeader title={nickName+'のプロフィール'}/>
        <OtherProfileForm
          nickName={nickName}
          twitterName={twitterName}
          otherProfile={otherProfile}
          onClickDecision={this.handleDecision}
        />
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