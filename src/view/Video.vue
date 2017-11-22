<template>
    <div>
        <!-- 头部muu -->
        <!-- <header class="menubar-box">
            <h3>书影音</h3>
            <span class="search_img"></span>
            <span class="longin_img"></span>
        </header> -->
        <v-header></v-header>
        <!-- 内容 -->
        <div class="content">
            <!-- 内容导航 -->
            <div class="content-nav">
                <ul>
                    <li v-for="(item,index) in list_nav" :key="'li-'+index" @click="lineMove(index)">
                        <router-link :class="{active:item.path == $route.path}" :to="item.path">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
                <div class="line" ref="line">
                    <span></span>
                </div>
            </div>
            <!-- 子路由视图-->
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Footer from '@/view/footer/Footer'
import Header from '@/view/header/Header'

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
        "v-footer": Footer,
        "v-header": Header
    },
    mounted() {

    },
    methods: {
        getPathHash() {
            var pathHash = window.location.hash.substring(1);
            return pathHash
        },
        lineMove(index) {
            const line = this.$refs.line;
            const lineLeft = line.offsetLeft;
            const lineWidth = line.offsetWidth;
            const liWidth = event.target.offsetWidth;
            const distance = index * liWidth + (liWidth - lineWidth) / 2;
            animate(line, distance, 5);
            function animate(ele, target, speed) {
                clearInterval(ele.timer);
                const step = ele.offsetLeft < target ? speed : -speed;
                ele.timer = setInterval(function() {
                    const result = target - ele.offsetLeft;
                    ele.style.left = ele.offsetLeft + step + "px";
                    if (Math.abs(result) <= Math.abs(step)) {
                        ele.style.left = target + "px";
                        clearInterval(ele.timer);
                    }
                }, 10)
            }

        }

    },
    watch: {
        $router() {
            // console.log(getPathHash())
            if (getPathHash() == '/video') {
                this.$router.push({ path: '/movie' })
            }

        }
    }
}
</script>

<style scoped>
@import './video.css';
.content {
    width: 100%;
    margin-top: 3.5rem;
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
    width: 16.666666666%;
    position: absolute;
    top: 1.875rem;
    left: 0;
}

.content .content-nav .line span {
    display: block;
    height: 2px;
    width: 2.375rem;
    margin: 0 auto;
    background-color: black;
}

.content .content-nav ul li {
    flex: 1;
    float: left;
    height: 100%;
    line-height: 2rem;
    text-align: center;
    color: #8e8a8a;
}

.content .content-nav ul .active {
    color: black;
    font-weight: 600;
}
</style>