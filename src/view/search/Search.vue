<template>
    <div class="search-box">
        <label :class="{search_img:isShow,search_h:!isShow}" @click="open_list">
            <span>{{serchText}}</span>
        </label>
        <input type="search" :class="{search_e:!isShow,search_s:isShow}" @focus="searchPage" :placeholder="searchPlaceholder">
        <span class="qr_img" v-if="isShow"></span>
        <span :class="{longin_img:isShow}" @click="login">
            <span :class="{search_cancel:!isShow}">{{cancelText}}</span>
        </span>
        <ul class="list-h" v-if="openList">
            <li class="list-h-item" v-for="(item,index) in serch" :key="'list-'+index">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script >
export default {
    data() {
        return {
            serchText: "全部",
            cancelText: "取消",
            isShow: true,
            openList: false,
            searchPlaceholder: "影视 图书 小组",
            serch: [
                "全部",
                "电影/电视",
                "图书",
                "小组",
                "用户",
                "用户",
                "用户"
            ]
        }

    },
    mounted() {
        this.serchText = "";
        this.cancelText = "";
        var pathHash = window.location.hash.substring(1);
        if (pathHash == '/Searchpage') {
            this.isShow = !this.isShow;
            this.searchPlaceholder = "搜索";
            this.serchText = "全部";
            this.cancelText = "取消";
            this.$router.push({ path: '/Searchpage' })
        } else {

        }
    },
    methods: {
        login() {
            if (this.isShow) {
                this.$router.push({ path: '/login' })
            } else {
                this.$router.push({ path: '/home' })
                this.isShow = !this.isShow;
                this.serchText = "";
                this.cancelText = "";
            }

        },
        searchPage() {
            if (this.isShow) {
                this.isShow = !this.isShow;
                this.searchPlaceholder = "搜索";
                this.serchText = "全部";
                this.cancelText = "取消";
                this.$router.push({ path: '/Searchpage' })
            } else {

            }

        },
        open_list() {
            var pathHash = window.location.hash.substring(1);
            if (pathHash == '/Searchpage') {
                this.openList = !this.openList;
            }

        }
    }
}
</script>
<style scoped >
.search-box {
    height: 3.125rem;
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: #41be56;
}

.search-box .list-h {
    width: 4.375rem;
    padding: 0.375rem;
    position: relative;
    top: 0;
    left: 2px;
    background-color: #FFF;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-box .list-h .list-h-item {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 0.75rem;
}

.search-box .search_img {
    position: absolute;
    left: 0.875rem;
    top: 1rem;
    width: 1.25rem;
    height: 1.25rem;
    background: url('../../assets/image/search.png') no-repeat;
    background-size: 1.25rem;
}

.search-box input {
    width: 16.75rem;
    height: 2.125rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-left: 0.625rem;
    background-color: #fff;
    border-radius: 0.5rem;
}







/* 切换为搜索页 start*/

.search-box .search_h {
    /* 搜索头 */
    font-size: 1rem;
    height: 2.125rem;
    line-height: 2.125rem;
    text-align: center;
    position: absolute;
    left: 0.875rem;
    top: 0.625rem;
}

.search-box .search_h span {
    display: inline-block;
    height: 1.125rem;
    line-height: 1.125rem;
    color: #41be56;
}


.search-box .search_h::after {
    content: "";
    width: 0;
    height: 0;
    position: relative;
    top: -0.475rem;
    left: 0;
    border-bottom: 10px solid #ccc;
    border-left: 10px solid transparent;
}

.search-box .search_e {
    /* 搜索文字 */
    padding: 2px 3.75rem;
}

.search-box .search_cancel {
    /* 取消搜索 */
    position: absolute;
    top: 0.75rem;
    right: 0.375rem;
    height: 1.625rem;
    width: 2rem;
    line-height: 1.625rem;
    color: #fff;
    font-weight: 500;
}



/* 切换为搜索页 end*/

.search-box .search_s {
    padding: 2px 1.75rem;
}

.search-box .qr_img {
    position: absolute;
    top: 1rem;
    right: 3rem;
    width: 1.25rem;
    height: 1.25rem;
    background: url('../../assets/image/qr.png') no-repeat;
    background-size: 1.25rem;
}

.search-box .longin_img {
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
    width: 1.625rem;
    height: 1.625rem;
    background: url('../../assets/image/login.png') no-repeat;
    background-size: 1.625rem;
}
</style>
