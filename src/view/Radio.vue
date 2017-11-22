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
                <li class="r-item" v-show="item.isClose" v-for="(item,index) in list" :key="'list-'+index">
                    <div class="item-top">
                        <div class="author-img">
                            <div class="pd100"></div>
                        </div>

                        <div class="author">
                            <p class="author-name">{{item.author_name}}</p>
                            <p class="author-fans">
                                <span class="fans-count">{{item.fans_count}}</span>关注
                            </p>

                        </div>
                        <button class="follow-btn">关注</button>
                        <span class="close-item" @click="closeItem(index)">x</span>
                    </div>

                    <div class="item-middle">{{item.item_text}}</div>
                    <div class="item-bottom">
                        <div class="icon-wrap-z">
                            <i class="iconfont icon-iconheji-"></i>
                            <span @click="giveLike(index)">{{item.fans_zan}}赞</span>
                        </div>
                        <div class="icon-wrap-p">
                            <i class="iconfont icon-pinglun"></i>
                            <span>{{item.fans_liuyan}}留言</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Footer from '@/view/footer/Footer';
import Header from '@/view/header/Header';


export default {
    data() {
        return {
            count: 0,
            list: [
                {
                    isClose: true,
                    author_name: 'elimu',
                    fans_count: 66,
                    item_text: '走过春的田野，趟过夏的激流，来到秋天就是安静祥和的世界。秋天，虽没有玫瑰的芳香，却有秋菊的淡雅，没有繁花似锦，却有硕果累累。',
                    fans_zan: 16,
                    fans_liuyan: 120
                },
                {
                    isClose: true,
                    author_name: '东池先生',
                    fans_count: 636,
                    item_text: '走过春的田野，趟过夏的激流，来到秋天就是安静祥和的世界。秋天，虽没有玫瑰的芳香，却有秋菊的淡雅，没有繁花似锦，却有硕果累累。',
                    fans_zan: 6,
                    fans_liuyan: 210
                },
                {
                    isClose: true,
                    author_name: '张三',
                    fans_count: 266,
                    item_text: '走过春的田野，趟过夏的激流，来到秋天就是安静祥和的世界。秋天，虽没有玫瑰的芳香，却有秋菊的淡雅，没有繁花似锦，却有硕果累累。',
                    fans_zan: 86,
                    fans_liuyan: 202
                },
                {
                    isClose: true,
                    author_name: '李四',
                    fans_count: 166,
                    item_text: '走过春的田野，趟过夏的激流，来到秋天就是安静祥和的世界。秋天，虽没有玫瑰的芳香，却有秋菊的淡雅，没有繁花似锦，却有硕果累累。',
                    fans_zan: 56,
                    fans_liuyan: 310
                },
                {
                    isClose: true,
                    author_name: '王五',
                    fans_count: 676,
                    item_text: '走过春的田野，趟过夏的激流，来到秋天就是安静祥和的世界。秋天，虽没有玫瑰的芳香，却有秋菊的淡雅，没有繁花似锦，却有硕果累累。',
                    fans_zan: 96,
                    fans_liuyan: 200
                },
            ]
        }
    },
    components: {
        "v-footer": Footer,
        "v-header": Header
    },
    methods: {
        closeItem(index) {
            this.list[index].isClose = false;

        },
        giveLike(index) {
            this.count++;
            console.log(this.count);
            if (this.count < 2) {
                this.list[index].fans_zan += this.count
            }
        }
    }
}
</script>

<style scoped style lang="less">
.r-header {
    width: 100%;
    height: 2.5rem;
    margin-top: 4.75rem;
    background: #eee;
    .header-text {
        margin-left: 6.25rem;
        margin-top: 1.875rem;
        p:first-child {
            font-weight: bold;
        }
        p:last-child {
            font-size: 0.75rem;
        }
    }
}

.r-main {
    width: 100%;
    background: #fff;
    .r-main-list {
        width: 100%;
        margin-bottom: 4.375rem;
        .r-item {
            width: 96%; // height: 100px;
            margin: 0 auto;
            box-shadow: 1px 1px 0.3125rem 1px #aaa;
            margin-top: 0.625rem;
            .item-top {
                position: relative;
                overflow: hidden;
                padding-bottom: 0.5rem;
                .author-img {
                    width: 3rem;
                    height: 3rem;
                    float: left;
                    background-image: url('../assets/author.jpg');
                    background-size: 1.875rem 30px;
                    background-position: center;
                    border-radius: 50%;
                    margin: 1rem 1rem 0 1rem;

                    div {
                        padding-top: 100%;
                    }
                }
                .author {
                    font-size: 1rem;
                    margin-top: 1rem;
                    .author-name {
                        font-weight: bold;
                    }
                    .author-fans {
                        font-size: 0.875rem;
                    }
                }
                .follow-btn {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background-color: #41BE56;
                    color: #fff;
                    padding: 0.1875rem 0.5rem;
                    border-radius: 0.1875rem;
                    font-size: 0.75rem;
                }
                .close-item {
                    display: inline-block;
                    width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    text-align: center;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                }
            }
            .item-middle {
                margin-left: 5rem;
                font-size: 0.875rem;
            }
            .item-bottom {
                margin-left: 5rem;
                font-size: 0.875rem;
                overflow: hidden;
                .icon-wrap-z {
                    float: left;
                }
                .icon-wrap-p {
                    float: left;
                    margin-left: 0.1875rem;
                }
            }
        }
    }
}
</style>