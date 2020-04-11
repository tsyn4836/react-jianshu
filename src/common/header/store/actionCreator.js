import * as actionType from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'

const change_list = (data) => ({
	type: actionType.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
})

export const search_focus = () => ({
	type: actionType.SEARCH_FOCUS
})
export const search_blur = () => ({
	type: actionType.SEARCH_BLUR
})
export const mouse_enter = () => ({
	type: actionType.MOUSE_ENTER
})
export const mouse_leave = () => ({
	type: actionType.MOUSE_LEAVE
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
export const change_page = (page) => ({
	type: actionType.CHANGE_PAGE,
	page
})