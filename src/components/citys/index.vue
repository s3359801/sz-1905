<template>
    
  <div class="citys" ref="scroll">
    <InHeader title="城市列表">
      <template v-slot:header="props">
        <p class="big" @click="handleBack()">
          <i class="iconfont size" v-html="props.icons"></i>
          {{props.icon}}
        </p>
      </template>
    </InHeader>
    <div>
    <div class="top">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          :class="topIndex==index?'active':''"
          @touchstart="handleToggle(index)"
        >
          <p>城市</p>
          <span>{{iptVal}}</span>
        </li>
      </ul>
    </div>
    <BScroll>
    <div class="main" ref="domTop"> 
        <div class="citySearch" v-for="(item,index) in AList" :key="index">
          <div class="cs_top">
            <p>{{item.group_id}}</p>
          </div>
          <div class="city">
            <li v-for="(itm,idx) in AList[index].city_list" :key="idx" @click="handleChoose(itm)">
              <span>{{itm.name}}</span>
            </li>
          </div>
        </div>        
    </div>
    </BScroll>
    </div>
      <div class="chooseList">
        <li v-for="(item,index) in AList" :key="index">
          <span @click="handleMove(index)">{{item.group_id}}</span>
        </li>
      </div>
       
  </div>
    
</template>

<script scoped>
import InHeader from "@/common/inHeader";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "citys",
  components: {
    InHeader
  },
  created() {
    this.getCitys();
  },
  data() {
    return {
      topIndex: 0,
      list: [
        {
          ix: 0
        }
      ]
    };
  },
  computed: {
    ...mapState({
      AList: state => state.city.AList,
      iptVal: state => state.city.iptVal,
      flag: state => state.city.flag,
      id: state => state.city.id
    })
  },
  methods: {
    handleToggle(index) {
      this.topIndex = index;
    },
    handleBack() {
      this.$router.go(-1);
    },

    ...mapActions({
      getCitys: "city/getCitys"
    }),
    ...mapMutations({
      handleModifyChoose: "city/handleModifyChoose"
    }),
    handleChoose(itm) {
      this.$router.push("/movie");
      this.handleModifyChoose(itm);
    },
    handleMove(i) {
      let mainDom = this.$refs.domTop.querySelectorAll(".citySearch");
      
      let Mtop = mainDom[i].offsetTop;
      
      this.$refs.scroll.scrollTop = Mtop-300;
    }
  }
};
</script>

<style scoped>

.citys {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.citys .top {
  position: fixed;
  top: 1rem;
  left: 0;
  height: 1rem;
  background: #fff;
  width: 100%;
  z-index: 10;
}
.citys .top ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-size: 0.24rem;
}
.citys .top ul li {
  width: 33.3%;
}
.citys .top ul .active {
  color: #c94c23;
  border-bottom: 0.02rem solid #c94c23;
}
.citys .main {
  width: 100%;
  padding-top: 2rem;
  padding-left: 0.3rem;
  font-size: 0.24rem;
  overflow: auto;
}
.citys .main .citySearch .cs_top {
  color: #c94c23;
}
.citys .main .citySearch li {
  padding: 0.3rem 0;
}
.chooseList {
  position: fixed;
  top: 20%;
  right: 0.1rem;
  font-size: 0.24rem;
  color: #c94c23;
}
.chooseList li {
  height: 0.4rem;
  width:0.4rem;
}
</style>
