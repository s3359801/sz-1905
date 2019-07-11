<template>
    <div>
         <HeaderCom>
            
            <template v-slot:headerCom="props">
                <div class="citys">
                <router-link class="city"
                :to='{name:"citys"}'
                tag="span">{{props.city}}
                    <i class="iconfont size" v-html="props.cityicon"></i>
                </router-link>
                </div>
           </template>
        </HeaderCom>
    </div>
</template>
<script>

export default {
    name:"movie",
}
</script>

<style scoped>
    .citys{
       position: absolute;
        right: 0;
        width: 2rem;
        height: 100%;
        line-height: 1rem;
        text-align: center;
        color:#fff;
        top:0;
        font-size: .28rem;
    }
    .citys i{
        font-size: .24rem;
    }

</style>