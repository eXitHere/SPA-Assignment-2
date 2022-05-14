import React, { useState } from 'react';
import login from '../api/login';

export default function Login() {
	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	const handleSubmit = async () => {
		if (!user.username || !user.password) return;
		const status = await login(user.username, user.password);
		if (status) {
			alert(status.token);
		} else {
			alert('invalid username or password');
		}
	};

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<div>
			<h3>Login</h3>

			<div className='mb-3'>
				<label>Username</label>
				<input
					type='username'
					id='username'
					className='form-control'
					placeholder='Enter username'
					value={user.username}
					onChange={(e) => handleChange(e)}
				/>
			</div>

			<div className='mb-3'>
				<label>Password</label>
				<input
					type='password'
					id='password'
					className='form-control'
					placeholder='Enter password'
					value={user.password}
					onChange={(e) => handleChange(e)}
				/>
			</div>

			<div className='d-grid'>
				<button type='submit' className='btn btn-primary' onClick={() => handleSubmit()}>
					Submit
				</button>
			</div>
		</div>
	);
}
