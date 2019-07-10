<template>
  <div id="resetPwd">
    <InHeader title="忘记密码" class="resetPwd-header">
      <template v-slot:header >
        <router-link to="/login" tag="i" class="iconfont icon-zuojiantou1">
          <strong>登录</strong>
        </router-link>
      </template>
    </InHeader>
        <div class="detail">
          <div class="detail-title">重置密码</div>
          <div class="detail-form">
            <div class="detail-form-list">
              <input type="text" name="" id="" placeholder="手机号码">
              <p></p>
            </div>
            <div class="detail-form-list">
               <input type="password" name="" id="" placeholder="新密码">
              <p></p>
            </div>
            <div class="detail-form-list">
            <input type="password" name="" id="" placeholder="重复新密码">
               <p></p>
            </div>
            <button>重置密码</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "resetPwd"
}
</script>

<style>
.resetPwd-header{
      width: 100%;
      height: 1.08rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #c94c23;
      text-align: center;
      z-index: 10;
    }
    .resetPwd-header>i{
      /* line-height: 1.08rem; */
      /* height: 1.08rem; */
      color: #fff;
      font-size: .30rem;
      position: absolute;
      left: .2rem;
    }
    .resetPwd-header>i>strong{
      font-size: .30rem;
      line-height: 1.08rem;
    }
    .resetPwd-header>span{
      line-height: 1.08rem;
      height: 1.08rem;
      color: #fff;
      font-size: .32rem;
    }
    .resetPwd-header>.login{
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
