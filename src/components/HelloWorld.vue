<template>
    <div class="hello">
        <div class="close">x</div>
        <h1>欢迎来到这里</h1>
        <div class="main">
            <input type="text" name="userName" placeholder="帐号" />
            <input type="text" name="userPassword" placeholder="密码" />
            <input type="button" value="登录" class="login" />
            <p>
                <a href="">注册账户</a>
                <span>|</span>
                <a href="">忘记密码</a>
            </p>
        </div>
        <div class="footer">
            <a href="">微博登陆</a>
            <span>|</span>
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
    font-size: 1.25rem;
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
    border-radius: 3px;
    box-sizing: border-box;
}

.main input:first-child {
    margin-top: 1.25rem;
    border-bottom: none;
}

.main input:nth-child(3) {
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
.main p span{
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
