import React, { Component } from 'react'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button
} from './style';

class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>aa</NavItem>
					<NavItem className='right'>退出</NavItem>
					<NavSearch />
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

export default Header