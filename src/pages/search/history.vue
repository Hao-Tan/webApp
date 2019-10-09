<template>
    <div class="history" v-if="history.length">
        <h4 class="history-title">历史搜索</h4>
        <transition-group class="g-list" name="list" tag="ul">
            <li
                class="g-list-item"
                v-for="item in history"
                :key="item"
                @click="$_selectItem(item)">
                <span class="g-list-item-text">{{item}}</span>
                <i class="iconfont icon-delete"
                @click.stop="removeItem(item)"></i>
            </li>
        </transition-group>
        <a href="javascript:;" class="history-btn" @click="showConfirm">
            <i class="iconfont icon-clear"></i>
            <span class="history-btn-text">清空历史搜索</span>
        </a>
    </div>
</template>

<script>
    import storage from 'assets/js/storage';
    import {SEARCH_HISTORY_KEYWORD_KEY} from './config';
    import {searchMixin} from 'assets/js/mixins';
    import _ from 'lodash';

    export default{
        name: 'searchHistory',
        mixins: [searchMixin],
        data() {
            return {
                history: []
            };
        },
        created() {
            this.getHistory();
        },
        methods: {
            getHistory() {
                this.history = storage.get(SEARCH_HISTORY_KEYWORD_KEY, []);
            },
            removeItem(item) {
                this.history = _.remove(this.history, (value) => {
                    return value !== item;
                });

                storage.set(SEARCH_HISTORY_KEYWORD_KEY, this.history);
                this.$emit('itemRemoved');
            },
            showConfirm() {
                this.$emit('showConfirm');
            },
            removeAll() {
                this.history = [];
                storage.set(SEARCH_HISTORY_KEYWORD_KEY, this.history);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .history{
        background-color: #fff;
        border-bottom: 1px solid $border-color;
        margin: 10px 0;
        padding-bottom: 30px;

        &-title{
            padding-left: 10px;
            font-size: $font-size-l;
            font-weight: bold;
            height: 34px;
            line-height: 34px;
        }

        &-btn{
            border: 1.5px solid $border-color;
            display: flex;
            @include flex-center();
            width: 300px;
            padding: 10px;
            border-radius: 5px;
            position: relative;
            left: 50%;
            margin: 20px 0 0 -150px;

            .iconfont{
                padding-right: 10px;
            }
        }

        .iconfont{
            color: #666;
            font-size: $icon-font-size-sm;
        }
    }

    .list{
        &-enter-active,
        &-leave-active{
            transition: transform 0.3s;
        }

        &-enter,
        &-leave-to{
            transform: translate(100%);
        }
    }
</style>
