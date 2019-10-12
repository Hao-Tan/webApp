<template>
    <transition name="search">
        <div class="search">
            <header class="g-header-container">
                <search-header
                    @back="back"
                    @query="query"
                ></search-header>
            </header>
            <div class="g-content-container">
                <me-scroll ref="scroll" v-if="!queryWord">
                    <search-hot
                        @wordsLoaded="scrollUpdate"
                    ></search-hot>
                    <search-history
                        @itemRemoved="scrollUpdate"
                        @showConfirm="showConfirm"
                        ref="history"
                    ></search-history>
                </me-scroll>

                <search-result v-else :queryWord="queryWord"></search-result>

                <me-confirm
                    msg="确定要清空历史搜索吗？"
                    ref="confirm"
                    @ok="removeAll"
                    @cancel="refreshHistory"
                    ></me-confirm>
            </div>
        </div>
    </transition>
</template>

<script>
    import SearchHeader from './header';
    import SearchHot from './hot';
    import SearchHistory from './history';
    import SearchResult from './result';
    import MeScroll from 'base/scroll';
    import MeConfirm from 'base/confirm';

    export default{
        name: 'Search',
        components: {
            SearchHeader,
            SearchHot,
            SearchHistory,
            SearchResult,
            MeScroll,
            MeConfirm
        },
        data() {
            return {
                queryWord: ''
            };
        },
        methods: {
            back() {
                this.$router.back();
            },
            query(query) {
                this.queryWord = query;
            },
            scrollUpdate() {
                this.$refs.scroll.scrollbarUpdate();
            },
            showConfirm() {
                this.$refs.confirm.show();
            },
            removeAll() {
                this.$refs.history.removeAll();
            },
            refreshHistory() {
                this.$refs.history.refreshHistory();
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .search{
        position: absolute;
        z-index: $search-z-index;
        background-color: $bgc-theme;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        .g-content-container{
            padding-top: $navbar-height;
        }
    }

    .search-enter-active,
    .search-leave-active{
        transition: all 0.3s;
    }

    .search-enter,
    .search-leave-to{
        transform: translate(100%);
    }

</style>
