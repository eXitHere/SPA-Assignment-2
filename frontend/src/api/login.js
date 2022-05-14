import axios from 'axios';
import config from '../config';

async function login(username, password) {
	try {
		const res = await axios({
			url: `${config.BACKEND}/api/v1/login`,
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			data: {
				username,
				password,
			},
		});
		return res.data;
	} catch (error) {
		return null;
	}
}

export default login;
