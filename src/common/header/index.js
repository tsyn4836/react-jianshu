import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store/'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';

class Header extends Component {
	getListArea() {
		const { focused, list, page, totalPage, mouseIn, mouseEnter, mouseLeave, handleChangePage } = this.props
		const newList = list.toJS()
		const pageList = []

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}
						>
							<i
								ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">
								&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}

	render() {
		const { focused, list, handleInputFocus, handleInputBlur } = this.props
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<NavItem className='right'>退出</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => { handleInputFocus(list) }}
								onBlur={handleInputBlur}
							/>
						</CSSTransition >
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
							&#xe614;
						</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe615;</i>
								写文章
							</Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = state => {
	return {
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn'])
	}
}
const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus(list) {
			list.size === 0 && dispatch(actionCreator.get_list())
			dispatch(actionCreator.search_focus())
		},
		handleInputBlur() {
			dispatch(actionCreator.search_blur())
		},
		mouseEnter() {
			dispatch(actionCreator.mouse_enter())
		},
		mouseLeave() {
			dispatch(actionCreator.mouse_leave())
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = `rotate(${originAngle + 360}deg)`;

			if (page < totalPage) {
				dispatch(actionCreator.change_page(page + 1))
			} else {
				dispatch(actionCreator.change_page(1))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 