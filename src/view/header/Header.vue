<template>
    <header class="menubar-box">
        <h3>{{title}}</h3>
        <span class="search_img"></span>
        <span class="longin_img"></span>
    </header>
</template>


<script>
export default {
    data() {
        return {
            title:"书影音",
            list: [
                {
                    title: "书影音",
                    search_img: "../../assets/image/search.png",
                    longin_img: "../../assets/image/login.png"
                },
                {
                    title: "广播",
                    search_img: "../../assets/image/IMG_radio-1.jpg",
                    longin_img: "../../assets/image/IMG_radio-2.jpg"
                },
                {
                    title: "小组",
                    search_img: "../../assets/image/IMG_radio-1.jpg",
                    longin_img: "../../assets/image/IMG_radio-2.jpg"
                },
                {
                    title: "我的",
                    search_img: "../../assets/image/IMG_radio-1.jpg",
                    longin_img: "../../assets/image/IMG_radio-2.jpg"
                }
            ]
        }
    },
    mounted(){
        // console.log(this.$router.path)
        var pathHash = window.location.hash.substring(1);
        if(pathHash == '/radio'){
            this.title=this.list[1].title;
        }else if(pathHash == '/circle'){
            this.title=this.list[2].title;
        }else if(pathHash == '/mine'){
            this.title=this.list[3].title;
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.menubar-box {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background: #fff;
    text-align: center;
     position: fixed; 
    top: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
    z-index: 99;
}

.menubar-box .search_img {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: 3rem;
    top: 0.9375rem;
    background: url('../../assets/image/IMG_radio-1.jpg') no-repeat;
    background-size: 1.25rem;
}

.menubar-box .longin_img {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: 1rem;
    top: 0.9375rem;
    background: url('../../assets/image/IMG_radio-2.jpg') no-repeat;
    background-size: 1.25rem;
}
</style>