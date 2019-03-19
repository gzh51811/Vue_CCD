<template>
    <div class="loginMain">
        <div class="login_top">
            <div class="top_tu">
                <img src="../assets/login_yan.png" alt="">
            </div>
            <div class="top_btn">
                <div class=" btn phoneLogin" @click="phoneLogin">
                    <i></i>
                    <span>手机号码登录</span>
                </div>
                <div class=" btn emaliLogin" @click="emailLogin">
                    <i></i>
                    <span>邮箱帐号登录</span>
                </div>
                <div class="login_reg" @click="ReglLogin">
                    <span>手机号快捷注册</span>
                    <i></i>
                </div>
            </div>
        </div>
        <div class="login_bottom">
            <div class="bo_link">
                <i class="wx"></i>
                <span>微信</span>
            </div>
            <div class="bo_link">
                <i class="qq"></i>
                <span>QQ</span>
            </div>
            <div class="bo_link">
                <i class="wb"></i>
                <span>微博</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            phoneLogin() {
                this.$router.push({
                    name: 'phone'
                });
            },
            emailLogin() {
                this.$router.push({
                    name: 'email'
                });
            },
            ReglLogin() {
                this.$router.push({
                    name: 'regphone'
                });
            }
        }
    }
</script>
<style scoped>
    .top_tu {
        padding: 2.1333rem 0;
        text-align: center;
    }

    .top_tu img {
        width: 3.5733rem;
        height: 1.2rem;
    }

    .top_btn {
        width: 100%;
        padding: 0 0.5333rem;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.4267rem;
    }

    .btn {
        width: 100%;
        height: 1.2533rem;
        line-height: 1.2533rem;
        border: 0.0267rem solid #b4282d;
        border-radius: 0.0533rem;
        text-align: center;
        overflow: hidden;
        margin-bottom: 16px;
    }

    .phoneLogin {
        background: #b4282d;
        color: #fff;
    }

    .top_btn i {
        display: inline-block;
        vertical-align: middle;
        width: 0.5333rem;
        height: 0.5333rem;
        margin-right: 0.2133rem;
    }

    .top_btn span {
        display: inline-block;
        vertical-align: middle;
    }

    .phoneLogin i {

        background: url(../assets/login_jlt.png) no-repeat 0 -27px;
        background-size: 20px 150px;
    }

    .emaliLogin {
        background-color: transparent;
        color: #b4282d;
    }

    .emaliLogin i {
        background: url(../assets/login_jlt.png) no-repeat 0 0;
        background-size: 20px 150px;
    }

    .login_reg {
        height: 0.5333rem;
        line-height: 0.5333rem;
    }

    .login_reg i {
        width: 0.3733rem;
        height: 0.3733rem;
        margin-left: 0.0533rem;
        margin-right: 0.2133rem;
        background: url(../assets/login_jtou.png) no-repeat;
        background-size: 100% 100%;
    }

    .login_bottom {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 1.0667rem;
        height: 0.5333rem;
        text-align: center;
    }

    .bo_link {
        height: 0.5333rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 0.5333rem;
    }

    .bo_link i {
        display: inline-block;
        vertical-align: middle;
        width: 0.5333rem;
        height: 0.5333rem;
        line-height: 0.5333rem;
        text-align: center;

        background-size: 98%;
    }

    .wx {
        background: url(../assets/login_weixin.png)no-repeat;
    }

    .qq {
        background: url(../assets/login_QQ.png)no-repeat;
    }

    .wb {
        background: url(../assets/login_weibo.png)no-repeat;
    }

    .bo_link span {
        /* font-size: 10px; */
        display: inline-block;
        vertical-align: middle;
        height: 0.5333rem;
        line-height: 0.5333rem;
        text-align: center;
        color: #7F7F7F;
        margin-left: 0.0533rem;
    }

    .bo_link:nth-child(3) {
        border-right: 0;
    }
</style>