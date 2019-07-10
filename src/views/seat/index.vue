<template>
  <div id="seat">
    <InHeader title="2号厅" class="seat-header">
      <template v-slot:header >
        <router-link to="/cinema" tag="i" class="iconfont icon-zuojiantou1">
          <strong>影院信息</strong>
        </router-link>
      </template>
    </InHeader>
    <div class="detail">
      <div class="detail-title">
        <div>狮子王</div>
        <p>2019-07-12周五11:00</p>
      </div>
      <div class="detail-ticket-tip">
        请选择下方座位，最多选4个
      </div>
      <div class="seat-type-list">
        <div class="left">
          <div class="type">
            <i class="iconfont icon-menpiao"></i>
            <span>已选</span>
          </div>
          <div class="type">
            <i class="iconfont icon-menpiao"></i>
            <span>已售</span>
          </div>
          <div class="type">
            <i class="iconfont icon-menpiao"></i>
            <span>可选</span>
          </div>
          <div class="type">
            <i class="iconfont icon-menpiao"></i>
            <span>情侣</span>
          </div>
        </div>
        <div class="btn-wrap">
          <div class="btn-group">
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <div class="text-center">
        2号厅屏幕方向
      </div>
      <div class="seat-map-box">
        <div class="row-ref">
          <div class="item">1</div>
        </div>
        <div class="seat-map">
          <div class="seat-row">
            1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seat'
}
</script>

<style scoped>
#seat {
  width: 100%;
  height: 100%;
}
.seat-header {
  width: 100%;
  height: 1.08rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c94c23;
  text-align: center;
  z-index: 10;
}
.seat-header > i {
  /* line-height: 1.08rem; */
  /* height: 1.08rem; */
  color: #fff;
  font-size: 0.3rem;
  position: absolute;
  left: 0.2rem;
}
.seat-header > i > strong {
  font-size: 0.3rem;
  line-height: 1.08rem;
}
.seat-header > span {
  line-height: 1.08rem;
  height: 1.08rem;
  color: #fff;
  font-size: 0.32rem;
}
.detail{
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
.detail>.detail-title{
  height: 1.66rem;
  width: 100%;
  padding-left: .3rem;
}
.detail>.detail-title>div{
  padding-top: .4rem;
  font-size: .36rem;
  color: #333;
}
.detail>.detail-title>p{
  margin-bottom: .4rem;
  font-size: .24rem;
}
.detail>.detail-ticket-tip{
  width: 100%;
  height: .6rem;
  padding: 0 .3rem;
  font-size: .24rem;
  color:#ea9634;
  background-color:#fcf2cc;
  line-height: .6rem;
  border-bottom: 1px solid #e9e9e9;
}
.detail>.seat-type-list{
  display: flex;
  height: .76rem;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
}
.detail>.seat-type-list>.left{
  display: flex;
  flex: 66.7%;
  justify-content: space-around;
}
.detail>.seat-type-list>.type{
  margin: .2rem .04rem;
    font-size: .2rem;
    /* width: 66.7%; */
}
.detail>.seat-type-list>.btn-wrap{
  flex: 33.3%;
  display: flex;
  justify-content: center;
  /* width: 33.3%; */
}
.detail>.seat-type-list>.btn-wrap>.btn-group{
  padding-top: .1rem;
}
.seat-type-list>.btn-wrap>.btn-group>button:nth-child(1){
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  outline: none;
  width: 1rem;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  height: .56rem;
  border: 1px solid #cccccc;
  border-right: 0;
  box-sizing: border-box;
}
.seat-type-list>.btn-wrap>.btn-group>button:nth-child(2){
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  /* border-left: 1px solid #cccccc; */
  outline: none;
  width: 1rem;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  height: .56rem;
  border: 1px solid #cccccc;
  box-sizing: border-box;
}
.detail>.text-center{
  color: #666;
  font-size: .24rem;
  background: #ccc;
  padding: .08rem 0;
  text-align: center;
}
.detail>.seat-map-box{
  background: #e9e9e9;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 4.5rem;
  bottom: 0;
  background-color: #e9e9e9;
}
.detail>.seat-map-box>.row-ref{
  background: rgba(187, 187, 186, .3);
  /* margin: -.6rem 0 0; */
  position: absolute;
  padding-top: .6rem;
  padding-bottom: .6rem;
  border-radius: .16rem;
  z-index: 100;
  color: #666;
  width: .8rem;
  text-align: center;
}
.detail>.seat-map-box>.row-ref>.item{
  height: .7rem;
  line-height: .7rem;
  font-size: .28rem;
}
</style>
