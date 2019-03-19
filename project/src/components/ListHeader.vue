<template>
    <div class="listheader">
        <div class="icon_1" @click="gotohome"><Icon type="ios-home-outline" /></div>
        <h2>网易严选</h2>
        <div class="icon_2"><Icon type="ios-search-outline" /></div>
        <div class="icon_3"><Icon type="ios-cart-outline" /></div>
    </div>
</template>
<script>
export default {
    name:'ListHeader',
    methods:{
        gotohome(){
            this.$router.push("/");
        }
    }

}
</script>
<style lang="scss" scoped>
    .listheader{
        width: 100%;
        position: fixed;
        top: 0;
        height: 3.1579rem;
        display: flex;
        background: #fff;
        z-index: 10;
        h2{
            text-align:center;
            flex: 6;
            font-size: 1.5rem;
            line-height: 3.2rem;
        }
        i{
            font-size: 2.4rem;
        }
        .icon_1,.icon_2,.icon_3{
            flex: 1;
            line-height: 3.2rem;
        }
    }

</style>
