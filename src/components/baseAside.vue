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
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <router-link to="/views/user">
                        <el-menu-item index="1-1">user</el-menu-item>
                    </router-link>
                    <router-link to="/views/asd">
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
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
    .el-menu-vertical-demo {
        height: 100vh;
    }
</style>
