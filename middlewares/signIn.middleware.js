const users = require('../bd/users');

module.exports = {
    isEmailExist: async (req, res, next) => {
        try {
            const {email} = req.body;

            req.user = users.find(user => user.email === email);

            if (!req.user) {
                throw new Error('Wrong email or password');
            }

            next();
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
};
