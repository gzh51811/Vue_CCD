const express = require('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

const token = require('../utils/token');
// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();

router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    // post请求的参数
    let {
        username,
        password
    } = req.body;
    let str = await db.find('user', {
        username,
        password
    });
    let _token = token.create(username);
    res.send({
        str,
        token: _token
    });
});


module.exports = router;