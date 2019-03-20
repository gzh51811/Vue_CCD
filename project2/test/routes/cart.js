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
router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    // post请求的参数
    let {code,_id,imgurl,name,price,qty} = req.body.params;
    if(code == 2){
        let str = await db.find('cart',{b_id:_id}); 
        if(str.length > 0){
            let str1 = await db.update('cart',
                {b_id:_id},
                {$set:{qty:str[0].qty+1}
            });
            res.send(str1);
        }else{
            let str2 = await db.insert('cart',{
                b_id:_id,
                imgurl,
                name,
                price,
                qty:1
            });
            res.send(str2);
        }
    }else if(code == 1){
        let str = await db.find('cart',{});
        res.send(str);
    }else if(code == 3){
        let str = await db.update('cart',{_id:ObjectId(_id)},{$set:{qty}});
    }else if(code == 4){
        let str = await db.update('cart',{_id:ObjectId(_id)},{$set:{qty}});
    }
});

module.exports = router;
