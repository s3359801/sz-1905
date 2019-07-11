<template>
    <div id="footerCom">
        <div class="choose">
            <v-touch
            tag="span"
            @tap="handleChoose(val)"
            >选座购票</v-touch>
        </div>
    </div> 
</template>

<script>
export default {
    name:"footerCom",
    props:["val"],
    methods:{
         handleChoose(id){
            this.$router.push({name:"movieTicket",params:{id}})
        },
    }
   
}
</script>

<style scoped>
    #footerCom {
        width:100%;
        height:1rem;
        border-top:.02rem solid #C94C23;
        position: fixed;
        bottom: 0;
        left:0;
    }
    #footerCom .choose{
        width:3.1rem;
        height:100%;
        background: #c94c23;
        text-align: center;
        color:#fff;
        float: right;
        line-height: 1rem;
    }
</style>
