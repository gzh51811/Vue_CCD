<template>
    <div id="reg">
        <myheader />

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