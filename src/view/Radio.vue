<template>
    <div>
        <v-header></v-header>
        <div class="r-header">
            <div class="header-text">
                <p>发现有趣的人</p>
                <p>关注他们，发现更大的世界</p>
            </div>

        </div>
        <div class="r-main">
            <ul class="r-main-list">
                <li class="r-item">
                    <div class="item-top">
                        <div class="author-img">
                            <div class="pd100"></div>
                        </div>

                        <div class="author">
                            <p class="author">elimu</p>
                            <p class="author-fans">
                                <span class="fans-count">66</span>关注
                            </p>

                        </div>
                        <button class="follow-btn">关注</button>
                        <span class="close-item">x</span>
                    </div>

                    <div class="item-middle">文字文章字文章字文章字文章字文章字文章字文章 一段文 一段文 一段文 一段文 一段文 一段文 字</div>
                    <div class="item-bottom">
                        <span>14赞</span>
                        <span>18留言</span>
                    </div>
                </li>
                <li class="r-item">
                    <div class="item-top">
                        <div class="author-img">
                            <div class="pd100"></div>
                        </div>

                        <div class="author">
                            <p class="author">elimu</p>
                            <p class="author-fans">
                                <span class="fans-count">66</span>关注
                            </p>

                        </div>
                        <button class="follow-btn">关注</button>
                        <span class="close-item">x</span>
                    </div>

                    <div class="item-middle">文字文章字文章字文章字文章字文章字文章字文章 一段文 一段文 一段文 一段文 一段文 一段文 字</div>
                    <div class="item-bottom">
                        <span>14赞</span>
                        <span>18留言</span>
                    </div>
                </li>
                <li class="r-item">
                    <div class="item-top">
                        <div class="author-img">
                            <div class="pd100"></div>
                        </div>

                        <div class="author">
                            <p class="author">elimu</p>
                            <p class="author-fans">
                                <span class="fans-count">66</span>关注
                            </p>

                        </div>
                        <button class="follow-btn">关注</button>
                        <span class="close-item">x</span>
                    </div>

                    <div class="item-middle">文字文章字文章字文章字文章字文章字文章字文章 一段文 一段文 一段文 一段文 一段文 一段文 字</div>
                    <div class="item-bottom">
                        <span>14赞</span>
                        <span>18留言</span>
                    </div>
                </li>
                <li class="r-item">
                    <div class="item-top">
                        <div class="author-img">
                            <div class="pd100"></div>
                        </div>

                        <div class="author">
                            <p class="author">elimu</p>
                            <p class="author-fans">
                                <span class="fans-count">66</span>关注
                            </p>

                        </div>
                        <button class="follow-btn" @click="followBtn">关注</button>
                        <span class="close-item" @click="closeItem">x</span>
                    </div>

                    <div class="item-middle">文字文章字文章字文章字文章字文章字文章字文章 一段文 一段文 一段文 一段文 一段文 一段文 字</div>
                    <div class="item-bottom">
                        <span>14赞</span>
                        <span>18留言</span>
                    </div>
                </li>
            </ul>
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
            value1: 0
        }
    },
    components: {
        "v-footer": Footer,
        "v-header": Header
    },
    methods:{
        closeItem(){
            alert('11');
        },
        followBtn(){
           alert('11'); 
        }
    }
}
</script>

<style scoped style lang="less">
.r-header {
    width: 100%;
    height: 40px;
    margin-top: 76px;
    background: #eee;
    .header-text{
        margin-left: 100px;
        margin-top: 30px;
        p:first-child{
            font-weight: bold;
        }
        p:last-child{
            font-size: 12px;
        }
    }
}

.r-main {
    width: 100%;
    background: #fff;
    .r-main-list {
        width: 100%;
        margin-bottom: 70px;
        .r-item {
            width: 96%; // height: 100px;
            margin: 0 auto;
            box-shadow: 1px 1px 5px 1px #aaa;
            margin-top: 10px;
            .item-top {
                position: relative;
                overflow: hidden;
                padding-bottom: 8px;
                .author-img {
                    width: 48px;
                    height: 48px;
                    float: left;
                    background-image: url('../assets/author.jpg');
                    background-size: 30px 30px;
                    background-position: center;
                    border-radius: 50%;
                    margin: 16px 16px 0 16px;

                    div {
                        padding-top: 100%;
                    }
                }
                .author {
                    font-size: 16px;
                    margin-top: 16px;
                    .author-fans {
                        font-size: 12px;
                    }
                }
                .follow-btn {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    background-color: #41BE56;
                    color: #fff;
                    padding: 3px 8px;
                    border-radius: 3px;
                    font-size: 12px;
                }
                .close-item {
                    display: inline-block;
                    width:24px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                }
            }
            .item-middle {
                margin-left: 80px;
                font-size: 14px;
            }
            .item-bottom {
                margin-left: 80px;
                font-size: 12px;
            }
        }
    }
}
</style>