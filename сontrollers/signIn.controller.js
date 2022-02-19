module.exports = {
    getSignIn: async (req, res) => {
        try {
            res.render('signIn');
        } catch (e) {
            res.redirect('notFound');
        }
    },

    postSignIn: async (req, res) => {
        try {
            const user = req.user;

            res.render('userPage', {user});
        } catch (e) {
            res.redirect('notFound');
        }
    }
};
