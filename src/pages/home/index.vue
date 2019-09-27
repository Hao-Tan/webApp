<template>
    <div class="home">
        <router-view></router-view>

        <header class="g-header-container">
            <home-header :class="{'header-transition': isHeaderTransition}" ref="header"></home-header>
        </header>

        <me-scroll
            :data="recommends"
            :pullDown="true"
            :pullUp="true"
            @pull-down="pullToRefresh"
            @pull-up="pullToLoad"
            @scroll-end="homeScrollEnd"
            @scroll="scroll"
            @pull-down-transition-end="pullDownTransitionEnd"
            ref="scroll"
            >
            <home-slider ref="homeSlider"></home-slider>
            <home-nav></home-nav>
            <home-recommend @loaded="getRecommends" ref="homeRecommend"></home-recommend>
        </me-scroll>

        <div class="g-backtop-container">
            <home-backtop
                :visible="isBackTopVisible"
                @backTop="homeBackTop"
            ></home-backtop>
        </div>
    </div>
</template>

<script>
    import HomeHeader from './header';
    import HomeSlider from './slider';
    import MeScroll from 'base/scroll';
    import HomeNav from './nav';
    import HomeRecommend from './recommend';
    import HomeBacktop from 'base/backtop';
    import {HEADER_TRANSITION_HEIGHT} from './config';

    export default{
        name: 'Home',
        components: {
            HomeHeader,
            HomeSlider,
            MeScroll,
            HomeNav,
            HomeRecommend,
            HomeBacktop
        },
        data() {
            return {
                recommends: [],
                isBackTopVisible: false,
                isHeaderTransition: false
            };
        },
        methods: {
            homeBackTop() {
                this.$refs.scroll && this.$refs.scroll.scrollToTop();
            },

            homeScrollEnd(translate, swiper, pullingStatus) {
                this.isBackTopVisible = translate < 0 && -translate > swiper.height;
                !pullingStatus && this.changeHeaderStatus(translate);
            },

            getRecommends(recommends) {
                this.recommends = recommends;
            },

            pullToRefresh(callback) {
                this.$refs.homeSlider.update().then(callback);
            },

            pullToLoad(callback) {
                this.$refs.homeRecommend.update().then(callback).catch(err => {
                    if (err) {
                        console.log(err);
                    }
                    callback();
                });
            },

            // 滚动事件
            scroll(translate) {
                this.changeHeaderStatus(translate);
            },

            pullDownTransitionEnd() {
                this.$refs.header.show();
            },

            changeHeaderStatus(translate) {
                if (translate > 0) {
                    this.$refs.header.hide();
                    return;
                }

                this.$refs.header.show();

                this.isHeaderTransition = translate <= HEADER_TRANSITION_HEIGHT;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .home{
        background-color: $bgc-theme;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
</style>
