<template>
    <div class="home-box">
        <div class="search-box">
            <label class="search_img"></label>
            <input type="search" class="search" placeholder="影视 图书 小组">
            <span class="qr_img"></span>
            <span class="longin_img" @click="login"></span>
        </div>
        <div class="content">
            <div>
                <h4>今日热点</h4>
                <div>
                    <div>
                        <h3>每年哭一次，都是为了租房</h3>
                        <p>我扛过了压力。。。。</p>
                    </div>
                </div>
            </div>
        </div>
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
    components: {
        "v-footer": Footer
    },
    methods:{
        login(){
            this.$router.push({ path: '/login' })
        }
    }
}
</script>

<style scoped>
.home-box {
    width: 100%;
    height: 100%;
}

.search-box {
    height: 3.125rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #41be56;
}

.search-box .search_img {
    position: absolute;
    left: 0.875rem;
    top: 1rem;
    width: 1.25rem;
    height: 1.25rem;
    background: url('../assets/image/search.png') no-repeat;
    background-size: 1.25rem;
}

.search-box .qr_img {
    position: absolute;
    top: 1rem;
    right: 3rem;
    width: 1.25rem;
    height: 1.25rem;
    background: url('../assets/image/qr.png') no-repeat;
    background-size: 1.25rem;
}
.search-box .longin_img{
    position: absolute;
    top: 0.75rem;
    right:0.5rem;
    width: 1.625rem;
    height: 1.625rem;
    background: url('../assets/image/login.png') no-repeat;
    background-size: 1.625rem;
}
.search-box .search {
    box-sizing: border-box;
    width: 16.75rem;
    height: 2.125rem;
    font-size: 1rem;
    padding: 2px 1.75rem;
    margin-top: 0.5rem;
    margin-left: 0.625rem;
    background-color: #fff;
    border-radius: 0.5rem;
}

.content {
    margin-top: 3.125rem;
}
</style>