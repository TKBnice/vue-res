<template>
    <footer class="tabbar">
        <ul class="tabbar-box">
            <li class="tabbar-item" v-for="(item,index) in list" :key="index+'li'">
                <router-link :class="{active:item.path == $route.path}" :to="item.path" >
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
                    icon: 'icon-form'
                },
                {
                    title: '书影音',
                    path: '/video',
                    icon: 'icon-process'
                },
                {
                    title: '广播',
                    path: '/radio',
                    icon: 'icon-bussinessman'
                },
                {
                    title: '小组',
                    path: '/circle',
                    icon: 'icon-wxbmingxingdianpu'
                },
                {
                    title: '我的',
                    path: '/mine',
                    icon: 'icon-wxbzhuye'
                }
            ]
        }
    }
}
</script>

<style scoped>
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 55px;
    width: 100%;
    z-index: 10;
    /* background-color: #f6f6f7; */
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.tabbar .tabbar-box {
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    height: 55px;
    line-height: 55px;
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
    height: 35px;
    font-size: 28px;
    line-height: 42px;
}

.tabbar .tabbar-box .tabbar-item .tabbar-label {
    height: 20px;
    line-height: 20px;
    display: block;
    font-size: 12px;
}
</style>
