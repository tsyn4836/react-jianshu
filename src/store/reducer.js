const defaultState = {
	focused: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "input_focus": {
			return {
				focused: true
			}
		}
		case "input_blur": {
			return {
				focused: false
			}
		}
		default: {
			return state
		}
	}
}