<template>
  <div id="login_background">
    <i :class="color" @click="login_checked" class="login_checked"></i>
    <div id="login">
      <div class="login_left">
        <div class="imgage-bg"></div>
        <img src="@/image/logo-with-shadow.png" alt="" class="login_logo" />
      </div>
      <div class="login_right">
        <h1 class="login_name">
          <span class="login_clip">Wang Jie</span>
        </h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-ruleForm">
          <el-form-item prop="username" label-width="50px">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password" label-width="50px">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <!-- <el-form-item>
          <el-checkbox v-model="checked">记住我</el-checkbox>
        </el-form-item> -->
          <el-form-item label-width="50px">
            <el-button class="login_in" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import actions_type from '@/store/type/action-type'
const { LOGIN_ACTION } = actions_type
export default {
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm.username !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        color: 'red',
        // checked: true,s
      },
      flag: false,
      color: 'el-icon-turn-off',
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 发送登录 请求
          const param = { username: this.ruleForm.username, password: this.ruleForm.password }
          await this.$store.dispatch(LOGIN_ACTION, param)
          this.$router.push('/layout')
          document.body.style.background = '#fff'
        } else {
          return false
        }
      })
    },
    login_checked() {
      const body = document.querySelector('body')
      let color = window.getComputedStyle(body).backgroundColor
      if (color == 'rgb(0, 0, 0)' && this.color == 'el-icon-turn-off') {
        document.body.style.backgroundColor = '#fff'
        this.color = 'el-icon-open'
      } else {
        document.body.style.backgroundColor = '#000'
        this.color = 'el-icon-turn-off'
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/login.scss';
input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
}
body {
  background-color: $Black;
}
#login_background {
  text-align: right;
  .el-icon-turn-off:before,
  .el-icon-open:before {
    font-size: 30px;
    color: #bd34fe;
  }
}
#login {
  display: flex;
  width: 800px;
  height: 600px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .login_left,
  .login_right {
    display: flex;
    width: 50%;
  }
  .login_left {
    .imgage-bg {
      width: 400px;
      height: 400px;
      position: absolute;
      top: 12%;
      left: 3%;
      border-radius: 50%;
      background-image: $image-background-image;
      filter: $image-filter;
    }
    .login_logo {
      margin-top: 50%;
      transform: translate(0, -25%);
      max-width: 100%;
    }
  }
  .login_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login_name {
      text-align: center;
      margin-bottom: 50px;
      .login_clip {
        background: $name-background;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: $name-color;
      }
    }
    .el-form {
      margin-bottom: 100px;
    }
    .login_in {
      width: 280px;
      color: $White;
      margin-top: 50px;
      background: $btn-background;
      border: none;
    }
    .el-form-item {
      margin-bottom: 30px;
    }
    .el-input {
      width: 280px;
      .el-input__inner {
        color: $White;
        caret-color: #bd34fe;
      }
    }
    .el-input > input[type='text'],
    input[type='password'] {
      border: none;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #41d1ff;
    }
  }
}
</style>
