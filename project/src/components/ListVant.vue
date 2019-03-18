// 商品详情页轮播图
<template>
    <div>
        <van-swipe @change="onChange">
            <van-swipe-item v-for="item in goods" :key="item.id">
                <div class="goods_itme">
                    <img src="" alt="">
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
                url:""
            },
            {
                id:"02",
                url:""
            }]
        }
    },
    methods:{
        onChange(index){
            this.current = index;
        }
    }
}
</script>
<style lang="scss" scoped>
.goods_itme{
    width: 100%;
    height: 18.75rem;
    // background: rebeccapurple;
}
.custom-indicator{
    position: relative;
    text-align: right;
    bottom: 1.625rem;
    right: 1rem;
    z-index: 10;
    
}
</style>

