const router = require('express').Router();

const {userController} = require('../сontrollers');
const {userMiddleware} = require('../middlewares');

router.get('/', userController.getUsers);
router.get('/:userId', userMiddleware.isUserExist, userController.getUserById);

module.exports = router;
