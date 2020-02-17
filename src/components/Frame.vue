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
    <el-aside width="200px" class="aside">
      <el-row class="menu-row">
          <el-col :span="24">
            <el-menu
              default-active="/"
              background-color="#545c64"
              class="el-menu"
              active-text-color="#fff"
              text-color="#ddd"
              :router="true"
              >
              <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="/merchant">
                <i class="el-icon-menu"></i>
                <span slot="title">商家</span>
              </el-menu-item>
              <el-menu-item index="/user">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户</span>
              </el-menu-item>
              <el-menu-item index="/order">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>


    </el-aside>
    <el-container>
      <el-main class="main">
        <!-- 这是Main -->
        <router-view></router-view>
      </el-main>

      <el-footer class="footer">这是Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</div>
</template>
<script type='text/ecmascript-6'>
import {Container,Header,Aside,Main,Footer,Row,Col,Menu,MenuItem} from 'element-ui'
export default {
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
  [Row.name]: Row,
    [Col.name]: Col,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
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
      background-color: #545c64;
      .el-menu{
      .is-active{
        background-color: #434a50!important;
      }
    }
  }
  .main{
      background-color:pink;
  }
  .footer{
      background-color:green;
  }
}
</style>

<style scoped>
/* 去除左面白边 */
.aside >>> .el-menu{
  border-right: none;
}
</style>