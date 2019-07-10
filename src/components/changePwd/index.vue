<template>
  <div id="changePwd">
    <InHeader title="重置密码" class="changePwd-header">
      <template v-slot:header >
        <router-link to="/mine" tag="i" class="iconfont icon-zuojiantou1">
          <strong>个人中心</strong>
        </router-link>
      </template>
    </InHeader>
    <div class="detail">
      <div class="detail-title">更改密码</div>
      <div class="detail-form">
        <div class="detail-form-list">
          <input type="text" name="" id="" placeholder="用户名" v-model="username">
          <p>{{errTip}}</p>
        </div>
        <div class="detail-form-list">
           <input type="password" name="" id="" placeholder="原密码" v-model="oldPwd">
          <p>{{pwdTip}}</p>
        </div>
        <div class="detail-form-list">
        <input type="password" name="" id="" placeholder="新密码" v-model="newPwd">
           <p>{{newPwdTip}}</p>
        </div>
        <button @click="handleModify()">更改密码</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'changePwd',
  data(){
    return {
      username:'',
      oldPwd: '',
      newPwd: '',
      errTip: '',
      pwdTip: '',
      newPwdTip: ''
    }
  },
  methods: {
    handleModify(){
      let data = window.localStorage.getItem('userInfo')
      if(this.username != JSON.parse(data).name){
          this.errTip = '用户名不存在'
          console.log('1111')
          return
      }else{
        if(this.oldPwd != JSON.parse(data).pwd){
          this.pwdTip = '密码与原密码不匹配'
          console.log('2222')
          return
        } else {
          if(this.newPwd === ''){
              this.newPwdTip = '密码不为空'
              return
            }else{
              if(this.newPwd.length <4 || this.newPwd.length >12){
                this.newPwdTip = '密码必须为4-12位'
                return
              }else {
                let userInfo = {
                name: this.username,
                pwd: this.newPwd
              }
                window.localStorage.setItem('userInfo',JSON.stringify(userInfo))
                confirm('密码更改成功')
              }
            } 
        }
      }
    }
  }
}
</script>

<style>
#changePwd{
      width: 100%;
      height: 100%;
    }
    .changePwd-header{
      width: 100%;
      height: 1.08rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #c94c23;
      text-align: center;
      z-index: 10;
    }
    .changePwd-header>i{
      /* line-height: 1.08rem; */
      /* height: 1.08rem; */
      color: #fff;
      font-size: .30rem;
      position: absolute;
      left: .2rem;
    }
    .changePwd-header>i>strong{
      font-size: .30rem;
      line-height: 1.08rem;
    }
    .changePwd-header>span{
      line-height: 1.08rem;
      height: 1.08rem;
      color: #fff;
      font-size: .32rem;
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
      height: 4.72rem;
      margin: .2rem .4rem;
    }
    .detail>.detail-form>.detail-form-list{
      height: 1.18rem;
      width: 6.7rem;
    }
    .detail>.detail-form>.detail-form-list>input{
      height: .64rem;
      width: 6.7rem;
      border-radius: .04rem;
      border: 1px solid #ccc;
      padding: 0.12rem  .85rem .12rem 0.24rem;
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
</style>
