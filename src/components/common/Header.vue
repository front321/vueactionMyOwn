<template>
    <div class="header">
        <el-header>
            <div class="title">通用管理系统</div>
            <div>{{name}}</div>
        </el-header>
    </div>
</template>

<script>
import {getToken} from '@/utils/setToken.js'
export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.name = getToken('username');
        console.log('名字为：' + this.name);
    }
}
</script>

<style lang="scss" scoped>
.header {
    .el-header {
        background: #409eff;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title {
            width: 200px;
            font-size: 24px;
        }
    }
}
</style>