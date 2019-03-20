// 购物车底部
<template>
    <div class="footer">
        <ul>
            <li></li>
            <li class="foot-buy">立即购买</li>
            <li class="foot-cart" @click="addcart()">加入购物车</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['childMsg'],
    methods:{
        addcart(){
            let { _id,imgurl,name,price } = this.childMsg[0];
            // 把商品信息存入数据库的购物车表
            this.$axios.post("http://localhost:3000/cart",{
                params:{
                    code:2,
                    _id,
                    imgurl,
                    name,
                    price,
                    qty:1
                }
            }).then(res => {
                // console.log(res);
            });

            // 获取购物车商品信息
            let currentGoods = this.$store.state.cartlist.filter(item=>item._id === _id)[0];
            // console.log(currentGoods);//.filter(item=>item.goods_id === goods_id)[0]
            // 判断当前商品是否添加过购物车
            // console.log("this.childMsg",this.childMsg);
            if(currentGoods){
                // 已添加则数量加一
                this.$store.commit('changeQty',{_id,qty:currentGoods.qty+1});
            }else{
                // 还未添加过，则添加商品
                this.$store.commit('addCartList',{
                    _id,
                    imgurl,
                    name,
                    price,
                    qty:1
                })
            }
            
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        height: 3.125rem;
        border-top:1px solid #ccc;
        ul{
            display: flex;
            height: 100%;
            li{
                height: 100%;
                text-align: center;
                float: left;
                flex: 1;
                font-size: 1rem;
                line-height: 3.125rem;
            }
            .foot-buy{
                color:#696969;
                border:1px solid #ccc;
            }
            .foot-cart{
                background: #b4282d;
                color:#fff;
            }
        }
    }
</style>
