import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
		const { isLogined } = this.props;
		if (!isLogined) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.handleLogin(this.account, this.password)}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => ({
	isLogined: state.getIn(['login', 'isLogined'])
})

const mapDispatch = (dispatch) => ({
	handleLogin(accountElem, passwordElem){
		dispatch(actionCreators.checkPassword(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);