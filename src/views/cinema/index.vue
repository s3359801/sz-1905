<template>
    <div class="cinema">
        <InHeader title="影院"/>
        <MovieBody/>
    </div>
</template>
<script>
import InHeader from "@/common/inHeader"
import MovieBody from "@/components/movieBody"
export default {
    name:"cinema",
    components:{
        InHeader,
        MovieBody
    }
}
</script>

<style>
    .cinema {
        width:100%;
        height:100%;
        
    }
</style>