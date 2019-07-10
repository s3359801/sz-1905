<template>
  <div id="ticket">
    <InHeader title="我的兑换券" class="ticket-header">
      <template v-slot:header >
        <router-link to="/mine" tag="i" class="iconfont icon-zuojiantou1">
          <strong>个人中心</strong>
        </router-link>
      </template>
    </InHeader>
    <div class="ticket-main">
      <div class="ticket-add">
        <div class="ticket-add-box">
          <input type="text" placeholder="请输入兑换码" id="txt"/>
          <button>添加兑换券</button>
        </div>
        <label class="help-block">该兑换券不存在或已过期！</label>
      </div>
      <div class="ticket-detail">
        <p>未找到相应结果</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body{
  height: 100%;
}
#ticket {
  /* width: 100%; */
  height: 100%;
  overflow: hidden;
}
.ticket-header {
  width: 100%;
  height: 1.08rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c94c23;
  text-align: center;
  z-index: 10;
}
.ticket-header > i {
  /* line-height: 1.08rem; */
  /* height: 1.08rem; */
  color: #fff;
  font-size: 0.3rem;
  position: absolute;
  left: 0.2rem;
}
.ticket-header > i > strong {
  font-size: 0.3rem;
  line-height: 1.08rem;
}
.ticket-header > span {
  line-height: 1.08rem;
  height: 1.08rem;
  color: #fff;
  font-size: 0.32rem;
}
.ticket-main {
  padding-top: 1.08rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.ticket-main > .ticket-add {
  width: 100%;
  height: 0.76rem;
  margin-top: 0.02rem;
  margin-bottom: 0.3rem;
  box-sizing: border-box;
}
.ticket-main > .ticket-add > .ticket-add-box {
  width: 6.28rem;
  height: 0.64rem;
  margin: .08rem .2rem;
  border: 1px solid #333333;
  box-sizing: border-box; 
  /* border-radius: 1px; */
  border-radius: 2px;

}
.ticket-main > .ticket-add > .ticket-add-box > #txt {
  border: none;
  width: 4.54rem;
  height: 0.56rem;
  border-radius: 4px 0 0 4px;
  padding: .12rem .24rem;
  outline: none;
}
.ticket-main > .ticket-add > .ticket-add-box >button{
  border: none;
  /* border: #c94c23 6px solid; */
  width: 1.70rem;
  height: 0.6rem;
  background-color: #c94c23;
  color: #fff;
}
.ticket-main> .ticket-add >.help-block{
  display: block;
  margin-top: .1rem;
  margin-bottom: .2rem;
  color: #a94442;
  margin-left: .2rem;
  font-weight: 700;
}
.ticket-main>.ticket-detail{
  padding: 0 .2rem;
  height: 100%;
  text-align: center;
  color: #666;
  margin-top: .8rem;
}
</style>
