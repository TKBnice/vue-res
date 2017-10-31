<template>
    <div class="home-box">
        <div class="search-box">
            <label class="search_img"></label>
            <input type="search" class="search" placeholder="影视 图书 小组">
            <span class="qr_img"></span>
            <span class="longin_img" @click="login"></span>
        </div>
        <div class="content">
            <ul class="article-list">
                <li class="article-item" v-for="(item,index) in list" :key="index+'li'">
                    <div class="article-img">
                        <div></div>
                    </div>
                    <h3 class="article-title">每年哭一次，都是为了租房</h3>
                    <p class="article-text">我扛过了压力。。。我扛过了压力我扛过了压压力我扛过了压力我扛过了压力。</p>
                    <p class="article-author">
                        <a href="#">
                            <img src="../assets/author.jpg" alt="作者">
                            <span>{{item.title}}</span>
                        </a>

                    </p>
                    <div v-if="index==0" class="list-nav">
                        <p class="list-nav-item" v-for="(item,index) in list_nav" :key="index+'li'">
                            <span class="icon iconfont" :class="item.icon"></span>
                            <span>{{item.title}}</span>
                        </p>
                    </div>
                </li>

            </ul>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
    data() {
        return {
            list: [
                {
                    title: '作者1',
                    author: "111",
                    path: '/home',
                    icon: 'icon-form'
                },
                {
                    title: '作者12',
                    path: '/video',
                    icon: 'icon-process'
                },
                {
                    title: '作者13',
                    path: '/radio',
                    icon: 'icon-bussinessman'
                },
                {
                    title: '作者14',
                    path: '/circle',
                    icon: 'icon-wxbmingxingdianpu'
                },
                {
                    title: '作者15',
                    path: '/mine',
                    icon: 'icon-wxbzhuye'
                }
            ],
            list_nav: [
                {
                    title: "豆瓣时间",
                    icon: "icon-process"
                },
                {
                    title: "豆瓣日历",
                    icon: "icon-bussinessman"
                },
                {
                    title: "豆瓣事件",
                    icon: "icon-wxbmingxingdianpu"
                },
                {
                    title: "豆瓣视频",
                    icon: "icon-wxbzhuye"
                }
            ]
        }
    },
    components: {
        "v-footer": Footer
    },
    methods: {
        login() {
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

.search-box .longin_img {
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
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
    margin-bottom: 3.875rem;
}

.article-item {
    padding: 0.625rem 0.75rem;
    margin-bottom: 0.5rem;
    position: relative;
    color: #494949;
    background-color: #fff;
}

.article-item:first-child {
    margin-bottom: 4.625rem;
    padding-bottom: 0.3125rem;
}

.article-title {
    text-align: justify;
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    margin-bottom: 0.375rem;
    word-wrap: break-word;
    -webkit-line-clamp:2;
}

.article-text {
    overflow: hidden;
    text-align: justify;
    color: #aaa;
    font-size: 0.75rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* 行数 */
    word-wrap: break-word;
    /* 换行 */
    margin-bottom: 0.375rem;
}

.article-author {
    font-size: 0.75rem;
    color: #ccc;
}

.article-author a img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
}

.article-img {
    position: relative;
    background: url(https://qnmob2.doubanio.com/img/files/file-1509374286.png?imageView2/2/q/80/w/330/h/330/format/jpg) center center / cover no-repeat rgb(250, 250, 250);
    width: 25.6%;
    margin-left: 1.5625rem;
    float: right;
}

.article-img div {
    padding-top: 100%;
}

.list-nav {
    position: absolute;
    left: 0;
    top: 7.5rem;
    display: flex;
    width: 100%;
    margin-top: 0.875rem;
    background-color:#fff;
}

.list-nav p {
    flex: 1;
    font-size: 0.75rem;
    height: 3.75rem;
    padding: 0 0.4375rem;
    text-align: center;
}

.list-nav p span {
    display: block;
}

.list-nav p .icon:first-child {
    height: 2.25rem;
    font-size: 1.625rem;
    line-height: 2.625rem;
}
</style>