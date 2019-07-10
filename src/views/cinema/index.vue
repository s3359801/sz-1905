<template>
    <div>
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
    
</style>