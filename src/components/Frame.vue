<template>
<div class="frame">
  <el-container class="frame-container">
  <el-header class="header"><a href="/" class='brand'><strong>CDownPace</strong>商户平台</a></el-header>
  <!-- <a href="/" class='brand'><strong>知了</strong>商户平台</a> -->
  <div class="header-content">
        <div class="greet">欢迎，{{$auth.user.username}}！</div>
        <div class="signout" @click="onLogout">退出登录</div>
      </div>

  <el-container>
    <el-aside width="200px" class="aside">这是Aside</el-aside>
    <el-container>
      <el-main class="main">这是Main</el-main>
      <el-footer class="footer">这是Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</div>
</template>
<script type='text/ecmascript-6'>
import {Container,Header,Aside,Main,Footer} from 'element-ui'
export default{
name: "Frame",
data(){
return {}
},
components: {
  [Container.name]:Container,
  [Header.name]:Header,
  [Aside.name]:Aside,
  [Main.name]:Main,
  [Footer.name]:Footer,
},
methods: {
    onLogout(){
      // JWToken
      // 退出登录
      this.$auth.clearUserToken()
      this.$router.replace("/login")
    }
  }
}
</script>
<style scoped lang='scss'>
.frame-container{
  height:100vh;
  .header{
      height: 200px;
    background: #00a65a;
    display: flex;
    .brand{
      width: 200px;
      margin-left: -20px;
      background-color:#008d4c;
      font-size: 20px;
      color: #fff;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
  .header-content{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 20px;
      color: #fff;
      .signout{
        cursor: pointer;
      }
    }
  .aside{
      background-color:yellow;
  }
  .main{
      background-color:pink;
  }
  .footer{
      background-color:green;
  }
}
</style>