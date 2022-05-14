const mongoose = require('mongoose');
const User = mongoose.model('User');
const config = require('../config');
const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
	return jwt.sign({ username: username }, config.TOKEN_SECRET, { expiresIn: '365d' });
}

module.exports = {
	register: async (username, password) => {
		try {
			const user = new User({
				username: username,
				password: password,
			});

			await user.save();

			return true;
		} catch (error) {
			console.log(error);
			return null;
		}
	},
	login: async (username, password) => {
		try {
			const user = await User.findOne({ username: username });

			if (await user.comparePassword(password)) {
				const jwt = generateAccessToken(username);
				return {
					token: jwt,
				};
			}

			return null;
		} catch (error) {
			console.log(error);
			return null;
		}
	},
};
