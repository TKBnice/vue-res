<template>
    <div>
        <v-header></v-header>
        <h1>圈子</h1>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Footer from '@/view/footer/Footer';
import Header from '@/view/header/Header';

export default {
    data() {
        return {
            value1: 0
        }
    },
    components: {
        "v-footer": Footer,
        "v-header": Header
    },
    methods:{

    }
}
</script>

<style scoped>

</style>