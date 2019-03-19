// 商品详情页轮播图
<template>
    <div>
        <van-swipe @change="onChange">
            <van-swipe-item v-for="item in goods" :key="item.id">
                <div class="goods_itme">
                    <img :src="childMsg[0].imgurl" alt="">
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/5
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
    data(){
        return {
            current: 0,
            goods:[{
                id:"01",
            },
            {
                id:"02",
            },
            {
                id:"03",
            },
            {
                id:"04",
            },
            {
                id:"05",
            }]
        }
    },
    props:['childMsg'],
    methods:{
        onChange(index){
            this.current = index;
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
.goods_itme{
    width: 100%;
    height: 18.75rem;
    // background: rebeccapurple;
    img{
        width: 100%;
    }
}
.custom-indicator{
    position: relative;
    text-align: right;
    bottom: 1.625rem;
    right: 1rem;
    z-index: 10;
    
}
</style>

