<template>
    <footer class="tabbar">
        <ul class="tabbar-box">
            <li class="tabbar-item" v-for="(item,index) in list" :key="index+'li'">
                <router-link :class="{active:item.path == $route.path||item.videoActive}" :to="item.path">
                    <span class="icon iconfont" :class="item.icon"></span>
                    <span class="tabbar-label">{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            
            list: [

                {
                    title: '首页',
                    path: '/home',
                    icon: 'icon-form',
                    videoActive: false,
                },
                {
                    title: '书影音',
                    path: '/video',
                    icon: 'icon-process',
                    videoActive: false,
                },
                {
                    title: '广播',
                    path: '/radio',
                    icon: 'icon-bussinessman',
                    videoActive: false,
                },
                {
                    title: '小组',
                    path: '/circle',
                    icon: 'icon-wxbmingxingdianpu',
                    videoActive: false,
                },
                {
                    title: '我的',
                    path: '/mine',
                    icon: 'icon-wxbzhuye',
                    videoActive: false,
                }
            ]
        }
    },
    mounted() {

        // if(pathHash == '/video'){

        // }
        // console.log(pathHash)
        //     if (pathHash === '/video') {
        //         console.log(this.$route.path)
        //         this.videoActive=true;
        //         console.log(this.videoActive)
        //     }
    },
    methods: {
        getRouter() {
            var pathHash = window.location.hash.substring(1,7);
            console.log(pathHash);
            if(pathHash === '/video'){

                this.list[1].videoActive=true;
            }
            
        }
    },
    watch: {
             '$route':'getRouter'
            
            // if (pathHash == '/video' || '/teleplay' || '/movie' || '/read' || '/city' || '/music' || '/market') {
            //     console.log(this.$route.path)
            //     this.list[1].path = this.$route.path;
            // }
    }
}
</script>

<style scoped>
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3.5rem;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.tabbar .tabbar-box {
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    height: 3.5rem;
    line-height: 3.5rem;
    overflow: hidden;
}

.tabbar .tabbar-box .tabbar-item {
    flex: 1;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
}

.tabbar .tabbar-box .tabbar-item .active {
    color: #41BE56;
}

.tabbar .tabbar-box .tabbar-item .icon {
    display: block;
    height: 2.25rem;
    font-size: 1.625rem;
    line-height: 2.625rem;
}

.tabbar .tabbar-box .tabbar-item .tabbar-label {
    height: 1.25rem;
    line-height: 1.25rem;
    display: block;
    font-size: 0.875rem;
}
</style>
