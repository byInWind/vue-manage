<template>
    <div class="box">
        <h3>选择食品种类</h3>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option v-for="(item,i) in itemArr" :label="item.name" :value="item.name" :key="i"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <h3>添加食品</h3>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="食品名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="食品详情">
                <el-input v-model="form.details"></el-input>
            </el-form-item>
            <el-form-item label="包装费">
                <el-input-number v-model="form.price1" @change="handleChange1" :min="0" :max="10"
                                 label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="价格">
                <el-input-number v-model="form.price2" @change="handleChange2" :min="0" :max="100"
                                 label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from "axios"
    import route from "../route.js"

    export default {
        name: "add_goods",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    details: '',
                    price1: 0,
                    price2: 10
                },
                category_list: [],
                id: null,
                itemArr: []
            }
        },
        methods: {
            handleChange1(value) {
                console.log(value);
            },
            handleChange2(value) {
                console.log(value);
            },
            onSubmit() {
                if (this.id) {
                    axios.post('https://elm.cangdu.org/shopping/v2/updatefood', {
                        item_id: 20,
                        name: 20,
                        image_path: 20,
                        restaurant_id: 20,
                        category_id: 20,
                        specfoods: [{specs: '默认',packing_fee: 0,price: 20,}],
                        description: 20
                    }).then(function (response) {
                        console.log(response);
                        // that.tableData = arr;
                        // that.loading = false;
                    })
                } else {
                    this.$alert('您需要先去选中店铺', {
                        confirmButtonText: '确定'
                    });
                }
            }
        },
        created() {
            this.id = this.$route.query.id;
            console.log(this.$route, this.id);
            let that = this;
            if (this.id) {
                axios.get('https://elm.cangdu.org/shopping/getcategory/' + this.id,)
                    .then(function (response) {
                        that.itemArr = response.data.category_list;
                    })
            }
            else {
                this.$confirm('您需要先去选中店铺，是否去选择店铺', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    route.push('/views/shop_list')
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    })
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .box {
        width: 48%;
        margin: 0 auto;
        h3 {
            text-align: center;
            margin-bottom: 15px;
        }
        .el-select {
            width: 100%;
        }
    }
</style>
