<template>
    <div class="hot">
        <h4 class="hot-title">热门搜索</h4>
        <div class="loading-container" v-if="!keyWords.length">
            <me-loading :inline="false"></me-loading>
        </div>
        <ul class="hot-list" v-else>
            <li
                class="hot-item"
                v-for="(word, index) in keyWords"
                :key="index"
                @click="$_selectItem(word.hotWord)"
            >{{word.hotWord}}</li>
        </ul>
    </div>
</template>

<script>
    import MeLoading from 'base/loading';
    import {getSearchHotKeyWords} from 'api/search';
    import {searchMixin} from 'assets/js/mixins';

    export default{
        name: 'searchHot',
        components: {
            MeLoading
        },
        mixins: [searchMixin],
        data() {
            return {
                keyWords: []
            };
        },
        created() {
            this.getHotKeyWords().then(() => {
                this.$emit('wordsLoaded');
            });
        },
        methods: {
            getHotKeyWords() {
                return getSearchHotKeyWords().then(res => {
                    return new Promise(resolve => {
                        if (res) {
                            this.keyWords = res;
                            resolve();
                        }
                    });
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .hot{
        padding-left: 10px;
        background-color: #fff;
        border-bottom: 1px solid $border-color;
        margin: 2px 0 10px;

        &-title{
            font-size: $font-size-l;
            font-weight: bold;
            height: 34px;
            line-height: 34px;
        }

        &-list {
            display: flex;
            flex-wrap: wrap;
        }

        &-item {
            padding: 8px;
            background-color: #f0f2f5;
            border-radius: 4px;
            margin: 0 10px 10px 0;
            color: #686868;
        }

        .loading-container {
            padding: 10px 0;
      }
    }
</style>
