<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>

            <el-form
            label-width="80px"
            :model="form"
            ref="form"
            :rules="rules"
            @submit.native.prevent="login"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" @keyup.enter.native="login"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password" @keyup.enter.native="login"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        const validateUsername = (rule, value, callback) => {
            //用户名由字母（大小写）、数字、下划线和短横线组成，长度在4到16个字符之间
            const pattern = /^[a-zA-Z0-9_-]{4,16}$/;
            if (value === "") {
                callback(new Error("请输入用户名"));
            } else if (!pattern.test(value)){
                callback(new Error("用户名由字母（大小写）、数字、下划线和短横线组成，长度在4到16个字符之间"));
            } else {
                callback();
            }
        };

        const validatePassword = (rule, value, callback) => {
            //密码至少包含一个小写字母、一个大写字母和一个数字，长度至少为8个字符
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (!pattern.test(value)) {
                callback(new Error("密码至少包含一个小写字母、一个大写字母和一个数字，长度至少为8个字符"));
            } else {
                callback();
            }
        };
        return {
            labelPosition: 'right',
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {validator: validateUsername, trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {validator: validatePassword, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        // //校验用户名
        // validateUsername(rule, value, callback) {
        //     //用户名由字母（大小写）、数字、下划线和短横线组成，长度在4到16个字符之间
        //     const pattern = /^[a-zA-Z0-9_-]{4,16}$/;
        //     if (!pattern.test(value)) {
        //         callback(new Error('用户名格式不正确'));
        //     } else {
        //         callback();
        //     }
        // },
        // //校验密码
        // validatePassword(rule, value, callback) {
        //     //密码至少包含一个小写字母、一个大写字母和一个数字，长度至少为8个字符
        //     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        //     if (!pattern.test(value)) {
        //         callback(new Error('密码格式不正确'));
        //         } else {
        //             callback();
        //         }
        // },

        login() {
            this.$refs["form"].validate((valid) => {
                debugger;
                if (valid) {
                    console.log(this.form);
                    this.axios.post('https://jsonplaceholder.typicode.com/posts', this.form)
                    .then(res => {
                        console.log(res);
                        debugger;
                        console.log("res.data.code" + JSON.stringify(res.data));
                        if (res.status == 201) {
                            debugger;
                            localStorage.setItem('username', res.data.username);
                            //this.$message({message: res.data.message, type: 'success'});
                            this.$router.push('/home');
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
                } else {
                    console.error(this.form)
                }
            })
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