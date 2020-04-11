import React from 'react'
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
	Addition,
	Button
} from './style';

function Header(props) {
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
						in={props.focused}
						timeout={200}
						classNames="slide"
					>
						<NavSearch
							className={props.focused ? 'focused' : ''}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						/>
					</CSSTransition >
					<i className={props.focused ? 'focused iconfont' : 'iconfont'}>
						&#xe614;
							</i>
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

const mapStateToProps = state => {
	return {
		focused: state.getIn(['header', 'focused'])
		// focused: state.get('header').get('focused')
	}
}
const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus() {
			dispatch(actionCreator.search_focus())
		},
		handleInputBlur() {
			dispatch(actionCreator.search_blur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 