import axios from 'axios';
import * as actionType from './actionType';

const login = () => ({
	type: actionType.LOGIN,
	value: true
})

export const logout = () => ({
	type: actionType.LOGOUT,
	value: false
})

export const checkPassword = (accout, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(login())
			}else {
				alert('登录失败')
			}
		})
	}
}