<template>
    <div>
        <v-header></v-header>
        <div class="content">
            <div class="weather">
                <p class="position">{{position}}<span>{{time}}更新</span></p>
                <p class="temperature">{{temp}} <span>°</span></p>
                <p class="windPower">{{wind_direction}}<{{wind_strength}}</p>
                <div class="today">
                    今天：{{weather}} {{temperature}} {{week}}
                </div>
            </div>
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
    data() {
        return {
            position:"成都",
            time:"",
            temp:"",
            wind_direction:"",
            wind_strength:"",
            weather:"",
            temperature:"",
            week:""
        }
    },
    components: {
        "v-footer": Footer,
        "v-header": Header
    },
    mounted(){
        var _this = this;
        _this.$http.get('/api/circle?cityname=成都')
        .then(function(response) {
            var jsonResponse = JSON.parse(response.data);
            // console.log(jsonResponse.result['sk']);
            // console.log(jsonResponse.result['today']);
            _this.time = jsonResponse.result['sk'].time;
            _this.temp = jsonResponse.result['sk'].temp;
            _this.wind_direction = jsonResponse.result['sk'].wind_direction;
            _this.wind_strength = jsonResponse.result['sk'].wind_strength;
            _this.temperature = jsonResponse.result['today'].temperature;
            _this.weather = jsonResponse.result['today'].weather;
            _this.week = jsonResponse.result['today'].week;
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    methods: {
        ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
            'fun', // 我们稍后在src/store/actions.js中创建一个名为fun的方法
        ]),
        getNews() {

        }
            
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
.weather{
    background:-webkit-linear-gradient(#37424C, #859AAB);
    background:linear-gradient(#37424C, #859AAB);
    color: #fff;
    .position{
        padding-left: 10px;
        span{
            font-size: 12px;
            margin-left:4px; 
        }
    }
    .temperature{
        font-size: 2rem;
        text-align: center;
    }
    .windPower{
        text-align: center;
    }
    .today{
        text-align: center;
    }
}
</style>