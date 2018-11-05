<template>
    <el-col :span="4">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span>首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-plus"></i>
                    <span slot="title">数据管理</span>
                </template>
                <el-menu-item-group>
                    <router-link to="/views/shop_list">
                        <el-menu-item index="1-2">商家列表</el-menu-item>
                    </router-link>
                </el-menu-item-group>
                <router-link to="/views/user_list">
                    <el-menu-item index="1-1">用户列表</el-menu-item>
                </router-link>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-plus"></i>
                    <span slot="title">添加数据</span>
                </template>
                <el-menu-item-group>
                    <router-link to="/views/add_shop">
                        <el-menu-item index="1-1">添加商铺</el-menu-item>
                    </router-link>
                    <router-link to="/views/add_goods">
                        <el-menu-item index="1-2">添加商品</el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
                <i class="el-icon-edit"></i>
                <span slot="title"> <router-link to="/views/my">个人中心 </router-link></span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-edit"></i>
                <span slot="title" @click="xx">个人中心</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        name: "baseAside",
        data: function () {
            return {
                list: [
                    {
                        index: 1,
                        text: 'aa',
                        path: '',
                        icon: '',
                        child: [
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                        ]
                    },
                    {
                        index: 2,
                        text: 'aa',
                        path: '',
                        icon: '',
                        child: [
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                        ]
                    },
                    {
                        index: 3,
                        text: 'aa',
                        path: '',
                        icon: '',
                        child: [
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                        ]
                    },
                    {
                        index: 4,
                        text: 'aa',
                        path: '',
                        icon: '',
                        child: [
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                            {
                                index: 1,
                                text: 'aa',
                                path: '',
                            },
                        ]
                    },
                ]
            }
        },
        methods: {
            handleOpen() {
            },
            handleClose() {
            }
        }
    }
</script>

<style scoped lang="less">
    .el-col {
        min-width: 201px;
        .el-menu-vertical-demo {
            height: 100vh;
            position: fixed;
            width: 200px;
        }
    }
</style>
