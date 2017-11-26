<template>
    <div class="hello">
        <div class="close" @click="close">x</div>
        <h1>欢迎来到这里</h1>
        <div class="main">
            <input type="text" name="userName" v-model="defData.username" placeholder="帐号" autocapitalize="off" auto-complete="off" />
            <input type="password" name="userPassword" v-model="defData.userpassword" placeholder="密码" autocapitalize="off" auto-complete="off" />
            <input type="button" value="登录" class="login" @click="login" />
            <p>
                <a href="">注册账户</a>
                <span>|</span>
                <a href="">忘记密码</a>
            </p>
        </div>
         <p class="hint">{{errText}}</p> 
        <div class="footer">
            <a href="">微博登陆</a>
            <span>|</span>
            <a href="">微信登陆</a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            errText:"",
            defData: {
                username: "",
                userpassword: ""
            }

        }
    },
    mounted() {
        // this.funUserData({
        //     username: "111",
        //     userpassword: "1111"
        // })
        this.$store.dispatch('funUserData', {
            username: "admin",
            userpassword: "123456"
        })
    },
    methods: {
        // ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
        //     'funUserData', // actions.js中创建funUserData方法获取数据
        // ]),
        login() {
            if (this.defData.username && this.defData.username != "" && this.defData.username === this.userData.username && this.defData.userpassword === this.defData.userpassword) {
                this.$router.push({ path: '/home' })
            }else{
                this.errText = "按F12查看密码哦！";
            }

        },
        close() {
            this.$router.push({ path: '/home' })
        }
    },
    computed: {
        ...mapGetters([ // 从store上绑定的getters中载入需要的到此组件中
            'userData'//getters.js中创建一个名为userData的方法
        ]),

    },
}
</script>

<style scoped>
h1 {
    font-weight: normal;
    color: #41BE56;
    text-align: center;
    margin-top: 3.75rem;
    font-size: 2rem;
}

a {
    display: inline-block;
    color: #41BE56;
    text-decoration: none;
}
.hint{
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    color: red;
}
.hello {
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
}

.hello .close {
    width: 1.875rem;
    height: 1.875rem;
    line-height: 1.875rem;
    text-align: center;
    display: inline-block;
    font-size: 0.875rem;
}

.main {
    padding: 0.625rem 0;
    width: 100%;
    overflow: hidden;
}

.main input {
    display: block;
    font-size: 0.875rem;
    width: 94%;
    height: 2.5rem;
    margin: 0 auto;
    padding: 0.625rem;
    -webkit-tap-highlight-color: transparent;
    border: 1px solid rgba(128, 128, 128, 0.38);
    outline: none;
    box-sizing: border-box;
}

.main input:first-child {
    margin-top: 1.25rem;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
}

.main input:nth-child(2) {
    border-radius: 0 0 5px 5px;
}

.main input:nth-child(3) {
    border-radius: 5px;
    background-color: #41BE56;
    margin-top: 1.25rem;
    color: #fff;
}

.main p {
    margin: 0 auto;
    text-align: center;
    margin-top: 1.25rem;
    font-size: 0.875rem;
}

.main p a:last-child {
    color: #9B9B9B;
}

.main p span {
    padding: 0 0.875rem;
}

.footer {
    width: 75%;
    position: absolute;
    bottom: 0.625rem;
    left: 50%;
    margin-left: -37.5%;
    text-align: center;
    font-size: 0.875rem;
    display: flex;
}

.footer a {
    display: inline-block;
    text-align: center;
    color: #9B9B9B;
    flex: 1;
}

.footer span {
    flex: 1;
}
</style>
