<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    align="center"
                    prop="index"
                    label="#"
                    width="80">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="id"
                    label="ID"
                    width="100">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="name"
                    label="用户姓名">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="data"
                    label="注册日期">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="address"
                    label="注册地址">
            </el-table-column>
        </el-table>
        <div class="block">
            <span class="demonstration">显示总数</span>
            <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    layout="total, prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "user_list",
        data() {
            return {
                tableData: [],  //总的数据
                currentPage: 1,
            }
        },
        methods: {
            ajax(val) {
                val = val || 1;
                let that = this;
                let arr = [];
                axios.get('https://elm.cangdu.org/v1/users/list', {
                    params: {
                        limit: 20
                    }
                }).then(function (response) {
                    console.log(response.data);
                    response.data.forEach(function (item, i) {
                        arr.push({
                            index: (val - 1) * 20 + i + 1,
                            data: item.registe_time || '空',
                            name: item.username || '空',
                            address: item.city || '空',
                            id: item.user_id || '空',
                        })
                    });
                    that.tableData = arr;
                })
            },
            //currentPage 改变时会触发
            handleCurrentChange(val) {
                console.log("当前页:" + val);
                this.ajax(val)
            }
        },
        created: function () {
            this.ajax()
        }
    }
</script>

<style scoped lang="less">
    .block {
        margin-top: 20px;
    }
</style>
