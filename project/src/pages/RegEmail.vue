<template>
    <div id="mail">
        <div class="p_tu">
            <p>邮箱注册</p>
        </div>
        <div class="p_from">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
                <el-form-item prop="email">
                    <el-input type="text" v-model="ruleForm2.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
                </el-form-item>
            </el-form>
            <div class="reg_link">
                <label>
                    <span class="link_chenk jlt">
                        <input type="checkbox" class="zc-un-login">
                    </span>
                    我同意
                    <a href="javascript:;">《服务条款》</a>
                    和
                    <a href="javascript:;">《网易隐私政策》</a>
                </label>
            </div>
            <div class="login_reg" @click="ReglLogin">
                <span>手机号注册</span>
                <i></i>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    // ElementUI以插件的形式来扩展Vue的功能
    Vue.use(ElementUI);
    export default {
        data() {
            var checkEmail = (rule, value, callback) => {
                const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
                if (!value) {
                    return callback(new Error('邮箱不能为空'))
                }
                setTimeout(() => {
                    if (mailReg.test(value)) {
                        callback()
                    } else {
                        callback(new Error('请输入正确的邮箱格式'))
                    }
                }, 100)
            }
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    email: '',
                },
                rules2: {
                    email: [{
                        validator: checkEmail,
                        trigger: 'blur'
                    }],
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('http://localhost:3000/reg', {
                            username: this.ruleForm2.email,
                            password: this.ruleForm2.pass
                        }).then(res => {
                            if (res.data.ok !== 1) {
                                alert(res.data.ok);
                            } else {
                                this.$router.push({
                                    name: 'email'
                                });
                            }

                        });
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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
    .p_tu {
        text-align: center;
        margin: 3.125rem 0;
        font-size: 1.25rem;
    }

    .p_from {
        margin: 0 1.25rem;
    }

    .el-button--primary {
        color: #FFF;
        background: #b4282d;
        border-color: #b4282d;
        font-size: 1rem;
    }

    .el-button {
        width: 100%;

    }

    .btn {
        width: 100%;
        height: 2.9375rem;
        line-height: 2.9375rem;
        border: .0625rem solid #b4282d;
        border-radius: .125rem;
        text-align: center;
        overflow: hidden;
        margin-bottom: 1rem;
        color: #b4282d;
        font-size: 1rem;
    }

    .reg_link {
        color: #7f7f7f;
        position: relative;
        overflow: hidden;
        margin-bottom: 1.25rem;
        font-size: .875rem;
    }

    .reg_link a {
        color: #007AFF;
        text-decoration: none;
    }

    .jlt {
        background: url('../assets/reg_jlt.png')no-repeat -330px -92px;
    }

    .zc-un-login {
        width: .875rem;
        height: .875rem;
        margin: 0;
        opacity: 0;
        cursor: pointer;
    }

    .link_chenk {
        display: block;
        float: left;
        margin-right: .3125rem;
        width: .875rem;
        margin-top: .1875rem;
        height: .875rem;
        cursor: pointer;
        border: solid .0625rem #aaa;
        color: #999;
        font-size: .75rem;
    }

    .login_reg {
        height: 1.25rem;
        line-height: 1.25rem;
        font-size: 1rem;
        text-align: center;
    }

    .login_reg i {
        display: inline-block;
        vertical-align: middle;
        width: .875rem;
        height: .875rem;
        margin-left: .125rem;
        margin-right: .5rem;
        background: url(../assets/login_jtou.png) no-repeat;
        background-size: 100% 100%;
    }
</style>