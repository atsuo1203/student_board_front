import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import TopAction from '../../modules/Top/action'


class Top extends Component {
  handleChangeInputValue = event => {
    const {actions} = this.props
    actions.changeInputValue(event.target.value)
  }
  handleChangeName = () => {
    const {actions, inputValue} = this.props
    actions.changeUserName(inputValue)
  }
  render() {
    const {userName} = this.props
    return (
      <div className="Top">
        <p>
          名前：<input type="text" name="userName"
                onChange={this.handleChangeInputValue}/>
        </p>
        <p>
          <input type="submit" value="送信する"
            onClick={this.handleChangeName}/>
        </p>
      <br/>
      {userName}
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  userName: store.Top.userName,
  inputValue: store.Top.inputValue,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Top);
