<template>
    <div>
        <v-header></v-header>
        <div class="main">
            <div class="main-top">
                <div class="personal-img"><img src="../assets/author.jpg" alt=""></div>
                <div class="personal-info">
                    <div class="info">
                        <p class="info-name">唐大大大</p>
                        <div class="info-id">
                            <p class="id-count">id:
                                <span>123456</span>
                            </p>
                            <p class="personal-homepage">个人主页
                                <i>></i>
                            </p>
                        </div>
                    </div>

                    <div class="follow-wrap">
                        <span class="follow">关注
                            <span>0</span>
                        </span>
                        <span class="be-Follow">被关注
                            <span>0</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="main-bottom">
                <ul class="classify">
                    <li class="item" v-for="(item,index) in list" :key="item+'-index'">
                        <i class="iconfont" :class="item.icon" v-if="index!==1"></i>
                        <p v-if="index!==1">{{item.title}}</p>
                        <span v-if="index!==1">></span>
                        <span v-if="index==1" class="index1">暂无数据记录</span> 
                    </li>
                </ul>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>

import Footer from '@/view/footer/Footer'
import Header from '@/view/header/Header';
export default {
    data() {
        return {
            list:[
                {
                    icon:"icon-icon-tips",
                    title:"提醒"
                },
                {
                    icon:"",
                    title:""
                },
                {
                    icon:"icon-xihuan-solid",
                    title:"喜欢"
                },
                {
                    icon:"icon-riji",
                    title:"日记"
                },
                {
                    icon:"icon-collections",
                    title:"相册"
                },
                {
                    icon:"icon-dianying",
                    title:"电影.电视"
                },
                {
                    icon:"icon-shu",
                    title:"读书"
                },
                {
                    icon:"icon-yinyue",
                    title:"音乐"
                },
                {
                    icon:"icon-qianbao",
                    title:"钱包"
                }
            ]
        }
    },
    components: {
        "v-footer": Footer,
        "v-header": Header
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
.main {
    width: 100%;
    margin-top: 3.5rem;
    .main-top {
        width: 100%;
        background: #41BE56;
        overflow: hidden;
        .personal-img {
            float: left;
            height: 5.25rem;
            line-height: 5.25rem;
            width:25%;
            text-align: center;
            img {
                width: 3.75rem;
                height: 3.75rem;
                vertical-align:middle;
                border-radius: 50%;
            }
        }
        .personal-info {
            width:75%;
            float: left;
            color: #fff;
            .info{
                .info-name{
                    margin-top: 0.75rem;
                }
                .info-id{
                    overflow: hidden;
                    border-bottom: 1px solid #fff;
                    .id-count{
                        font-size: 0.75rem;
                        float: left;
                        text-align: center;
                    }
                    .personal-homepage {
                        float: right;
                        font-size: 0.875rem;
                        margin-right:1rem;
                    }
                }
                
            }
            .follow-wrap{
                height: 1.5rem;
                line-height: 1.5rem;
                font-size: 0.875rem;
                .be-Follow{
                    margin-left: 0.75rem;
                }
            }
        }
    }
    .main-bottom{
        width:100%;
        .classify{
            
            width: 100%;
            margin: 0 auto;
            box-shadow: 1px 1px 0.3125rem 1px #aaa;
            margin-top: 0.625rem;
            .item{
                background: #fff;
                overflow: hidden;
                color: rgba(39, 40, 34, 0.83);
                border-bottom:1px solid rgba(39, 40, 34, 0.23);
                .iconfont{
                    float: left;
                    height: 2.5rem;
                    width: 2.5rem;
                    line-height: 2.5rem;
                    text-align: center;
                }
                p{
                    float: left;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    margin-left: 0.75rem;
                    font-size: 1rem;
                }
                span{
                    float: right;
                    display: inline-block;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    margin-right: 0.75rem;
                }
            }
            .item:nth-child(3n){
                margin-top: 0.75rem;
            }
            .item:nth-child(1) .iconfont,.item:nth-child(7) .iconfont{color:#41BE56}
            .item:nth-child(3) .iconfont{color:red}
            .item:nth-child(4) .iconfont,.item:nth-child(9) .iconfont{color:blue}
            .item:nth-child(5) .iconfont,.item:nth-child(6) .iconfont{color:orange}
            .item:nth-child(8) .iconfont{color:#fd7905}
            .index1{
                display: block;
                width: 100%;
                margin-right: 0;
                text-align: center;
                height: 2.5rem;
                line-height: 2.5rem;
            }
        }
    }
}
</style>