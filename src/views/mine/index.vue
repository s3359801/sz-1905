<template>
    <div id="mine">
        <InHeader title="个人中心" />
        <ul>
            <router-link v-for="(item,index) in m_list" :key="index" tag="li" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
                <span class="mine-text">{{item.name}}</span>
                <i class="iconfont right" v-html="item.right"></i>
            </router-link>
        </ul>
        <div class="fix-box">
            <i class="iconfont" v-html="tel"></i><a>客服电话：400-607-5588</a>
            <p>客服工作时间：9:00-18:00</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "mine",
        data(){
    return {
      m_list:[
        {
          icon:'&#xe691',
          name:'我的订单',
          right:'&#xe611',
          path:'/order'
        },
        {
          icon:'&#xe60c',
          name:'我的兑换卷',
          right:'&#xe611',
          path:'/ticket'
        },
        {
          icon:'&#xe67a;',
          name:'更改密码',
          right:'&#xe611',
          path:'/changePwd'
        },
        {
          icon:'&#xe6a0',
          name:'退出登录',
          right:'&#xe611',
          path:'exit()'
        }
      ],
      tel:'&#xe848'
    }
  },
  methods: {
    exit(){
      window.localStorage.clear()
      confirm('退出登录成功')
    }
  }
};
</script>

<style>
#mine{
  /* display: flex; */
  /* flex: 1; */
  padding-top: 1.08rem;
  padding-bottom: 1.02rem;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
#mine>ul{
  padding-top: .8rem;
}
#mine>ul>li{
  height: 1.2rem;
  background: #fff;
  border-bottom: 0.01rem solid #eee;
  display: flex;
  align-content: center;
  line-height: 1.2rem;
  font-size: 0.32rem;
  color: #666;
}
#mine>ul>li>.iconfont{
  width: 16.7%;
  padding: 0 0.3rem 0;
  box-sizing: border-box;
  text-align: right;
  font-size: 0.32rem;
  color: #666;
}
#mine>ul>li>.right{
  text-align: left;
}
#mine>ul>li>.mine-text{
  width: 66.7%;
  padding: 0 0.3rem 0;
  box-sizing: border-box;
  font-size: 0.32rem;
  color: #666;
}
.fix-box{
  position: fixed;
  color: green;
  width: 100%;
  text-align: center;
  bottom: 1.2rem;
  font-size: 0.32rem;
}
.fix-box>a{
  color:  green;
}
</style>