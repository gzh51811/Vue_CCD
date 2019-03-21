<template>
    <div id="login">
        <myheader />
        <!-- <div class="login_header"> 头</div> -->

        <router-view></router-view>
    </div>
</template>

<script>
    import myheader from '../components/ListHeader.vue';
    export default {
        components: {
            myheader,
        }
    }
</script>
<style scoped>
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