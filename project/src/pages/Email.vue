<template>
    <div id="phone">
        <div class="p_tu">
            <img src="../assets/login_yan.png" alt="">
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
                <div class="wji">
                    <a href="javascript:;" class="regs" @click="ReglLogin">注册账号</a>
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
                    email: ''
                },
                rules2: {
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    email: [{
                        validator: checkEmail,
                        trigger: 'blur'
                    }],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$axios.post('http://localhost:3000/login', {
                            username: this.ruleForm2.email,
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
                                alert('邮箱或密码不正确');
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
                    name: 'regemail'
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
        line-height: 1.25rem;
        overflow: hidden;
    }

    .wji a {
        cursor: pointer;
        color: #7f7f7f !important;
        float: right;
    }

    .wji .regs {
        float: left;
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
        border-radius: .125rem;
        text-align: center;
        overflow: hidden;
        margin-bottom: 1rem;
        color: #b4282d;
        font-size: 1rem;
    }
</style>