<template>
	<div class="page-search">
        <mt-header fixed title="失物招领"></mt-header>
        <div class="clear-tit"></div>
        <mt-search
          class='mt-search'
          v-model="value"
          cancel-text="取消"
          placeholder="搜索">
        </mt-search>
        <div class="nav-bar">
            <div class="nav-item on">
                <div class="nav-icon iconfont">&#xe636;</div>
                <p>找回</p>
            </div>
            <div class="nav-item" @click='go("find")'>
                <div class="nav-icon iconfont">&#xe637;</div>
                <p>搜索</p>
            </div>
            <div class="nav-item" @click='go("add")'>
                <div class="nav-icon iconfont">&#xe650;</div>
                <p>发布</p>
            </div>
            <div class="nav-item" @click='go("inform")'>
                <div class="nav-icon iconfont">&#xe635;</div>
                <p>消息</p>
            </div>
            <div class="nav-item" @click='go("usercenter")'>
                <div class="nav-icon iconfont">&#xe631;</div>
                <p>我的</p>
            </div>
        </div>
	</div>
</template>
<script lang="babel">
import {setTitle} from '../untils';
    import { Header,
             Search
            } from 'mint-ui';

    export default {
        components: {
            Header,
            Search
        },
        data() {
            return {
                value:'',
            }
        },
        created() {
            setTitle('失物招领');
        },
        mounted() {
        },
        methods: {
            go(link){
                this.$router.push(link);
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../assets/style/func';

.page-search{
    width:100%;
}
.mt-search{
    height:100%;
}
</style>

