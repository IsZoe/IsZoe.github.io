<template>
    <div class="page-note">
        <mt-header fixed title="个人中心"></mt-header>
        <div class="clear-tit"></div>
        <div class="login">
            <div class="icon iconfont">&#xe6a3;</div>
            <div v-if='iflogin' class="user-info">
                <p class="username">小九九</p>
                <p class="phone">139***127</p>
            </div>
            <div v-else @click='go("login")'>登录／注册</div>
        </div>
        <div class="file-login" v-if='iflogin'>
            <mt-cell title="我的发布" is-link to="/">
              <span slot="icon" class="iconfont">&#xe64c;</span>
            </mt-cell>
            <mt-cell title="证件管理" is-link to="/">
              <span slot="icon" class="iconfont">&#xe63f;</span>
            </mt-cell>
            <div class="se"></div>
            <mt-cell title="修改绑定手机号" is-link to="/">
              <span slot="icon" class="iconfont">&#xe64c;</span>
            </mt-cell>
            <mt-cell title="修改密码" is-link to="repassword">
              <span slot="icon" class="iconfont">&#xe64c;</span>
            </mt-cell>
            <mt-cell title="关于" is-link to="/">
              <span slot="icon" class="iconfont">&#xe645;</span>
            </mt-cell>
            <div class="logout" @click='logout'>退出</div>
        </div>
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
            <div class="nav-item" @click='go("inform")'>
                <div class="nav-icon iconfont">&#xe635;</div>
                <p>消息</p>
            </div>
            <div class="nav-item">
                <div class="nav-icon iconfont">&#xe631;</div>
                <p>我的</p>
            </div>
        </div>
    </div>
</template>
<script lang="babel">
import {setTitle} from '../untils';
    import { Header,
             Cell
            } from 'mint-ui';

    export default {
        components: {
            Header,
            Cell
        },
        data() {
            return {
                iflogin: true,
            }
        },
        created() {
            setTitle('个人中心');
        },
        mounted() {
        },
        methods: {
            go(link){
                this.$router.push(link);
            },
            logout(){
                this.iflogin = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../assets/style/func';
.page-note{
    .iconfont{
        font-size:r(16);
        padding:0 r(4);
    }
}
.login{
    background:#fff;
    display:flex;
    height:r(45);
    padding:r(10) r(10);
    margin-bottom:r(20);
    line-height:r(45);
    .iconfont{
        font-size:r(22)
    }
    .user-info{
        padding-left:r(10);
        .username{
            line-height:r(30);
            font-weight:400;
            font-size:r(16);
        }
        .phone{
            line-height:r(18);
            font-size:r(12);
        }
    }
}
.se{
    height:r(20);
}
.logout{
    width:90%;
    background:#fff;
    height:r(40);
    margin:r(40) auto 0;
    text-align:center;
    line-height:r(40);
    border-radius:r(4);
    font-size:r(16);
}
</style>

