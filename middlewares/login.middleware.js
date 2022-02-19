const users = require('../bd/users');

module.exports = {
    isEmailUniq: async (req, res, next) => {
        try {
            const {email} = req.body;

            if (users.find(user => user.email === email)) {
                throw new Error('Email or password already exist!');
            }

            next();
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
};
