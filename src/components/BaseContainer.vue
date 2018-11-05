<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item><router-link to="/views/login">退出登录</router-link></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "BaseContainer"
    }
</script>

<style scoped lang="less">
    .el-container {
        margin-left: 200px;
        .el-header {
            background-color: #eff2f7;
            color: #333;
            line-height: 60px;
            .el-breadcrumb {
                line-height: 4;
            }
            .el-dropdown {
                outline: none;
                position: absolute;
                top: 0;
                right: 20px;
            }
        }
    }
</style>
