<template>
    <div class="cart">
        <h2>购物车 <a href="######">编辑</a></h2>
        <div class="cart_main">
            <div class="cart_post">
                <p>已满足免邮条件</p>
            </div>
            <div class="cart_activety">
                <div class="activety_top">
                    <span>全场加价购</span>
                    <p>已满足满130元可超值换购</p>
                    <a href="######">再逛逛 ></a>
                </div>
                <div class="activety_btm">
                    去换购商品
                </div>
            </div>
            <ul class="cart_goods">
                <li v-for="goods in cartlist" :key="goods._id">
                    <div class="cart_checked">
                        <van-checkbox v-model="checked" checked-color="#ab2b2b"></van-checkbox>
                    </div>
                    <div class="cart_img">
                        <img :src="goods.imgurl" alt="">
                        <span></span>
                    </div>
                    <div class="cart_conent">
                        <p>{{goods.name}}</p>
                        <div class="cart_color">M; 藏青色</div>
                        <span>￥：{{goods.price}}</span>
                    </div>
                    <div class="cart_number">
                        <div class="cart_sub" @click="sub(goods._id,goods.qty,goods.price)" >-</div>
                        <input type="number" :value="goods.qty">
                        <div class="cart_add" @click="add(goods._id,goods.qty,goods.price)" >+</div>
                    </div>
                </li>
            </ul>
            <div class="cart_footer">
                <div class="checked_all">
                    <van-checkbox v-model="checked" checked-color="#ab2b2b">已选(1)</van-checkbox>
                </div>
                <div class="number_all">
                    合计：¥1499
                </div>
                <div class="cart_buy">下单</div>
            </div>
        </div>
        <div id="Footer">
            <Xfooter Fnum="3"/>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
import Vue from "vue";
import Xfooter from "../components/Xfooter.vue";
import { Card } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Card);
Vue.use(Checkbox).use(CheckboxGroup);
export default {
    data(){
        return {
            checked: true
        }
    },
    components: {
        Xfooter
    },
    computed:{
        ...mapState([
            'cartlist'//映射computed.cartlist为this.$store.state.cartlist
        ])
    },
    methods:{
        ...mapMutations({
            remove:'removeGoods',
        }),
        sub(_id,qty,price){
            // 减数量
            if(qty > 1){
                this.$store.commit('changeQty',{_id,qty:qty-1});
            }  
        },
        add(_id,qty,price){
            // 加数量
            this.$store.commit('changeQty',{_id,qty:qty+1});
        },
        unitPrice(){

        }
    },
    mounted(){
        console.log(this.$store.state.cartlist);
        
        // var all_price = 
    }

}
</script>
<style lang="scss" scoped>
    .cart{
        display: flex;
        width: 100%;
        h2{
            width: 100%;
            height: 3rem;
            background: #fff;
            border-bottom:.0625rem solid #eee;
            position: fixed;
            top:0;
            text-align: center;
            line-height: 3rem;
            font-size: 1.25rem;
            font-weight: normal;
            color:#333;
            a{
                font-size: 1rem;
                position: absolute;
                right:1.25rem;
                color:#333;
            }
        }
        .cart_main{
            margin:3rem 0 8rem 0;
            flex:1;
            .cart_post{
                height: 3rem;
                background: #fff8d8;
                color:#f48f18;
                padding:.625rem 1.25rem;
                font-size: 1rem;
                p{
                    line-height: 1.75rem;
                }
            }
            .cart_activety{
                width: 100%;
                border-bottom: .625rem solid #f4f4f4;
                background: #fff;
                .activety_top{
                    padding:.625rem .625rem .625rem 1.25rem;
                    background: #fff;
                    overflow: hidden;
                    border-bottom: .0625rem solid #eee;
                    span{
                        margin-left:.225rem;
                        display: block;
                        float: left;
                        font-size: 0.75rem;
                        color:#fff;
                        background: #fc685f;
                        padding:.125rem 0.25rem;
                    }
                    p{
                        font-size: 1rem;
                        float: left;
                        margin-left:.625rem;
                    }
                    a{
                        display: block;
                        float:right;
                        font-size: 1rem;
                        color:#ab2b2b;
                    }
                }
                .activety_btm{
                    padding:.625rem .625rem .625rem 2.25rem;
                    font-size: .875rem;
                    border-bottom: .0625rem solid #eee;
                }
            }
            .cart_goods{
                height: auto;
                background: #fff;
                overflow: auto;
                li{
                    width: 100%;
                    height: 7rem;
                    display: flex;
                    margin:.625rem 0;
                    background: #fff;
                    margin-bottom: .3125rem;
                    .cart_checked{
                        text-align: center;
                        flex: 1;
                        line-height: 7rem;
                    }
                    .cart_img{
                        flex:2;
                        img{
                            width: 100%;
                            max-height:7rem;
                            vertical-align: middle;
                        }
                        span{
                            width: 0;
                            height: 100%;
                            vertical-align: middle;
                            display: inline-block;
                        }
                    }
                    .cart_conent{
                        flex:4.5;
                        font-size: 1.25rem;
                        padding:.625rem;
                        p{
                            width: 100%;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            color:#333;
                        }
                        .cart_color{
                            width: 5rem;
                            text-align: center;
                            background: #fafafa;
                            font-size: 1rem;
                        }
                        span{
                            display: inline-block;
                            margin-top:0.825rem;
                            color:#333;
                        }
                    }
                    .cart_number{
                        flex:2.5;
                        text-align: center;
                        font-size: 1rem;
                        padding-top:4.5rem;
                        input{
                            text-align: center;
                            float: left;
                            width: 2.2rem;
                            border:.0625rem solid #666;
                        }
                        .cart_sub{
                            width: 1.5rem;
                            float: left;
                            border:.0625rem solid #bbb;
                        }
                        .cart_add{
                            width: 1.5rem;
                            float: left;
                            border:.0625rem solid #bbb;
                        }
                    }
                }
            }
            .cart_footer{
                background: #fff;
                position: fixed;
                bottom:5rem;
                width: 100%;
                height: 3.75rem;
                display: flex;
                line-height: 3.75rem;
                .checked_all{
                    flex:2;
                    text-align: center;
                    font-size: 1.25rem;
                }
                .number_all{
                    flex:3;
                    text-align: right;
                    padding-right:1.25rem;
                    font-size: 1rem;
                    color:#ab2b2b;
                }
                .cart_buy{
                    flex: 2.5;
                    text-align: center;
                    background: #ab2b2b;
                    color:#fff;
                    font-size: 1.25rem;
                }
            }
        }
        #Footer {
            width: 100%;
            height: 5rem;
            position: fixed;
            bottom: 0;
        }
    }
</style>
