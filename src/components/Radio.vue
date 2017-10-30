<template>
    <div>
        <h1>广播</h1>
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

</style>