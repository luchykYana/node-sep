const users = require('../bd/users');

module.exports = {
    getLogin: async (req, res) => {
        try {
            res.render('login');
        } catch (e) {
            res.redirect('notFound');
        }
    },

    postLogin: async (req, res) => {
        try {
            users.push(req.body);

            res.redirect('/users');
        } catch (e) {
            res.redirect('notFound');
        }
    }
};
