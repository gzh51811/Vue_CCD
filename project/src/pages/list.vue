<template>
    <div class="list">
        <myheader/>
        <div class="list_img">
            <img src="../assets/list_1.jpg" alt="">
        </div>
        <div class="list_title">
            <h3>纸品湿巾</h3>
            <p>和风设计，温和清洁</p>
        </div>
        <div class="list_goods">
            <ul>
                <li class="list_item" v-for="item in list_goods" :key="item.title">
                    <div class="item">
                        <img src="" alt="">
                        <p>{{item.title}}</p>
                        <span><b>￥</b>{{item.price}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
import myheader from '../components/ListHeader.vue';
export default {
    data(){
        return {
            list_goods:[{
                url:"",
                title:"我是标题",
                price:"666"
            },
            {
                url:"",
                title:"好巧，我也是哦",
                price:"999"
            }]
        }
    },
    components:{
        myheader,
    },
}
</script>
<style lang="scss" scoped>
.list{
    width: 100%;
    height: 100%;
    .list_img{
        display: flex;
        width: 100%;
        img{
            flex: 1;
            width: 100%;
            height: 100%;
        }
    }
    .list_title{
        width: 100%;
        height: 3.1579rem;
        padding-top:0.5263rem;
        // box-sizing: border-box;
        h3{
            font-size: 1rem;
            text-align: center;
            width: 100%;
        }
        p{
            font-size: .875rem;
            text-align: center;
            width: 100%;
        }
    }
    .list_goods{
        width: 100%;
        height: auto;
        ul{
            width: 100%;
            li{
                width: 48%;
                display: flex;
                justify-content: space-around;
                height:12.5rem;
                margin:1%;
                float: left;
                .item{
                    width: 100%;
                    height: 100%;
                    img{
                        display: block;
                        width: 100%;
                        height: 160px;
                        background: yellowgreen;
                    }
                    p{
                        width:8.75rem;
                        font-size: .875rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        margin-left:0.2632rem;
                    }
                    span{
                        font-size: 1rem;
                        color:#b4282d;
                        margin-left:0.2632rem;
                    }
                }
            }
        }
    }
}


    
</style>
