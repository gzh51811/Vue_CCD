<template>
    <div id="login">
<<<<<<< HEAD

        <div class="login_header"> 头</div>
=======
        <myheader />
        <!-- <div class="login_header"> 头</div> -->
>>>>>>> cyy

        <router-view></router-view>
    </div>
</template>

<script>
<<<<<<< HEAD
    export default {

    }
</script>
<style>
=======
import myheader from '../components/ListHeader.vue';
    export default {
        components:{
            myheader,
        }
    }
</script>
<style scoped>
>>>>>>> cyy
    #login {
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