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
                <li class="list_item" v-for="item in list_goods" :key="item._id">
                    <div class="item">
                        <!-- /img/good_1.366b1ca5.jpg -->
                        <!-- ../assets/good_1.jpg -->
                        <img :src="item.imgurl" @click="golist(item._id)" alt="">
                        <p @click="golist" >{{item.title}}</p>
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
            list_goods:[]
        }
    },
    components:{
        myheader,
    },
    methods:{
        golist(id){
            this.$router.push({
                name:"goods",
                params:{
                    code:2,
                    id
                },
                query:{
                    code:2,
                    id
                }
            });
        }
    },
    created(){
        // 初始化渲染
        this.$axios.get("http://localhost:3000/list",{
            params:{
                code:1,
            }
        }).then(res => {
            // console.log(res.data[0].imgurl);
            this.list_goods = res.data;
            // this.list_goods =  res.data.map(item=>{
            //     // console.log(item.imgurl);
            //     var str = item.imgurl.replace('../','');
            //     item.imgurl = require('../'+str);
            //     return item;
            // })
            // console.log(list_goods);
            
        });
    }
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
                height:14.5rem;
                margin:1%;
                float: left;
                .item{
                    width: 100%;
                    height: 100%;
                    img{
                        display: block;
                        width: 100%;
                        height: 11.25rem;
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
