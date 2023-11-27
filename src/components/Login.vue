<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>

            <el-form
            label-width="80px"
            :model="form"
            ref="form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary">登录</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    }
}
</script>

<style lang="scss">
  .login {
      width: 100%;
      height: 100%;
      position: absolute;
      background: #409EFF;
      .box-card {
      width: 450px;
      margin: 200px auto;
      .el-card__header {
          font-size: 34px;
      }
      .el-button {
          width: 100%;
          } 
      }
  }
  
</style>