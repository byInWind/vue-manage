<template>
    <div>
        <el-table
                v-loading="loading"
                :row-key="getRowKeys"
                :expand-row-keys="expands"
                :data="tableData"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="店铺名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="店铺 ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="商品描述">
                            <span>{{ props.row.des }}</span>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label=" 评分">
                            <span>{{ props.row.rating }}</span>
                        </el-form-item>
                        <el-form-item label="销售量">
                            <span>{{ props.row.recent_order_num }}</span>
                        </el-form-item>
                        <el-form-item label="分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="商铺ID"
                    prop="id">
            </el-table-column>
            <el-table-column
                    label="店铺名称"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="店铺地址"
                    prop="address">
            </el-table-column>
            <el-table-column
                    label="店铺介绍"
                    prop="des">
            </el-table-column>

        </el-table>
        <div class="block">
            <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "shop_list",
        data() {
            return {
                loading: false,
                tableData: [],  //总的数据
                currentPage: 1,
                // 获取row的key值
                getRowKeys(row) {
                    return row.id;
                },
                // 要展开的行，数值的元素是row的key值
                expands: []
            }
        },
        methods: {
            ajax(val, callback) {
                this.loading = true;
                val = val || 1;
                let that = this;
                let arr = [];
                axios.get('https://elm.cangdu.org/shopping/restaurants', {
                    params: {
                        latitude: 31.22967,
                        longitude: 121.4762,
                        limit: 20,
                        offset: val
                    }
                }).then(function (response) {
                    response.data.forEach(function (item, i) {
                        arr.push({
                            index: (val - 1) * 20 + i + 1,
                            name: item.name || '空',
                            address: item.address || '地址为空',
                            id: item.id || '空',
                            des: item.description || '空',
                            category: item.category || '空',
                            phone: item.phone || '空',
                            rating: item.rating || '空',
                            recent_order_num: item.recent_order_num || '空',
                        })
                    });
                    that.tableData = arr;
                    that.loading = false;
                    console.log(response.data);
                    if (callback) {
                        callback()
                    }
                })
            },
            //currentPage 改变时会触发
            handleCurrentChange(val) {
                console.log("当前页:" + val);
                this.ajax(val)
            }
        },
        created: function () {
            //获取数据
            this.ajax(null, () => {
                // 在这里你想初始化的时候展开哪一行都可以了
                this.expands.push(this.tableData[0].id);
            })
        }
    }
</script>

<style scoped lang="less">
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .block {
        text-align: center;
        margin-top: 20px;
    }
</style>
