<template>
    <div class="modal" v-show="isShowModal">
        <div class="modal-wrap">
            <div class="modal-cue">
                <p>
                    <span>不喜欢吗?</span>
                    <span class="cls" @click="close_Modal">x</span>
                </p>
                <p>关掉此内容，不在提示</p>
            </div>
            <ul class="modal-content">
                <li v-for="(cues,index) in list_cue" :key="'cue-'+index" :class="{active:cues.cue_active}" @click="selected(index)">
                    {{cues.reason}}
                </li>
            </ul>
            <input type="submit" value="提交" class="btn" @click="submit">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isShowModal: false,
            list_cue: [
                {
                    reason: '不感兴趣',
                    cue_active: false
                },
                {
                    reason: '内容重复',
                    cue_active: false
                },
                {
                    reason: '内容质量差',
                    cue_active: false
                }
            ]
        }
    },
    props: {//子组件接收父组件方法测试
        parentfn: {
            type: Function
        }
    },
    methods: {
        close_Modal() {
            //关闭模态框
            this.isShowModal = !this.isShowModal;
            for(var i=0;i<this.list_cue.length;i++){
                this.list_cue[i].cue_active = false;
            }
        },
        submit() {//提交
            this.isShowModal = false;
        },
        selected(index) {//选择原因
            this.list_cue[index].cue_active = !this.list_cue[index].cue_active;
        },
    }
}
</script>

<style scoped>
.modal {
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}

.modal .modal-wrap {
    width: 18.75rem;
    height: 12.5rem;
    border-radius: 0.375rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -9.375rem;
    margin-top: -6.25rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}

.modal .modal-wrap .modal-cue {
    flex: 1;
    width: 100%;
    padding: 0.625rem 0.625rem 0 0.625rem;
    color: #aaa;
}

.modal .modal-wrap .modal-cue p {
    height: 50%;
}

.modal .modal-wrap .modal-cue .cls {
    float: right;
    width: 2.5rem;
    height: 1.25rem;
    font-size: 1rem;
    text-align: center;
}

.modal .modal-wrap .modal-cue p:last-child {
    font-size: 0.75rem;
}

.modal .modal-wrap .modal-content {
    flex: 3;
    width: 100%;
    padding: 0.625rem 0.625rem 0 0.625rem;
    overflow: hidden;
}

.modal .modal-wrap .modal-content li {
    float: left;
    width: 8.4375rem;
    height: 2.5rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 2.4;
    border: 1px solid gray;
    border-radius: 1.5625rem;
    margin-bottom: 0.625rem;
}

.modal .modal-wrap .modal-content li:nth-child(1) {
    margin-right: 0.625rem;
}

.modal .modal-wrap .btn {
    flex: 1;
    width: 100%;
    background-color: #41be56;
}

.modal .modal-wrap .modal-content .active {
    background-color: #41be56;
}
</style>