<template>
    <div class="movie-page">
        <div class="movie-title">
            <h4>今日推荐</h4>
            <p>全部
                <span>9</span>></p>
        </div>
        <div class="main-section">
            <div class="wrap">
                <div class="wrap-scroll">
                    <ul class="items">
                        <li class="item" v-for="(item,index) in list" :key="'li-'+index">
                            <a href="#">
                                <div class="item-poster" ref="posterimages"></div>
                            </a>
                            <p class="item-title"></p>
                            <div class="item-rating">
                                <div class="rank">
                                    <div class="rating-stars">
                                        <span class="rating-star-small-full">全球风暴</span>
                                    </div>
                                    <span>7.7</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="title-bar">
                <div class="title-bar-c title-bar-left">
                    <div><img src="" alt=""></div>
                    <div class="bar">
                        <p>找电影</p>
                        <p><span>冷门佳片 / 科幻 / 经典</span></p>
                    </div>
                    <div>></div>
                </div>
                <div class="title-bar-c title-bar-right" @click="login">
                    <div><img src="" alt=""></div>
                    <div class="bar">
                        <p>我的应影视</p>
                        <p><span>未登录</span></p>
                    </div>
                    <div>></div>
                </div>
            </div>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
export default {
    data() {
        return {
            list: [
                {
                    url: "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2501769525.jpg"
                },
                {
                    url: "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2499792043.jpg"
                },
                {
                    url: "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2502474177.jpg"
                }
            ]
        }

    },
    mounted() {
        for (var i = 0; i < this.list.length; i++) {
            this.$refs.posterimages[i].style.backgroundImage = "url(" + this.list[i].url + ")";
        }
        // console.log(1111)
    },
    methods: {
        login() {
            this.$router.push({ path: '/login' })
        }
    },
    watch: {
        $router() {
            console.log(1)
        }
    }
}
</script>
<style scoped >
.movie-page {
    width: 100%;
    background-color: #fff;
}

.movie-title {
    height: 42px;
}

.movie-title h4 {
    float: left;
    margin-left: 14px;
    margin-top: 16px;
}

.movie-title p {
    float: right;
    margin-right: 14px;
    margin-top: 16px;
    color: #8e8a8a;
}

.movie-title p span {
    margin-right: 6px;
}

.main-section .wrap {
    width: 20rem;
    overflow: hidden;
    height: 244px;
}

.main-section .wrap .wrap-scroll {
    width: 20rem;
    height: 260px;
    overflow-x: scroll;
    overflow-y: hidden;
}

.main-section .items {
    width: 480px;
    padding: 10px;
    display: flex;
}

.main-section .items .item {
    width: 160px;
    height: 100%;
    flex: 1;
    margin-right: 10px;
}

.main-section .items .item .item-poster {
    height: 180px;
    background: url('https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2500451074.jpg') no-repeat;
    background-size: 160px 180px;
}

.main-section .title-bar {
    display: flex;
    height: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.main-section .title-bar .title-bar-c {
    flex: 1;
    height: 50px;
    display: flex;
    align-items: center
}

.main-section .title-bar .title-bar-c div {
    padding: 3px 0;
    height: 40px;
}

.main-section .title-bar .title-bar-c div:first-child {
    flex: 1;
}

.main-section .title-bar .title-bar-c div:nth-child(2) {
    flex: 2;
    width: 80px;
    overflow: hidden;
}

.main-section .title-bar .title-bar-c div:last-child {
    flex: 1;
    border-right: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 0 auto;
}

.main-section .title-bar .title-bar-right div:last-child {
    border-right: none;
}

.main-section .title-bar .title-bar-c .bar p {
    font-size: 12px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
}

.main-section .title-bar .title-bar-c .bar p:first-child {
    font-size: 12px;
    font-weight: bold;
}

.main-section .title-bar .title-bar-c .bar p:last-child {
    overflow: hidden;
}

.main-section .title-bar .title-bar-c .bar p:last-child span {
    display: block;
    -webkit-transform-origin-x: 0;
    transform: scale(0.64); 
    width: 130px;
}
</style>
