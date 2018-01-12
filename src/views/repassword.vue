<template>
    <div class="page-setpaypassword">
        <p>交易密码为6位数字</p>
        <copaypassword id="pwd1" @input="check1" v-model="password" :size="6" ref='pas01'></copaypassword>
        <p>重复6位数字密码</p>
        <copaypassword id="pwd2" @input="check2" v-model="password2" :size="6" @onfocus='' ref='pas02'></copaypassword>
    </div>
</template>
<script>

import copaypassword from '../components/copaypassword.vue';

export default {
    components: {
        copaypassword
    },
    data() {
        return {
            password: '',
            password2: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        document.title = '密码设置';
        next();
    },
    mounted() {
        //document.querySelector('#pwd1 input').focus();
    },
    methods: {
        check1(event) {
        },
        nextfocus(){
        },
        check2(event) {
        },
        showToast(str) {
            this.toastMsg = str;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/func';
.page-setpaypassword{
    text-align:center;
    p{
        font-size:r(16);
        line-height:r(28);
        margin-top:r(50)
    }
}
</style>
