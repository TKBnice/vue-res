<template>
    <div class="hello">
        <div>x</div>
        <h1>欢迎来到这里</h1>
        <div class="main">
            <input type="text" name="userName" />
            <input type="text" name="userPassword" />
            <input type="button" value="登录" class="login"/>
            <p class="text">
                <a href="">注册账户</a>
                <span>|</span>
                <a href="">忘记密码</a>
            </p>
        </div>
        <div class="footer">
            <a href="">微博登陆</a>
            <a href="">微信登陆</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "admin",
            userPassword: "",
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-weight: normal;
    color: #1c945e;
    text-align:center;
    margin-top: 60px;
}
a {
    color: #42b983;
    text-decoration:none;
}
.hello{
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
}
.main{
    padding: 10px 0;
    width: 100%;
    overflow: hidden;
    background-color: skyblue;
}
.main input{
    display: block;
    font-size: 20px;
    width: 90%;
    height: 40px;
    margin: 0 auto;
    -webkit-tap-highlight-color:transparent;
    border:none;
    outline:none;
}
.main input:first-child{
    margin-top: 20px;
}
.main input:nth-child(3){
    background-color: #1c945e;
    margin-top:20px;
    color: #fff;
}
.main p{
    height: 50px;
    margin:0 auto;
    text-align:center;
    margin-top:20px;
    font-size: 14px;
}
.main p a:last-child{
    color: gray;
}
.footer{
    position: relative;
    bottom:0;
    left: 50%;
}
</style>
