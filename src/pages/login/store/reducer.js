import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
	isLogined: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionType.LOGIN:
			return state.set('isLogined', action.value);
		case actionType.LOGOUT:
			return state.set('isLogined', action.value);
		default:
			return state;
	}
}