<template>
    <div class="goodslist">
        <myheader />
        <div class="goods_main">
            <listvant v-if="goods_trait[0]" :child-msg="goods_trait" />
            <div class="goods_trait" v-if="goods_trait[0]">
                <dl class="goods_dl" >
                    <dt>
                        <img :src="goods_trait[0].imgurl" alt="">
                    </dt>
                    <dd>
                        <p>这个商品</p>
                        <p>超级棒的</p>
                    </dd>
                </dl>
                <dl class="goods_dl" >
                    <dt>
                        <img :src="goods_trait[0].imgurl" alt="">
                    </dt>
                    <dd>
                        <p>这个商品</p>
                        <p>超级棒的</p>
                    </dd>
                </dl>
                <dl class="goods_dl" >
                    <dt>
                        <img :src="goods_trait[0].imgurl" alt="">
                    </dt>
                    <dd>
                        <p>这个商品</p>
                        <p>超级棒的</p>
                    </dd>
                </dl>
            </div>
            <h3><b>￥</b>180</h3>
            <div class="goods_vip">
                超级会员价<b>160</b>
                <a href="javascript:;">立即开通 > </a>
            </div>
            <div class="goods_title" v-if="goods_trait[0]">
                <h4>{{goods_trait[0].title}}</h4>
                <span>{{goods_trait[0].subhead}}</span>
                <a href="######">
                    <b>98.8%</b>
                    <p>好评率</p>
                </a>
            </div>
            <ul class="goods_ul">
                <li>
                    <p>请选择规格数量</p>
                </li>
                <li>
                    <p>领券：</p>
                </li>
                <li>
                    <p>配送：</p><span>请选择配送地址</span>
                </li>
                <li>
                    <p>积分：</p><span>购买最高得12积分</span>
                </li>
                <li class="goods_serve">
                    <p>服务：</p>
                    <div class="serve">
                        <span>不支持30天无忧退换货</span>
                        <span>网易自营品牌</span>
                        <span>满88元免邮费</span>
                        <span>48小时快速退款</span>
                        <span>国内部分地区无法配送</span>
                    </div>
                </li>
            </ul>
            <div class="goods_comment">
                <div class="comment_top">
                    <p>用户评价（652799）</p>
                    <a href="###"><b>99.1%</b>好评率</a>
                </div>
                <div class="comment_btm">
                    <div class="comment_btm_1">
                        <dl>
                            <dt>
                                <img src="" alt="">
                            </dt>
                            <dd>
                                <span>陈*****</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="comment_btm_2">
                        <p>2019-03-16 20:58:36 XXL 藏蓝色</p>
                    </div>
                    <div class="comment_btm_3">
                        质量非常好，棒棒喔
                    </div>
                </div>
            </div>
            <div class="goods_param">
                <h4>商品参数</h4>
                <ul>
                    <li><span>版型</span><p>标准型</p></li>
                    <li><span>适用人群</span><p>男士</p></li>
                    <li><span>适用季节</span><p>不限季节</p></li>
                    <li><span>尺码</span><p>XXL、XL、L、M、S</p></li>
                    <li><span>风格</span><p>职场商务</p></li>
                    <li><span>厚度</span><p>普通</p></li>
                    <li><span>适用场景</span><p>婚礼、上班、办公室</p></li>
                    <li><span>材质</span><p>15%马海毛 85%羊毛</p></li>
                    <li><span>售后服务</span><p>本产品适用服装产品退还货政策，承诺7天无理由退货，超棒的</p></li>

                </ul>
            </div>
        </div>
        <myfooter v-if="goods_trait[0]" :child-msg="goods_trait"/>
    </div>
</template>
<script>
import myheader from '../components/ListHeader.vue';
import listvant from '../components/ListVant.vue';
import myfooter from '../components/MyFooter.vue';
export default {
    components:{
        myheader,
        listvant,
        myfooter
    },
    data(){
        return {
            goods_trait:[],
        }
    },
    watch:{
        $route(to,from){
            this.getData();
        }
    },
    methods:{
       async getData(){
            let { id:_id, code } = this.$route.query;
            let res = await this.$axios.get("http://localhost:3000/list",{
                params:{
                    code,
                    _id
                }
            });
            this.goods_trait = res.data;
            // console.log(this.goods_trait);
            // 使用相对路径的方法
            // let str = res.data[0].imgurl.replace('../','');
            // res.data[0].imgurl =  require('../'+str);
            // this.goods_trait = res.data;
        }
    },
    created(){
        this.getData();
    }
    
}
</script>
<style <style lang="scss" scoped>
html,body{width: 100%;height: 100%;}
.goodslist{
    display: flex;
    flex-direction: column;
    .goods_main{
        margin: 3.1579rem 0 3.1579rem 0;
        flex-direction: column;
        overflow: auto;
        flex: 1;
        .goods_trait{
            width: 100%;
            height: 3.125rem;
            background: #f9f9f9;
            display: flex;
            .goods_dl{
                flex:1;
                float: left;
                display: flex;
                justify-content: space-around;
                align-items:center;
                dt{
                    width: 2rem;
                    height: 2rem;
                    float: left;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dd{
                    font-size: .875rem;
                }
            }
        }
        h3{
            margin-bottom: .625rem;
            font-size: 1.675rem;
            color:#b4282d;
            padding-left:.625rem;
        }
        .goods_vip{
            width: 90%;
            height: 1.875rem;
            margin:auto;
            background: #f9f5ef;
            line-height: 1.875rem;
            padding:0 0.625rem 0 0.625rem;
            box-sizing: border-box;
            font-size: .875rem;
            a{
                float: right;
                color:#333;
            }
        }
        .goods_title{ 
            width: 100%;
            position: relative;
            height: 5rem;
            border-bottom: .625rem solid #f4f4f4;
            h4{
                position: absolute;
                top:.625rem;
                left:2rem;
                font-size: 1.2rem;
                color:#333;
            }
            span{
                position: absolute;
                top:2.2rem;
                left:2rem;
                font-size: 1rem;
            }
            a{
                position: absolute;
                display: block;
                right:1.25rem;
                top:50%;
                height: 2.6rem;
                color:#333;
                margin-top:-1.3rem;
                font-size: .875rem;
                b{
                    font-size: 1rem;
                    color:#b4282d;
                }
            }
        }
        .goods_ul{ 
            width: 100%;
            height: auto;
            border-bottom: .625rem solid #f4f4f4;
            li{
                padding:1rem;
                overflow: hidden;
                border-bottom: .0025rem solid #eee;
                margin-left:1rem;
                font-size: 1rem;
                p{
                    float: left;
                }
                span{
                    color:#666;
                }
            }
            .goods_serve{
                .serve{
                    float: left;
                    width: 18.75rem;
                    span{
                        margin:0 .625rem 0 .625rem;
                        color:#444;
                        display: block;
                        float: left;
                    }
                }
            }
        }
        .goods_comment{
            overflow: hidden;
            border-bottom: .625rem solid #f4f4f4;
            .comment_top{
                padding:.625rem;
                font-size: 1rem;
                overflow: hidden;
                p{
                    float: left;
                }
                a{
                    float:right;
                    color:#333;
                    b{
                        color:#b4282d;
                    }
                }
            }
            .comment_btm{
                height: 12rem;
                .comment_btm_1{
                    height: 2.8rem;
                    padding:.625rem;
                    dl{
                        dt{
                            width: 1.875rem;
                            height: 1.875rem;
                            border-radius: 50%;
                            background: #b4282d;
                            float: left;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        dd{
                            float: left;
                            margin-left:.625rem;
                            span{
                                font-size: 1rem;
                                line-height: 2 rem;
                            }
                        }
                    }
                }
                .comment_btm_2{
                    padding-left:.625rem;
                    p{
                        font-size: .875rem;
                        color:#999;
                    }
                }
                .comment_btm_3{
                    padding:.625rem;
                    font-size: 1rem;
                }
            }
        }
        .goods_param{
            height: auto;
            padding:.625rem;
            h4{
                font-size: 1rem;
            }
            ul{
                li{
                    margin:0.8rem 0 0.8rem 0;
                    font-size: 1rem;
                    border-bottom:.0625rem solid #eee;
                    span{
                        display: block;
                        width: 6rem;
                        display: block;
                        float: left;
                        color:#999;
                    }
                    p{
                        overflow: hidden;
                        width: 16rem;
                        color:#333;
                    }
                }
            }
        }
        
    }
    

}
</style>