<template>
    <div class="home-box">
        <h1>首页</h1>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
    data() {
        return {
            value1: 0
        }
    },
    components:{
        "v-footer":Footer
    }
}
</script>

<style scoped>
.home-box{
    width: 100%;
    height: 100%;
}
</style>