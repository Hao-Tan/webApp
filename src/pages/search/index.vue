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
                <me-scroll ref="scroll">
                    <search-hot
                        @wordsLoaded="scorllUpdate"
                    ></search-hot>
                    <search-history></search-history>
                </me-scroll>
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

    export default{
        name: 'Search',
        components: {
            SearchHeader,
            SearchHot,
            SearchHistory,
            SearchResult,
            MeScroll
        },
        methods: {
            back() {
                this.$router.back();
            },
            query(query) {
                console.log(query);
            },
            scorllUpdate() {
                this.$refs.scroll.scrollbarUpdate();
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
