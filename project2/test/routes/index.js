const express = require('express');
const router = express.Router();


const UserRouter = require('./users');
const LoginRouter = require('./login');

router.use('/reg', UserRouter);
router.use('/login', LoginRouter);

module.exports = router;