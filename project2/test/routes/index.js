const express = require('express');
const router = express.Router();


const UserRouter = require('./users');
const LoginRouter = require('./login');
<<<<<<< HEAD
const ListRouter = require('./list');
const CartRouter = require('./cart');

router.use('/reg', UserRouter);
router.use('/login', LoginRouter);
router.use('/list',ListRouter);
router.use('/cart',CartRouter);
=======

router.use('/reg', UserRouter);
router.use('/login', LoginRouter);
>>>>>>> 73efa649945784e3dde8620215845b6e69fe8854

module.exports = router;