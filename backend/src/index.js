const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

mongoose
	.connect(`${config.MONGO}`, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log('Database Connected successfully');
	})
	.catch((err) => {
		console.log(`Can't Connect To Database ${err}`);
		process.exit(0);
	});

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:3000'],
	})
);

require('./model/user.model');
require('./route/user.route')(app);

app.listen(config.PORT, () => {
	console.log(`Server is running on port ${config.PORT}`);
});
