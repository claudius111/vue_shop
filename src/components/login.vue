<template>
    <div class="login_container">
        <div class="login_box">
            <!--头部标志区域-->
            <div class="avatar_box">
                <img src="../assets/logo.png"/>
            </div>
            <!--中间表单区域-->
            <el-form ref="loginRef" :rules="loginRules" :model="loginForm" label-width="0px" class="login_form">
                <!--账号-->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
                </el-form-item>
                <!--按钮区域-->
                <el-form-item class="btns">
                    <el-button :plain="true" type="primary" @click="login" round>登录</el-button>
                    <el-button type="info" @click="loginReset" round>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginRules: {
        username: [
          { required: true, message: '请输入您的名称', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ]
      },
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    loginReset: function () {
      this.$refs.loginRef.resetFields()
    },
    login: function () {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return this.$message('输入格式错误!')
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('用户名或密码错误，请重新输入!')
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }

  }
}
</script>

<style lang="less" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}
.login_box {
    background-color: #fff;
    width: 450px;
    height: 300px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}
.login_form {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>
