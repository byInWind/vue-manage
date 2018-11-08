<template>
    <div class="box">
        <h3>选择食品种类</h3>
        <el-form ref="form" :model="form">
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add_goods",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .box {
        width: 48%;
        margin: 0 auto;
        text-align: center;
        h3{
            margin-bottom: 15px;
        }
        .el-select {
            width: 83%;
        }
    }
</style>
