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
		if (this.props.focused) {
		return (
			<SearchInfo>
				<SearchInfoTitle>
					热门搜索
						<SearchInfoSwitch>
						换一批
						</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{
						this.props.list.map(item => {
							return <SearchInfoItem key={item}>{item}</SearchInfoItem>
						})
					}
				</SearchInfoList>
			</SearchInfo>
		)
		} else {
			return null;
		}
	}

	render() {
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
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							/>
						</CSSTransition >
						<i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>
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
		list:state.getIn(['header','list'])
	}
}
const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus() {
			dispatch(actionCreator.get_list())
			dispatch(actionCreator.search_focus())
		},
		handleInputBlur() {
			dispatch(actionCreator.search_blur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 