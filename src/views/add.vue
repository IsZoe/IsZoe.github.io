<template>
    <div class="page-find">
        <mt-header fixed title="发布"></mt-header>
        <div class="clear-tit"></div>

        <div class="select-box">
            <span class="select-tit">发布类型</span>
            <select name="type" id="" class="select">
                <option value='lost' >失物招领</option>
                <option value='find' >寻物启事</option>
            </select>
            <span>></span>
        </div>
        <mt-field label="证件号码" placeholder="请输入证件号码" v-model="cardNo"></mt-field>
        <mt-field label="时间" placeholder="选择" type="date" v-model="happenDay"></mt-field>
        <mt-field label="联系人" placeholder="请输入联系人姓名" v-model="username"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="描述" placeholder="具体情况" type="textarea" rows="4" v-model="introduction"></mt-field>
        <mt-field label="验证码" v-model="code">
          <img src="" height="45px" width="100px">
        </mt-field>
        <div class="nav-bar">
            <div class="nav-item on" @click='go("/")'>
                <div class="nav-icon iconfont">&#xe636;</div>
                <p>找回</p>
            </div>
            <div class="nav-item" @click='go("find")'>
                <div class="nav-icon iconfont">&#xe637;</div>
                <p>搜索</p>
            </div>
            <div class="nav-item">
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
             Field,
            } from 'mint-ui';

    export default {
        components: {
            Header,
            Field,
        },
        data() {
            return {
                type:null,
                cardNo: '',
                happenDay: '',
                username: '',
                phone: '',
                email: '',
                introduction: '',
                code: '',

            }
        },
        created() {
            setTitle('发布');
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
.page-find{
    width:100%;
}
.mt-search{
    height:100%;
}
.picker-box{
    position:fixed;
    left:0;
    bottom:r(60);
    width:100%;
    background:#fff;
}
.select-box{
    height:48px;
    display:flex;
    background:#fff;
    padding:0 10px;
    line-height:48px;
    .select-tit{
        width:105px;
        font-size:16px;
        flex-shrink:0;
    }
    .select{
        line-height:25px;
        font-size:16px;
    }
}
</style>

