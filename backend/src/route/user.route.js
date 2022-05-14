const userController = require('../controller/user.controller');

module.exports = (app) => {
	app.post('/api/v1/register', async (req, res) => {
		try {
			const { username, password } = req.body;
			const user = await userController.register(username, password);

			if (user) {
				res.status(201).send({ message: 'create user successfully.' });
				return;
			}
		} catch (error) {
			console.log(error);
		}
		res.status(400).send({ message: `something went wrong !` });
	});

	app.post('/api/v1/login', async (req, res) => {
		try {
			const { username, password } = req.body;
			const user = await userController.login(username, password);

			if (user) {
				res.status(200).send(user);
				return;
			}
		} catch (error) {}
		res.status(400).send({ message: `invalid username or password.` });
	});
};
