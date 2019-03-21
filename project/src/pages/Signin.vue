<template>
    <div id="reg">
<<<<<<< HEAD

<<<<<<< HEAD
        <div class="login_header"> 头</div>
=======
=======
>>>>>>> cyy
        <myheader />
>>>>>>> cyy

        <router-view></router-view>
    </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
    export default {

=======
import myheader from '../components/ListHeader.vue';
=======
    import myheader from '../components/ListHeader.vue';
>>>>>>> cyy
    export default {
        components: {
            myheader,
        }
>>>>>>> cyy
    }
</script>
<style scoped>
    #reg {
        display: flex;
        flex-direction: column;
        height: 100%;
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