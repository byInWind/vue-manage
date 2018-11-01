<template>
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
</template>

<script>
    import axios from 'axios'

    export default {
        name: "user_list",
        data() {
            return {
                tableData: []
            }
        },
        created: function () {
            let that = this;
            axios.get('https://elm.cangdu.org/v1/users/list', {
                params: {
                    limit: 20
                }
            }).then(function (response) {
                console.log(response.data);
                response.data.forEach(function (item, i) {
                    that.tableData.push({
                        index: i + 1,
                        data: item.registe_time || '空',
                        name: item.username || '空',
                        address: item.city || '空',
                    })
                });
            })
        }
    }
</script>

<style scoped lang="less">

</style>
