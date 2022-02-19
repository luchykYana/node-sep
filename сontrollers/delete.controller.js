const users = require('../bd/users');

module.exports = {
    deleteUser: async (req, res) => {
        try {
            const {userEmail} = req.params;

            const index = users.findIndex(user => user.email === userEmail);

            users.splice(index, 1);

            res.redirect('/users');
        } catch (e) {
            res.redirect('notFound');
        }
    }
};
