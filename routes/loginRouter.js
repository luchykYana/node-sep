const router = require('express').Router();

const {loginController} = require('../сontrollers');
const {loginMiddleware} = require('../middlewares');

router.get('/', loginController.getLogin);

router.post('/', loginMiddleware.isEmailUniq, loginController.postLogin);

module.exports = router;
