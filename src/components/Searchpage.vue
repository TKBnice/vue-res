<template>
    <div class="search-content">
        <v-search></v-search>
        <div class="search-list">
            <h3>热门搜索</h3>
            <ol class="list-box">
                <li class="list-item" v-for="(item,index) in list " :key="'li-'+index">
                    <p>
                        <span>{{index+1}}</span>
                        {{item.title}}
                    </p>
                    
                </li>
            </ol>
        </div>
    </div>
</template>
 <script >
import Search from '@/view/search/Search'
export default {
    data() {
        return {
            list: [
                {
                    title: "王牌特工"
                },
                {
                    title: "王牌特工"
                },
                {
                    title: "王牌特工"
                },
                {
                    title: "王牌特工"
                },
                {
                    title: "王牌特工"
                },

            ]
        }

    },
    components: {
        "v-search": Search
    },
    mounted(){

    }
}
</script>
<style scoped>
.search-content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
}




/* 内容 */

.search-content .search-list {
    margin-top: 3.125rem;
    margin-bottom: 3.875rem;
}

.search-content .search-list h3{
    height: 24px;
   background:#ccc; 
}
.search-content  .search-list .list-item {
    width:100%;
    height:24px;
    line-height:24px;
    font-size: 12px;
    padding:2px 0 2px 26px; 
    
}
.search-list .list-item p{
    position: relative;
    border-bottom:1px solid #ccc;
}
.search-list .list-item p span{
    position: absolute;
    left:-1rem;
}
</style>
