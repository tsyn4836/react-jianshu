import * as actionType from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'

export const search_focus = () => ({
	type: actionType.SEARCH_FOCUS
})
export const search_blur = () => ({
	type: actionType.SEARCH_BLUR
})
export const change_list = (data) => ({
	type: actionType.CHANGE_LIST,
	data:fromJS(data)
})
export const get_list = () => {
	return (dispatch) => {
		axios.get("api/headerList.json").then(res => {
			const data = res.data
			dispatch(change_list(data.data))
		}).catch(e => {
			console.log(e)
		})
	}
}