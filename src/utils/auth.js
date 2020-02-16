// 授权相关的文件
const USER_KEY = "USER_KEY"
const TOKEN_KEY = "JWT_TOKEN_KEY"
class Auth{
  constructor(){
    this.token = null
    this.user = null
    this.token = localStorage.getItem(TOKEN_KEY)
    const userJson = localStorage.getItem(USER_KEY)
    if(userJson){
      this.user = JSON.parse(userJson)
    }
  }
  setUserToken(user,token){
    // 设置token
    this.user=user
    this.token=token
    localStorage.setItem(USER_KEY,JSON.stringify(user))
    localStorage.setItem(TOKEN_KEY,token)
  }
  clearUserToken(){
    this.user = null;
    this.token = null;
    localStorage.removeItem(USER_KEY)
    localStorage.removeItem(TOKEN_KEY)
  }

  // 是否登录了
  get is_authed(){
    if(this.user && this.token){
      return true
    }else{
      return false
    }
  }
}
const auth =new Auth()
export default auth
// export default Auth.getInstance()
