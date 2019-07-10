<template>
  <div id="register">
    <InHeader title="注册" class="register-header">
      <template v-slot:header >
        <router-link to="/login" tag="i" class="iconfont icon-zuojiantou1">
          <strong>登录</strong>
        </router-link>
      </template>
    </InHeader>
        <div class="detail">
          <div class="detail-title">欢迎注册</div>
          <div class="detail-form">
            <div class="detail-form-list">
              <input type="text" name="" id="" placeholder="手机号码" v-model="iphoneVal">
              <p>{{errTip}}</p>
            </div>
            <div class="detail-form-list">
               <input type="password" name="" id="" placeholder="密码" v-model="pwd">
              <p>{{pwdTip}}</p>
            </div>
            <div class="detail-form-list">
               <input type="password" name="" id="" placeholder="确认密码" v-model="confirmPwd">
              <p>{{confirmPwdTip}}</p>
            </div>
            <button @click="register">注册</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "register",
  data(){
    return {
      iphoneVal: '',
      pwd: '',
      confirmPwd: '',
      errTip: '',
      pwdTip: '',
      confirmPwdTip: '',
    }
  },
  watch:{
  },
  methods: {
    register: function(){
      if(this.iphoneVal === "") {
        this.errTip = "手机号不能为空"
        return
      }else {
        if(this.iphoneVal.length != 11) {
          this.errTip = "请输入11位有效手机号码"
          return
        } else{
          let iphoneReg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
          if(!iphoneReg.test(this.iphoneVal)){
            this.errTip = '手机号码格式不正确'
            return
          } else{
            if(this.pwd === ''){
              this.pwdTip = '密码不为空'
              return
            }else{
              if(this.pwd.length<4 || this.pwd.length>12){
                this.pwdTip = '密码必须为4-12位'
                return
              }else{
                if(this.pwd != this.confirmPwd){
                  this.confirmPwdTip = '两次密码不一致'
                  return
                }else{
                  let userInfo = {
                  name: this.iphoneVal,
                  pwd: this.pwd
                  }
                  window.localStorage.setItem('userInfo',JSON.stringify(userInfo))
                  alert('注册成功')
                }
              }
            }
          }
        }
      }
      
    }
  }
}
</script>

<style scoped>
#register {
  width: 100%;
  height: 100%;
}
.register-header {
  width: 100%;
  height: 1.08rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c94c23;
  text-align: center;
  z-index: 10;
}
.register-header > i {
  /* line-height: 1.08rem; */
  /* height: 1.08rem; */
  color: #fff;
  font-size: 0.3rem;
  position: absolute;
  left: 0.2rem;
}
.register-header > i > strong {
  font-size: 0.3rem;
  line-height: 1.08rem;
}
.register-header > span {
  line-height: 1.08rem;
  height: 1.08rem;
  color: #fff;
  font-size: 0.32rem;
}
.detail {
  width: 100%;
  height: 100%;
  padding-top: 1.08rem;
}
.detail > .detail-title {
  width: 100%;
  height: 1.14rem;
  line-height: 1.14rem;
  margin: 0.4rem 0;
  font-size: 0.8rem;
  text-align: center;
  color: rgba(83, 148, 232, 0.3);
}
.detail > .detail-form {
  /* width: 100%; */
  height: 4.72rem;
  margin: 0.2rem 0.4rem;
}
.detail > .detail-form > .detail-form-list {
  height: 1.18rem;
  width: 6.7rem;
}
.detail > .detail-form > .detail-form-list > input {
  height: 0.64rem;
  width: 6.7rem;
  border-radius: 0.04rem;
  border: 1px solid #ccc;
}
.detail > .detail-form > button {
  width: 6.7rem;
  height: 0.68rem;
  background-color: #c94c23;
  margin: 0.2rem 0 0;
  padding: 0.12rem 0.24rem;
  font-size: 0.28rem;
  border: none;
  border-radius: 0.04rem;
  color: #fff;
}
</style>
