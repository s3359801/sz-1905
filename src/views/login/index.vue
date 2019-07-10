<template>
  <div id="login">
    <InHeader title="登录" class="login-header">
      <template v-slot:header >
        <router-link to="/mine" tag="i" class="iconfont icon-zuojiantou1">
          <strong>个人中心</strong>
        </router-link>
        <router-link class="register" tag="span" to="/register">
          注册
        </router-link>
      </template>
    </InHeader>
    <div class="detail">
      <div class="detail-title">欢迎登录</div>
      <div class="detail-form">
          <div class="detail-form-list">
            <input type="text" name="" id="" placeholder="手机号码" v-model="userName">
            <p></p>
          </div>
          <div class="detail-form-list">
             <input type="password" name="" id="" placeholder="密码" v-model="userPwd">
            <p></p>
          </div>
          <button @click="handleLogin">登录</button>
        </div>
        <router-link class="forget" tag="div" to="/resetPwd">
          <strong>忘记密码</strong>
          <i class="iconfont icon-suo"></i>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods:{
    handleLogin () {
     
        // let userInfo = {
        //   name: this.userName,
        //   pwd: this.userPwd
        // }

        // window.localStorage.setItem('userInfo',JSON.stringify(userInfo))
        let data = window.localStorage.getItem('userInfo')
        console.log(JSON.parse(data).name)
        if(JSON.parse(data).name === this.userName && JSON.parse(data).pwd === this.userPwd){
          confirm('登录成功')
          let redirect = this.$route.query.redirect || '/home'
          this.$router.replace(redirect)
        }
        
        
    }
  },
  data () {
    return {
      userName: '',
      userPwd: '',
    }
  }
}
</script>

<style>
.login-header{
      width: 100%;
      height: 1.08rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #c94c23;
      text-align: center;
      z-index: 10;
    }
    .login-header>i{
      /* line-height: 1.08rem; */
      /* height: 1.08rem; */
      color: #fff;
      font-size: .30rem;
      position: absolute;
      left: .2rem;
    }
    .login-header>i>strong{
      font-size: .30rem;
      line-height: 1.08rem;
    }
    .login-header>span{
      line-height: 1.08rem;
      height: 1.08rem;
      color: #fff;
      font-size: .32rem;
    }
    .login-header>.register{
      position: absolute;
      right: .6rem;
      font-size: .30rem;
    }
    .detail{
      width: 100%;
      height: 100%;
      padding-top: 1.08rem;
    }
    .detail>.detail-title{
      width: 100%;
      height: 1.14rem;
      line-height: 1.14rem;
      margin: .4rem 0;
      font-size: .8rem;
      text-align: center;
      color: rgba(83, 148, 232, 0.3);
    }
    .detail>.detail-form{
      /* width: 100%; */
      height: 3.24rem;
      margin: .2rem .4rem;
      box-sizing: border-box;
			text-align: center;
    }
    .detail>.detail-form>.detail-form-list{
      height: 1.18rem;
      width: 6.7rem;
    }
    .detail>.detail-form>.detail-form-list>input{
      height: .68rem;
      width: 6.7rem;
      border-radius: .04rem;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    .detail>.detail-form>.detail-form-list>p{
      width: 6.7rem;
      height: .4rem;
      margin: .1rem 0;
    }
    .detail>.detail-form>button{
      width: 6.7rem;
      height: .68rem;
      background-color: #c94c23;
      margin: .2rem 0 0;
      padding: .12rem .24rem;
      font-size: .28rem;
      border: none;
      border-radius: .04rem;
      color: #fff;
    }
    .forget{
      text-align: center;
    }
    .forget>strong{
      color: #337ab7;
      text-decoration: none;
      font-size: .28rem;
    }
</style>
