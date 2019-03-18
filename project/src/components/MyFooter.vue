// 购物车底部
<template>
    <div class="footer">
        <ul>
            <li></li>
            <li class="foot-buy">立即购买</li>
            <li class="foot-cart">加入购物车</li>
        </ul>
    </div>
</template>
<script>
export default {
    
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
