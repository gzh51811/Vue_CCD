const express = require('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
const urlencodedParser = bodyParser.urlencoded({
    extended: false
  });
  // 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();
router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    // get请求的参数
    let {code,_id} = req.query;
    console.log(code , _id);
    if(code == "1"){
        let str = await db.find('goods_list',{ });
        // console.log(str);
        res.send(str);
    }else if(code == "2"){
        let str = await db.find('goods_list',{_id:ObjectId(_id)});
        // console.log(str);
        res.send(str);
    }
});
module.exports = router;