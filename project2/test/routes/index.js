const express = require('express');
const router = express.Router();


const UserRouter = require('./users');
const LoginRouter = require('./login');
const ListRouter = require('./list');
const CartRouter = require('./cart');

router.use('/reg', UserRouter);
router.use('/login', LoginRouter);
router.use('/list',ListRouter);
router.use('/cart',CartRouter);

module.exports = router;