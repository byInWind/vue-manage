<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer">
                <div class="manage_tip">
                    <p>elm后台管理系统</p>
                </div>
                <el-form ref="loginForm">
                    <el-form-item prop="username">
                        <el-input v-model="user_name" placeholder="用户名"><span>dsfsf</span></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="password" type="password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
                    </el-form-item>
                </el-form>
                <p class="tip">温馨提示：</p>
                <p class="tip">未登录过的新用户，自动注册</p>
                <p class="tip">注册过的用户可凭账号密码登录</p>
            </section>
        </transition>
    </div>
</template>

<script>
    import axios from 'axios'
    import router from '../route'

    export default {
        name: "login",
        data: function () {
            return {
                loginForm: '',
                user_name: '',
                password: ''
            }
        },
        methods: {
            submitForm() {
                let that = this;
                if (that.user_name && that.password) {
                    axios.post('https://elm.cangdu.org/admin/login', {
                        user_name: that.user_name,
                        password: that.password,
                    }).then(function () {
                        // router.push({path: '/views/user_list'})
                        window.location.hash = "#/views/user_list"
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">

    .login_page {
        height: 100vh;
        width: 100%;
        background-color: #324057;
    }

    .manage_tip {
        position: absolute;
        width: 100%;
        top: -100px;
        left: 0;
        p {
            font-size: 34px;
            color: #fff;
        }
    }

    .form_contianer {
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        width: 40%;
        margin: 0 auto;
        transform: translateY(80%);
        .submit_btn {
            width: 100%;
            font-size: 16px;
        }
    }

    .tip {
        font-size: 12px;
        color: red;
    }

</style>
