<template>
    <div id="phone">
        <div class="p_tu">
            <img src="../assets/login_yan.png" alt="">
        </div>
        <div class="p_from">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
                <el-form-item prop="phone">
                    <el-input type="text" v-model="ruleForm2.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码">
                    </el-input>
                </el-form-item>
                <div class="wji">
                    <a href="javascript:;">忘记密码</a>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
                </el-form-item>
            </el-form>
            <div class="top_btn">
                <div class=" btn" @click="LoginReg">
                    <span>其他登录方式</span>
                </div>
            </div>
            <div class="login_reg" @click="ReglLogin">
                <span>注册账号</span>
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
            var validatePhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                } else {
                    var MobileRegex = /^1[0-9]{10}$/;
                    if (!MobileRegex.test(value)) {
                        callback(new Error('手机号码格式不正确！'))
                    } else {
                        callback();
                    }
                }
            };
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
                    phone: '',
                },
                rules2: {
                    phone: [{
                            validator: validatePhone,
                            trigger: 'blur'
                        },
                        {
                            required: true,
                            message: '请输入手机号',
                            trigger: 'blur'
                        },
                        {
                            pattern: /^1[34578]\d{9}$/,
                            message: '目前只支持中国大陆的手机号码'
                        }
                    ],
                    pass: [{
                            validator: validatePass,
                            trigger: 'blur'
                        }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$axios.post('http://localhost:3000/login', {
                            username: this.ruleForm2.phone,
                            password: this.ruleForm2.pass
                        }).then(res => {
                            if (res.data.str.length > 0) {
                                let token =
                                    `{"token":"${res.data.token}","name":"${res.data.str[0].username}","code":"1"}`
                                localStorage.setItem('user', token);
                                this.$router.push({
                                    name: 'personal'
                                });
                            } else {
                                alert('手机或密码不正确');
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
            LoginReg() {
                this.$router.push({
                    name: 'llogin'
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
    .p_tu {
        text-align: center;
        margin: 3.125rem 0 1.75rem 0;
    }

    .p_tu img {
        width: 6rem;
        height: 2rem;
    }

    .p_from {
        margin: 0 1.25rem;
    }

    .wji {
        font-size: 1rem;
        margin: 1.25rem 0;
    }

    .wji a {
        cursor: pointer;
        color: #7f7f7f !important;
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
        border: 1px solid #b4282d;
        border-radius: 1.25rem;
        text-align: center;
        overflow: hidden;
        margin-bottom: 1rem;
        color: #b4282d;
        font-size: 1rem;
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
        margin-left: 1.25rem;
        margin-right: .5rem;
        background: url(../assets/login_jtou.png) no-repeat;
        background-size: 100% 100%;
    }
</style>