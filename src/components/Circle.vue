<template>
    <div>
        <h1>圈子</h1>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Footer from '@/view/footer/Footer'

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