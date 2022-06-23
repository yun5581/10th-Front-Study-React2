import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = ({ posts, setPosts }) => {
	// navigate를 선언하세요
	const navigate = useNavigate();

	// 새롭게 입력된 newTitle과, newContent를 관리 할 수 있도록 useState를 활용하세요.
	const [newTitle, setNewTitle] = useState('');
	const [newContent, setNewContent] = useState('');

	const onSubmit = e => {
		// 1 form이 기본 기능인 새로고침을 방지하세요.
		e.preventDefault();
		// 2 setPosts함수로 새로운 객체를 추가하세요.
		// ...spread 문법을 사용하세요
		// 기존 posts에 newTitle과 newContent를 추가합니다
		setPosts([...posts, { title: newTitle, content: newContent }]);
		// 3 navigate를 사용해 HomePage로 돌아갑니다.
		navigate('/');
	};

	return (
		// 1 form에 알맞은 onSubmit 함수를 지정하세요
		// 2 input에 알맞은 value, name를 지정하세요
		// 3 input에 알맞은 onChange 함수를 지정하세요
		// 4 button에 알맞은 type을 지정하세요

		<div>
			<form onSubmit={onSubmit}>
				<input
					placeholder="제목"
					name="Title"
					value={newTitle}
					onChange={e => setNewTitle(e.target.value)}
				/>
				<input
					placeholder="내용"
					name="Content"
					value={newContent}
					onChange={e => setNewContent(e.target.value)}
				/>

				<button type="submit">제출</button>
			</form>
		</div>
	);
};

export default CreatePage;
