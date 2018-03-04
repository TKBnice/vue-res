<template>
    <div class="home-box" @click="closeAll">
        <!-- 搜索栏 -->
        <v-search></v-search>
        <!-- 内容 -->
        <div class="content">
            <ul class="article-list">
                <!-- 内容列表 -->
                <li class="article-item" v-for="(item,index) in list" :key="'item'+index">
                    <div class="article-img" ref="articleitem">
                        <div></div>
                    </div>
                    <h3 class="article-title">{{item.articleTitle}}</h3>
                    <p class="article-text">{{item.articleText}}</p>
                    <p class="article-author">
                        <a href="#">
                            <img :src="item.authorImg" alt="作者">
                            <span>{{item.title}}</span>
                        </a>
                        <span class="close" @click="toggle(index)">•••</span>
                        <span class="close-text" v-show="item.isShow" @click="close_text(index)">不感兴趣</span>
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
        <!-- 摸态框 -->
        <v-modal :parentfn="aaa" ref="child"></v-modal>
        <!-- 底部栏 -->
        <v-footer></v-footer>
    </div>
</template>

 <script type="text/ecmascript-6">
import axios from 'axios'
import Footer from '@/view/footer/Footer'
import Modal from '@/view/modal/Modal'
import Search from '@/view/search/Search'

export default {
    data() {
        return {
            list: [
                {
                    title: '作者1',
                    author: "111",
                    authorImg:"",
                    path: '/home',
                    icon: 'icon-form',
                    index: 0,
                    imgUrl: "https://qnmob3.doubanio.com/img/files/file-1509460301.jpeg?imageView2/2/q/80/w/330/h/330/format/jpg",
                    articleText:"",
                    articleTitle:"",
                    isShow: false
                },
                {
                    title: '作者12',
                    path: '/video',
                    authorImg:"",
                    icon: 'icon-process',
                    index: 1,
                    imgUrl: "https://img3.doubanio.com/view/note/sqs/public/p46290460.jpg",
                    articleText:"",
                    articleTitle:"",
                    isShow: false
                },
                {
                    title: '作者13',
                    path: '/radio',
                    authorImg:"",
                    icon: 'icon-bussinessman',
                    index: 2,
                    imgUrl: "https://img3.doubanio.com/lpic/s29563550.jpg",
                    articleText:"",
                    articleTitle:"",
                    isShow: false
                },
                {
                    title: '作者14',
                    path: '/circle',
                    authorImg:"",
                    icon: 'icon-wxbmingxingdianpu',
                    imgUrl: "https://qnmob3.doubanio.com/img/files/file-1509438208.jpg?imageView2/2/q/80/w/330/h/330/format/jpg",
                    articleText:"",
                    articleTitle:"",
                    index: 3,
                    isShow: false
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
                },
                {
                    title: "豆瓣视频",
                    icon: "icon-wxbzhuye"
                }
            ]
        }
    },
    components: {
        "v-footer": Footer,
        "v-modal": Modal,
        "v-search": Search
    },
    mounted() {
        var _this = this;
        axios.post('/api/home')
        .then(function(response){
            console.log(response);
            for(var i=0;i<_this.list.length;i++){
                _this.list[i].articleTitle = response.data.items1[i].title;
                _this.list[i].articleText = response.data.items1[i].text;
                _this.list[i].title = response.data.items2[i].authorName;
                _this.list[i].authorImg = response.data.items2[i].src;
            }
            
        })
        .catch(function(err){
            console.log(err);
        });
        //列表图片
        // console.log()
        for (var i = 0; i < _this.list.length; i++) {
            _this.$refs.articleitem[i].style.backgroundImage = "url(" + _this.list[i].imgUrl + ")";
        }
    },
    methods: {
        closeAll(event) {
            for (var i = 0; i < this.list.length; i++) {
                // this.list[i].isShow = false;
            }
        },
        toggle(index,event) {
            
            window.event.stopPropagation();//阻止向父级事件冒泡
            //不感兴趣按钮
            if (!this.list[index].isShow) {
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].isShow = false;
                }
                this.list[index].isShow = !this.list[index].isShow;
            } else {
                this.list[index].isShow = !this.list[index].isShow;
            }
        },
        close_text(index) {
            window.event.stopPropagation()
            //模态框
            this.list[index].isShow = !this.list[index].isShow;
            this.$refs.child.close_Modal();

        },
        aaa: function() {//测试父传子组件函数
            alert("aaa")
        }

    }
}
</script>

<style scoped>
.home-box {
    width: 100%;
    height: 100%;
}


/* 内容 */

.content {
    margin-top: 3.125rem;
    margin-bottom: 3.875rem;
}

.article-item {
    margin-bottom: 0.5rem;
    position: relative;
    color: #494949;
    background-color: #fff;
}

.article-item:first-child {
    padding-bottom: 0.5rem;
}

.article-title {
    padding: 0.625rem 0.75rem 0 0.75rem;
    text-align: justify;
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    background-color: #fff;
    padding-bottom: 0.675rem;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
}

.article-text {
    padding: 0 0.75rem 0.375rem 0.75rem;
    background-color: #fff;
    overflow: hidden;
    text-align: justify;
    color: #aaa;
    font-size: 0.75rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* 行数 */
    word-wrap: break-word;
    /* 换行 */
}

.article-author {
    background-color: #fff;
    padding: 0 0.75rem;
    font-size: 0.75rem;
    color: #ccc;
    position: relative;
}

.article-author a img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}

.article-author .close {
    position: absolute;
    top: 0;
    right: 0.75rem;
    font-size: 1rem;
    text-align: left;
}

.article-author .close-text {
    width: 5rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border: 1px solid rgba(73, 73, 73, 0.25);
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 1.25rem;
    z-index: 9;
    color: black;
    background-color: #fff;
    box-shadow: 0.3125rem 0.3125rem 1rem rgba(136, 136, 136, 0.55);
}

.article-img {
    position: relative;
    background-image: url(https://qnmob2.doubanio.com/img/files/file-1509374286.png?imageView2/2/q/80/w/330/h/330/format/jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgb(250, 250, 250);
    width: 3.5rem;
    margin-left: 1.5rem;
    margin-top: 0.625rem;
    margin-right: 0.625rem;
    float: right;
}

.article-img div {
    padding-top: 100%;
}

.list-nav {

    display: flex;
    width: 100%;
    background-color: #EDEDED;
    padding-top:0.5rem; 
}

.list-nav p {
    flex: 1;
    font-size: 0.75rem;
    height: 3.75rem;
    text-align: center;
    background-color: #FFF;
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