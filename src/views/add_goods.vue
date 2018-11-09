<template>
    <div class="box">
        <h3>选择食品种类</h3>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="item.name" v-for="(item,i) in category_list" :key="i"></el-option>
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
                category_list: []
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
                let id = this.$route.params.id
                if (id) {

                } else {
                    alert('您需要先去选中店铺')
                }
            }
        },
        mounted() {
            let id = this.$route.query.id;
            console.log(this.$route, id)
        },
        created() {
            let id = this.$route.query.id;
            console.log(this.$route, id)
            if (id) {
                axios.get('https://elm.cangdu.org/shopping/getcategory/' + id,)
                    .then(function (response) {
                        console.log(response.data);
                        //清空数据
                        // this.loading = false;
                    })
            }
            else {
                let xx = confirm('您需要先去选中店铺，是否去选择店铺');
                if (xx) {
                    route.push('/views/shop_list')
                } else {
                    // route.go(-1)
                }
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
