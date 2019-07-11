<template>
   <div id="order">
      <InHeader title="我的订单" class="order-header">
      <template v-slot:header >
        <router-link to="/mine" tag="i" class="iconfont icon-zuojiantou1">
          <strong>个人中心</strong>
        </router-link>
      </template>
      </InHeader>
      <div class="nav">
        <router-link tag="span" to="/order/finish">
          已完成
        </router-link>
        <router-link tag="span" to="/order/unfinish">
          未完成
        </router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import InHeader from "common/inHeader";
export default {
  name: "order",
  components: {
    InHeader
  },
}
</script>

<style>
strong {
  font-weight: normal;
}
#order {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.order-header {
  width: 100%;
  height: 1.08rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c94c23;
  text-align: center;
  z-index: 10;
}
.order-header >i {
  /* line-height: 1.08rem; */
  /* height: 1.08rem; */
  color: #fff;
  font-size: 0.3rem;
  position: absolute;
  left: 0.2rem;
}
.order-header > i > strong {
  font-size: 0.3rem;
  line-height: 1.08rem;
}
.order-header > span {
  line-height: 1.08rem;
  height: 1.08rem;
  color: #fff;
  font-size: 0.32rem;
}
.nav {
  width: 100%;
  height: 1.04rem;
  position: absolute;
  top: 1.08rem;
  left: 0;
  display: flex;
}
.nav > span {
  height: 100%;
  flex: 1;
  text-align: center;
  line-height: 1.02rem;
  font-size: 0.28rem;
  color: #999999;
}
.nav > .router-link-active {
  border-bottom: #c94c23 1px solid;
}
.main {
  width: 100%;
  height: 100%;
  margin-top: 2.1rem;
  background-color: #f6f6f6;
  text-align: center;
}
.main > p {
  height: 1rem;
  line-height: 1rem;
  color: #999999;
  font-size: 0.24rem;
}
</style>
