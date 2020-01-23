<template>
  <div class="login-container">
    <el-row >
      <el-col :span="12" :offset="6">
      <h1 class="page-title">CDownPace后台管理系统</h1>
      <el-form ref="loginForm" :model="loginForm" label-width="80px" class="login-form">
        <el-form-item label="用户">
          <el-input v-model="loginForm.username"></el-input>

        </el-form-item>
           <el-form-item label="密码">
             <el-input v-model="loginForm.password" type="password"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary">登录</el-button>
           </el-form-item>
        </el-form>
        
    </el-col>
    </el-row>

    
  </div>
</template>

<script>
import {Button,Row ,Col,Form,Input,FormItem} from "element-ui"
export default {
  name: 'Login',
  data(){
    return {
      loginForm:{
         username:"",
         password:""
      }
    }
  },
   components: {
    // Login,
    [Button.name]:Button,
    [Row.name]:Row,
    [Col.name]:Col,
    [Form.name]:Form,
    [Input.name]:Input,
    [FormItem.name]:FormItem 
  }
}
</script>

<style  lang="scss">
body{
  background-color: #eee;
}
.login-container{
  padding-top: 80px;
  .page-title{
    text-align: center
  }
  .login-form{
    padding-top:40px;
  }
}


</style>
