<template>
    <div>
        <!-- 头部muu -->
        <header class="menubar-box">
            <h3>书影音</h3>
            <span class="search_img"></span>
            <span class="longin_img"></span>
        </header>
        <!-- 内容 -->
        <div class="content">
            <!-- 内容导航 -->
            <div class="content-nav">
                <ul>
                    <li v-for="(item,index) in list_nav" :key="'li-'+index">
                        <router-link :class="{active:item.path == $route.path}" :to="item.path">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
                <div class="line"></div>
            </div>
            <!-- 子路由视图-->
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Footer from '@/view/footer/Footer'

export default {
    data() {
        return {
            list_nav: [
                {
                    title: '电影',
                    path: '/movie'
                },
                {
                    title: '电视',
                    path: '/teleplay'
                },
                {
                    title: '读书',
                    path: '/read'
                },
                {
                    title: '同城',
                    path: '/city'
                },
                {
                    title: '音乐',
                    path: '/music'

                },
                {
                    title: '集市',
                    path: '/market'
                }
            ]
        }
    },
    components: {
        "v-footer": Footer
    },
    mounted() {

    },
    methods: {
        getPathHash() {
            var pathHash = window.location.hash.substring(1);
            return pathHash
        }
    },
    watch: {
        $router() {
            console.log(getPathHash())
            if (getPathHash() == '/video') {
                this.$router.push({ path: '/movie' })
            }

        }
    }
}
</script>

<style scoped>
@import './video.css';











/* https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2500451074.jpg */

.content {
    width: 100%;
    overflow: hidden;
}

.content .content-nav {
    width: 100%;
    overflow: hidden;
    height: 2rem;
    background-color: #fff;
    position: relative;
}

.content .content-nav ul {
    height: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
}

.content .content-nav .line {
    height: 2px;
    width: 12%;
    background-color: black;
    position: absolute;
    top: 1.875rem;
    left: 0.5rem;
}

.content .content-nav ul li {
    flex: 1;
    float: left;
    height: 100%;
    line-height: 2rem;
    text-align: center;
}
</style>