<template>
    <div id="login">

        <div class="login_header"> 头</div>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>
<style>
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