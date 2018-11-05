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
                        <el-form-item label="评分">
                            <span>{{ props.row.rating }}</span>
                        </el-form-item>
                        <el-form-item label="销售量">
                            <span>{{ props.row.recent_order_num }}</span>
                        </el-form-item>
                        <el-form-item label="分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                        <el-form-item label="图片">
                            <span>{{ props.row.image_path }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    label="商铺ID"
                    prop="id"
                    width="80">
            </el-table-column>
            <el-table-column
                    align="center"
                    label="店铺名称"
                    prop="name">
            </el-table-column>
            <el-table-column
                    align="center"
                    label="店铺地址"
                    prop="address">
            </el-table-column>
            <el-table-column
                    align="center"
                    label="店铺介绍"
                    prop="des">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <router-link to="/views/add_shop">
                        <el-button size="mini">添加
                        </el-button>
                    </router-link>
                    <el-button
                            disabled
                            size="mini"
                            type="danger">删除
                    </el-button>
                </template>
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
        <el-dialog title="修改店铺信息" :visible.sync="show">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="店铺名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="店铺介绍">
                    <el-input v-model="form.intro"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="form.tel"></el-input>
                </el-form-item>
                <el-form-item label="店铺分类">
                    <el-checkbox-group v-model="form.type">
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="商铺图片">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="form.img" :src='"//elm.cangdu.org/img/" +form.img' class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="show = false">取 消</el-button>
                <el-button type="primary" @click="show = false">确 定</el-button>
            </div>
        </el-dialog>
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
                show: false,
                // 获取row的key值
                getRowKeys(row) {
                    return row.id;
                },
                // 要展开的行，数值的元素是row的key值
                expands: [],
                form: {
                    name: '',
                    intro: '',
                    address: '',
                    tel: '',
                    img: '',
                    type: [],
                    phone: ''
                },
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
                            image_path: item.image_path
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
            },
            handleEdit(index, row) {
                console.log(index, row);
                this.form.address = row.address;
                this.form.intro = row.des;
                this.form.name = row.name;
                this.form.tel = row.phone;
                this.form.type = row.category;
                this.form.img = row.image_path;
                this.show = true;
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },
        created: function () {
            //获取数据
            this.ajax(null, () => {
                // 在这里你想初始化的时候展开哪一行都可以了
                this.expands.push(this.tableData[2].id);
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

    /deep/ .el-table__expanded-cell {
        background-color: #fbfdff !important;
    }

    .block {
        text-align: center;
        margin-top: 20px;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
