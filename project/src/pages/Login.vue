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
<<<<<<< HEAD
    export default {

    }
</script>
<style>
=======
import myheader from '../components/ListHeader.vue';
=======
    import myheader from '../components/ListHeader.vue';
>>>>>>> cyy
    export default {
        components: {
            myheader,
        }
    }
</script>
<style scoped>
>>>>>>> cyy
    #login {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .loginMain {
        width: 100%;
        height: 46rem;
        flex: 1;
        background: #F2F5F4;
        box-sizing: border-box;
        position: relative;
    }
</style>