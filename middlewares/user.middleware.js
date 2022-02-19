const users = require('../bd/users');

module.exports = {
    isUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;

            req.user = users[userId - 1];

            if (!req.user) {
                throw new Error('User with such id does not exist');
            }

            next();
        } catch (e) {
            res.status(404).send(e.message);
        }
    }
};
