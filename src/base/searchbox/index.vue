<template>
    <div class="mine-searchbox-wrapper">
        <i class="iconfont icon-search"></i>

        <div
            class="mine-searchbox-fake"
            v-if="fake">{{placeholder}}
        </div>

        <input
            type="text"
            class="mine-searchbox"
            title="搜索框"
            :placeholder="placeholder"
            ref="input"
            v-if="!fake"
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
    import {DELAYTIME} from './config';

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
            },
            fake: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            query: _.debounce(function() {
                this.$emit('query', this.query);
            }, DELAYTIME)
        },
        mounted() {
            this.clear();
        },
        methods: {
            focus() {
                this.$refs.input.focus();
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
    @import '~assets/scss/mixins';

    $search-box-height: 30px;

    .mine-searchbox-wrapper{
        display: flex;
        align-items: center;
        width: 100%;
        height: $search-box-height;
        padding: 0 7px;
        background-color: #fff;
        border-radius: $search-box-height / 2;
    }

    .mine-searchbox,
    .mine-searchbox-fake{
        flex: 1;
        border: none;
        background: none;
        line-height: 1.5;
        color: #666;
        margin: 0 6px;
    }

    .iconfont{
        color: $icon-color;
        font-size: $icon-font-size-sm;
        font-weight: bold;
    }
</style>
