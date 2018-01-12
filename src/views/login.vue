<template>
    <div class="blank">
        <div class="content">
            <div class="login-area">
                <div class="login-header">
                    <div class="code-login">
                        密码登录
                    </div>
                    <div class="verify-login">
                        验证码登录
                    </div>
                </div>
                <div class="login-section">
                    <div class="login-input" :class="{'active': focus[0]}">
                        <input type="tel" class="phone" maxlength="13" placeholder="手机号" @focus="active(0)" @blur="phoneBlur()" v-model="accounts">
                        <div v-show="isclear" @click="clear()" class="icon-input-area">
                            <div class="icon-close"></div>
                        </div>
                    </div>
                    <div class="login-input" :class="{'active': focus[1]}">
                        <input id="pwd" type="password" maxlength="20" class="code" placeholder="密码" @focus="active(1)" @blur="codeBlur()" v-model="pwd">
                        <div @click="show()" class="icon-input-area">
                            <div :class="{'icon-no-see': !isShow, 'icon-see': isShow}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div  @click="confirm()" style="margin-top:35px;" class="loginBtn">登录</div>
            <p class="text tc mt20 baseColor">忘记密码</p>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            accounts: '',
            account: '',
            pwd: '',
            otpType: 0,
            reg: {
                account: /^1\d{10}$/,
                pwd: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
            },
            focus: [false, false],
            isShow: false,
            isWechatBind: ''
        }
    },
    watch: {
        accounts (val) {
            this.account = val.split(' ').join('')
            let length = this.account.length
            if (length > 3 && length < 8) {
                this.accounts = this.account.substring(0, 3) + ' ' + this.account.substring(3, length)
            }
            if (length >= 8) {
                this.accounts = this.account.substring(0, 3) + ' ' + this.account.substring(3, 7) + ' ' + this.account.substring(7, length)
            }
        }
    },
    computed: {
        accountValid () {
            return this.account && this.reg.account.test(this.account.trim())
        },
        pwdValid () {
            return this.pwd && this.reg.pwd.test(this.pwd.trim())
        },
        isclear () {
            return this.accounts.length > 0
        }
    },
    components: {
    },
    mounted () {
    },
    methods: {
        show () {
            this.isShow = !this.isShow
            let type = this.isShow ? 'text' : 'password'
            document.getElementById('pwd').type = type
        },
        confirm () {
            this.$router.push("usercenter");
        },
        clear () {
            this.accounts = ''
        },
        active (index) {
            this.focus = [false, false]
            this.focus[index] = true
        },
        phoneBlur () {
            if (this.accountValid) {
            }
            this.focus = [false, false]
        },
        codeBlur () {
            this.focus = [false, false]
        },
        login () {
        },
        queryUserInfo () {
        },
        bindWeChatAccount (openId, appId) {
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/func';
.blank{
    width:100%;
    height:100%;
    background:#fff;
    overflow:hidden;
}
.content{
    margin:0 r(28);
}
.baseColor {
    color: $color;
}
.loginBtn{
    width:100%;
    height: r(45);
    line-height: r(45);
    border-radius: r(3);
    font-size: r(16);
    text-align:center;
    background:rgb(217, 217, 217);
    color:#fff;
}
.login-area {
    position: relative;
    margin-top: r(24);
    .login-header {
        position: relative;
        height: r(28);
        .code-login {
            position: absolute;
            left: 0;
            top: 0;
            font-size: r(18);
            font-weight: 600;
            line-height: r(28);
        }
        .verify-login {
            position: absolute;
            right: 0;
            bottom: 0;
            font-weight: 600;
            line-height: r(20);
            @extend .baseColor;
        }
    }
    .login-section {
        .login-input {
            position: relative;
            height: r(65);
            &:after {
                // border-bottom: 1px solid $greyColor;
                content: " ";
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 1px;
                border-bottom: 1px solid #E7E7E7;;
                color: #E7E7E7;;
                transform-origin: 0 100%;
                transform: scaleY(0.5);
                -webkit-transform-origin: 0 100%;
                -webkit-transform: scaleY(0.5);
            }
            &.active:after {
                border-bottom: 1px solid $color;
            }
            input {
                position: absolute;
                width: 85%;
                left: r(5);
                bottom: r(2);
                height: r(30);
                line-height: r(26.5);
                color: rgb(51, 51, 51);
                font-size: r(18);
                caret-color: $color;
                font-size:r(16);
            }
            .get-code {
                position: absolute;
                right: r(5);
                height: r(20);
                bottom: r(14);
                color: #a7a7a7;;
                &.baseColor {
                    color: $color;
                }
            }
            .icon-input-area {
                position: absolute;
                right: 0;
                top: r(30);
                width: r(30);
                bottom: 0;
                .icon-close {
                    position: absolute;
                    width: r(12);
                    height: r(12);
                    right: r(5);
                    bottom: r(10);
                }
                .icon-see, .icon-no-see {
                    position: absolute;
                    width: r(18);
                    height: r(13);
                    right: r(5);
                    bottom: r(10);
                }
            }
        }
    }
}
</style>
