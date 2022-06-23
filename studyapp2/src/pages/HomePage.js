import React from 'react';
import styled from 'styled-components';

const HomePage = ({ posts }) => {
	return (
		<div>
			{posts.map(post => (
				<Text post={post} key={post.title}>
					{post.title} : {post.content}
				</Text>
			))}
		</div>
	);
};

export default HomePage;

const Text = styled.p`
	border-style: solid;
	padding: 10px;
	// post를 꾸미세요
`;
