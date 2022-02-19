const router = require('express').Router();

const {signInController} = require('../сontrollers');
const {signInMiddleware} = require('../middlewares');

router.get('/', signInController.getSignIn);

router.post('/', signInMiddleware.isEmailExist, signInController.postSignIn);

module.exports = router;
