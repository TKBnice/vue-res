<template>
    <div>
        <v-header></v-header>
        <div class="content">
            <h1>圈子</h1>
            <div>
                <span>{{ msg }}</span>
                <!-- 我们稍后在store上定义一个msg属性 -->
                <button @click='fun'>获取数据</button>
                <button @click="getNews">获取新闻数据</button>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Footer from '@/view/footer/Footer';
import Header from '@/view/header/Header';

// 这个例子的用意是：
// ①、用户点击button,触发绑定在click上的fun方法
// ②、fun是定义在actions.js中的，这个方法会调用vue自带的commit方法
// ③、commit方法会自动调用mutations中对应的方法
// ④、在mutations中更新store上的数据msg,从而Test.vue中的msg自动得到更新
export default {
    components: {
        "v-footer": Footer,
        "v-header": Header
    },
    methods: {
        ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
            'fun', // 我们稍后在src/store/actions.js中创建一个名为fun的方法
        ]),
        getNews() {
            this.$http.get('http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=ed6db82b843a6e53a61eddac276c1ad9', {
                        cityname: '成都'
                }
                ).then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
        computed: {
            ...mapGetters([ // 从store上绑定的getters中载入需要的到此组件中
                'msg' // 我们稍后在src/store/getters.js中创建一个名为msg的方法
            ]),
        }
    }
</script>

<style scoped lang="less">
.content {
    position: relative;
    top: 3.5rem;
    left: 0;
}
</style>