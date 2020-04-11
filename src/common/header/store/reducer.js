import * as actionType from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	focused: false,
	list:[]
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionType.SEARCH_FOCUS: {
			return state.set('focused', true)
		}
		case actionType.SEARCH_BLUR: {
			return state.set('focused', false)
		}
		default: {
			return state
		}
	}
}