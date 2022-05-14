const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = {
	PORT: process.env.PORT || 3500,
	MONGO: process.env.MONGO || '',
	TOKEN_SECRET: process.env.TOKEN_SECRET || '',
};