<template>
    <div>
        <v-header></v-header>
        <div class="main">
            <div class="main-top" @click="openHomeBar">
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
                    <li class="item" v-for="(item,index) in list" :key="item+'-index'" @click="open(index)">
                        <i class="iconfont" :class="item.icon" v-if="index!==1"></i>
                        <p v-if="index!==1">{{item.title}}</p>
                        <span v-if="index!==1">></span>
                        <span v-if="index==1" class="index1">暂无数据记录</span>
                    </li>
                </ul>

                <ul class="side-bar-wrap">
                    <li class="side-item" v-for="(sideitem,index) in sideList" :key="sideitem+'-index'">
                        <transition name="move">
                            <div class="side-bar" :class="'side-bar-'+index" v-if="sideitem.box">
                                <h1>我是侧栏{{index}}</h1>
                                <div>
                                    {{sideitem.article}}
                                </div>
                                <p id="close" @click="close(index)">关闭</p>
                            </div>
                        </transition>
                    </li>
                </ul>

            </div>
        </div>
        <transition name="move">
            <div class="personal-homepage-bar" v-if="isPersonal" ref="personalHomepageBar">
                <h1>个人主页</h1>
                <div>
                    一场冷雨过后，冬天便施施然的来了。季节的更替，总是让人无端的生出一丝惆怅，流年的飞花，染指的情怀，谁又能握的住永远？只是依然感恩，那些流逝岁月里的点滴，带着微光的美好，都是生命旅途里独一的温暖。

好像是到了一个年龄，不会再刻意，去维系一些会随着时间淡去的人情。骨子里甘愿着清寂后的静默，那些一旦生疏便会走失的人与事，就无须再浪费感情费力维持了。

岁月会让人沉淀下来，向往一种简单，干净，温馨的氛围。
                </div>
                <div>
                    <button @click="closeHomeBar">关闭</button>
                </div>
                
            </div>
        </transition>
        <v-footer></v-footer>
    </div>
</template>

<script>

import Footer from '@/view/footer/Footer'
import Header from '@/view/header/Header';
export default {
    data() {
        return {
            isPersonal: false,
            list: [
                {
                    icon: "icon-icon-tips",
                    title: "提醒"
                },
                {
                    icon: "",
                    title: ""
                },
                {
                    icon: "icon-xihuan-solid",
                    title: "喜欢"
                },
                {
                    icon: "icon-riji",
                    title: "日记"
                },
                {
                    icon: "icon-collections",
                    title: "相册"
                },
                {
                    icon: "icon-dianying",
                    title: "电影.电视"
                },
                {
                    icon: "icon-shu",
                    title: "读书"
                },
                {
                    icon: "icon-yinyue",
                    title: "音乐"
                },
                {
                    icon: "icon-qianbao",
                    title: "钱包"
                }
            ],
            sideList: [
                {
                    article: "看多了世事纷纭，人情冷漠，更加珍惜那温温的情意。抵手的温暖无须绚烂，只要在相依的岁月入心即可。",
                    box: false
                },
                {
                    article: "暂无数据",
                    box: false
                },
                {
                    article: "一别同窗年少时，重逢依旧诉相思。为君感动赋新词。。",
                    box: false
                },
                {
                    article: "叶卷叶舒真自在，花开花落总相安。炎凉世态百般看。。",
                    box: false
                },
                {
                    article: "别后音容记不清，前尘往事自澄明。如今微信意诚诚。。",
                    box: false
                },
                {
                    article: "别后音容记不清，前尘往事自澄明。如今微信意诚诚。。",
                    box: false
                },
                {
                    article: "别后音容记不清，前尘往事自澄明。如今微信意诚诚。。",
                    box: false
                },
                {
                    article: "别后音容记不清，前尘往事自澄明。如今微信意诚诚。。",
                    box: false
                },
                {
                    article: "别后音容记不清，前尘往事自澄明。如今微信意诚诚。。",
                    box: false
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
        open(index) {
            for (var i = 0; i < this.sideList.length; i++) {
                if (index == i && i != 1) {
                    this.sideList[index].box = !this.sideList[index].box;
                }
            }
        },
        close(index) {
            for (var i = 0; i < this.sideList.length; i++) {
                if (index == i && i != 1) {
                    this.sideList[index].box = !this.sideList[index].box;
                }
            }
        },
        openHomeBar() {
            this.isPersonal = !this.isPersonal;
        },
        closeHomeBar() {
            this.isPersonal = !this.isPersonal;
        }
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
            width: 25%;
            text-align: center;
            img {
                width: 3.75rem;
                height: 3.75rem;
                vertical-align: middle;
                border-radius: 50%;
            }
        }
        .personal-info {
            width: 75%;
            float: left;
            color: #fff;
            .info {
                .info-name {
                    margin-top: 0.75rem;
                }
                .info-id {
                    overflow: hidden;
                    border-bottom: 1px solid #fff;
                    .id-count {
                        font-size: 0.75rem;
                        float: left;
                        text-align: center;
                    }
                    .personal-homepage {
                        float: right;
                        font-size: 0.875rem;
                        margin-right: 1rem;
                    }
                }
            }
            .follow-wrap {
                height: 1.5rem;
                line-height: 1.5rem;
                font-size: 0.875rem;
                .be-Follow {
                    margin-left: 0.75rem;
                }
            }
        }
    }
    .main-bottom {
        width: 100%;
        overflow: hidden;
        .classify {

            width: 100%;
            margin: 0 auto;
            box-shadow: 1px 1px 0.3125rem 1px #aaa;
            margin-top: 0.625rem;
            .item {
                background: #fff;
                overflow: hidden;
                color: rgba(39, 40, 34, 0.83);
                border-bottom: 1px solid rgba(39, 40, 34, 0.23);
                .iconfont {
                    float: left;
                    height: 2.5rem;
                    width: 2.5rem;
                    line-height: 2.5rem;
                    text-align: center;
                }
                p {
                    float: left;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    margin-left: 0.75rem;
                    font-size: 1rem;
                }
                span {
                    float: right;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    margin-right: 0.75rem;
                }
            }
            .item:nth-child(3n) {
                margin-top: 0.75rem;
            }
            .item:nth-child(1) .iconfont,
            .item:nth-child(7) .iconfont {
                color: #41BE56
            }
            .item:nth-child(3) .iconfont {
                color: red
            }
            .item:nth-child(4) .iconfont,
            .item:nth-child(9) .iconfont {
                color: blue
            }
            .item:nth-child(5) .iconfont,
            .item:nth-child(6) .iconfont {
                color: orange
            }
            .item:nth-child(8) .iconfont {
                color: #fd7905
            }
            .index1 {
                display: block;
                width: 100%;
                margin-right: 0;
                text-align: center;
                height: 2.5rem;
                line-height: 2.5rem;
            }
        }
        .side-bar-wrap {
            width: 100%;
            .side-item {
                width: 100%;
                height: 100%;
                .side-bar {
                    width: 100%;
                    height: 100%;
                    background: skyblue;
                    position: fixed;
                    top: 0;
                    z-index: 99;
                }
            }
        }
    }
}

.personal-homepage-bar {
    width: 100%;
    height: 100%;
    background: skyblue;
    position: fixed;
    top: 0;
    z-index: 99;
    overflow: hidden;
    h1{
        width:100%;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
    }
    div{
        width: 100%;
        text-align: center;
        margin-top: 5rem;
        button{
            width: 50%;
            height: 2rem;
            line-height: 2rem;
            background: #41BE56;
        }
    }
}

.move-enter-active {
    animation: mymove .3s;
}

.move-leave-active {
    animation: myleave .3s;
}

@keyframes mymove {
    from {
        left: 100%
    }
    to {
        left: 0
    }
}

@-webkit-keyframes mymove {
    from {
        left: 100%
    }
    to {
        left: 0
    }
}

@keyframes myleave {
    from {
        left: 0
    }
    to {
        left: 100%
    }
}

@-webkit-keyframes myleave {
    from {
        left: 0
    }
    to {
        left: 100%
    }
}
</style>