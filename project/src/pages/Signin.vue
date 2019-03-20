<template>
    <div id="reg">

        <myheader />

        <router-view></router-view>
    </div>
</template>

<script>
import myheader from '../components/ListHeader.vue';
    export default {
        components:{
            myheader,
        }
    }
</script>
<style>
    #reg {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .login_header {
        width: 100%;
        flex: 1;
        height: 1.0667rem
    }

    .loginMain {
        width: 100%;
        height: 16.6133rem;
        flex: 4;
        background: #F2F5F4;
        box-sizing: border-box;
        position: relative;
    }
</style>