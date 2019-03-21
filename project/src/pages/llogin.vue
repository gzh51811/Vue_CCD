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
        padding: 5rem 0;
        text-align: center;
    }

    .top_tu img {
        width: 8.375rem;
        height: 2.8125rem;
    }

    .top_btn {
        width: 100%;
        padding: 0 1.25rem;
        box-sizing: border-box;
        text-align: center;
        font-size: 1rem;
    }

    .btn {
        width: 100%;
        height: 2.9375rem;
        line-height: 2.9375rem;
        border: 1px solid #b4282d;
        border-radius: 1.25rem;
        text-align: center;
        overflow: hidden;
        margin-bottom: 1rem;
    }

    .phoneLogin {
        background: #b4282d;
        color: #fff;
    }

    .top_btn i {
        display: inline-block;
        vertical-align: middle;
        width: 1.25rem;
        height: 1.25rem;
        margin-right: .5rem;
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
        height: 1.25rem;
        line-height: 1.25rem;
    }

    .login_reg i {
        width: .875rem;
        height: .875rem;
        margin-left: 1.25rem;
        margin-right: .5rem;
        background: url(../assets/login_jtou.png) no-repeat;
        background-size: 100% 100%;
    }

    .login_bottom {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 2.5rem;
        height: 1.25rem;
        text-align: center;
    }

    .bo_link {
        height: 1.25rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 1.25rem;
    }

    .bo_link i {
        display: inline-block;
        vertical-align: middle;
        width: 1.25rem;
        height: 1.25rem;
        line-height: 1.25rem;
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
        height: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        color: #7F7F7F;
        margin-left: 1.25rem;
    }

    .bo_link:nth-child(3) {
        border-right: 0;
    }
</style>