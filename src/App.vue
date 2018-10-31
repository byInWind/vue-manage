<template>
    <div id="app">
        <baseAside></baseAside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    import baseAside from './components/baseAside'

    export default {
        name: 'app',
        components: {baseAside},
    }
</script>

<style lang="less">
    @import './assets/css/base.less';

    .el-header {
        background-color: #eff2f7;
        color: #333;
        line-height: 60px;
        .el-breadcrumb {
            line-height: 4;
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
