const users = require('../bd/users');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const {city, age} = req.query;

            let filteredUsers = city ? users.filter(user => user.city === city) : users;
            filteredUsers = age ? filteredUsers.filter(user => user.age.toString() === age) : filteredUsers;

            res.render('users', {filteredUsers});
        } catch (e) {
            res.redirect('notFound');
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = req.user;

            res.render('user', {user});
        } catch (e) {
            res.redirect('notFound');
        }
    }
};
