<template>
    <label class="copaypassword-mod">
        <span v-for="key in size" v-html="password[key-1]?'●':''" :class="(key==current+1)&&focused?'active':''"></span>

        <input v-if="type=='text'"  type="text" @input="coInput" @focus="onFocus" @blur="onBlur" :maxlength="size" :size="size" v-model="password" />
        <input v-else type="tel" @input="coInput" :maxlength="size" @focus="onFocus" @blur="onBlur" :size="size" v-model="password" />
    </label>
</template>
<style lang="scss" scope>
@import '../assets/style/func.scss';
.copaypassword-mod {
    display:inline-block;
    white-space: nowrap;
    >input {
        margin: 0;
        padding: 0;
        width: 1px;
        opacity: 0;
        height: 1px;
        border: none;
        font-size: 12px;
    }
    >span {
        width: r(40);
        height: r(40);
        line-height: r(40);
        font-size: r(20);
        display: inline-block;
        background: #fff;
        border: 2px solid #eee;
        text-align: center;
        vertical-align: top;
        overflow:hidden;
        margin-right:-1px;
        position:relative;
        &.active{
            border:2px solid #12C286;
            border-radius:3px;
            z-index:1;
        }
    }
}
</style>
<script>
export default {
    name: 'copaypassword',
    created() {},
    components: {},
    data() {
        return {
            password: '',
            focused : false
        }
    },
    props: {
        size: {
            type: Number,
            default: 6
        },
        type : {
            type : String,
            default : 'tel'
        }
    },
    methods: {
        coInput() {
            this.$emit('input', this.password);
        },
        cleanAll() {
            this.password = '';
        },
        onFocus() {
            this.focused = true;
            this.$emit('onfocus');
        },
        onBlur(){
            this.focused = false;
        }
    },
    computed: {
        current(){
            return this.password.length
        }
    }
}
</script>
