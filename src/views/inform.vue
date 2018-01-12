<template>
    <div class="page-note">
        <mt-header fixed title="消息"></mt-header>
        <div class="clear-tit"></div>
        <ul class="note">
            <li class="note-item">
                <div class="note-tit">通知 <span class="red-dot"></span></div>
                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </li>
            <li class="note-item">
                <div class="note-tit">通知 <span class="red-dot"></span></div>
                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </li>
            <li class="note-item">
                <div class="note-tit">通知 <span class="red-dot"></span></div>
                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </li>
        </ul>
        <div class="nav-bar">
            <div class="nav-item on" @click='go("/")'>
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
            <div class="nav-item">
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
        },
        data() {
            return {
            }
        },
        created() {
            setTitle('消息');
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
.note{
    background:#fff;
    margin-top:r(5);
    padding-left:r(20);
    .note-item{
        padding:r(10) r(20) r(10) 0;
        border-bottom:1px solid #ddd;
        &:last-child{
            border-bottom:0 none;
        }
    }
    .note-tit{
        font-size:r(18);
        line-height:r(30);
        padding-bottom:r(5);
        font-weight:400;
        color:#000;
        position:relative;
        display:inline-block;
        .red-dot{
            width:r(6);
            height:r(6);
            position:absolute;
            top:r(0);
            right:r(-5);
            background:red;
            border-radius:100%;
        }
    }
}
</style>

