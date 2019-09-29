<template>
    <div class="mine-searchbox-wrapper">
        <i class="iconfont icon-search"></i>

        <input
            type="text"
            class="mine-search-box"
            title="搜索框"
            :placeholder="placeholder"
            ref="input"
            v-model="query"
        >

        <i
            class="iconfont icon-close"
            v-show="!!query"
            @click="reset"
        ></i>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default{
        name: 'MeSearchbox',
        data() {
            return {
                query: ''
            };
        },
        props: {
            placeholder: {
                type: String
            }
        },
        watch: {
            query: _.debounce(function() { console.log(this); }, 200)
        },
        methods: {
            focus() {
                this.$refs.input && this.$refs.input.focus();
            },
            clear() {
                this.query = '';
            },
            reset() {
                this.clear();
                this.focus();
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
