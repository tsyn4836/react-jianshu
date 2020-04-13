import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem, Avatar, WriterName, WriterInfo } from '../style';

class Writer extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<WriterWrapper>
				<div className="title">
					<span>推荐作者</span>
					<span className="page-change" >换一批</span>
				</div>
				{
					list.map((item) => {
						const { id, avatar_source, nickname,slug, total_wordage, total_likes_count } = item.toJS()
						const userLink = `http://www.jianshu.com/u/${slug}`
						return (
							<WriterItem key={id}>
								<Avatar href={userLink}>
									<img src={avatar_source} alt='avatar' />
								</Avatar>
								<WriterName href={userLink}>
									{nickname}
								</WriterName>
								<WriterInfo>
									{
										`写了${((total_wordage) / 1000).toFixed(1)}k字
									· ${((total_likes_count) / 1000).toFixed(1)}k喜欢`
									}
								</WriterInfo>
							</WriterItem>
						)
					}
					)}
			</WriterWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'writerList'])
});


export default connect(mapState, null)(Writer);