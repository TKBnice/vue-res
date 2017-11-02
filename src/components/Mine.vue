<template>
    <div>
        <h1>我的</h1>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/Footer'

export default {
    data() {
        return {
            value1: 0
        }
    },
    components:{
        vFooter
    }
}
</script>

<style scoped>

</style>