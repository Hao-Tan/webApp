<template>
    <div class="home">
        <router-view></router-view>

        <header class="g-header-caontainer">
            <home-header></home-header>
        </header>

        <me-scroll :data="recommends">
            <home-slider></home-slider>
            <home-nav></home-nav>
            <home-recommend @loaded="getRecommends"></home-recommend>
        </me-scroll>

        <div class="g-backtop-container"></div>
    </div>
</template>

<script>
    import HomeHeader from './header';
    import HomeSlider from './slider';
    import MeScroll from 'base/scroll';
    import HomeNav from './nav';
    import HomeRecommend from './recommend';

    export default{
        name: 'Home',
        components: {
            HomeHeader,
            HomeSlider,
            MeScroll,
            HomeNav,
            HomeRecommend
        },
        data() {
            return {
                recommends: []
            };
        },
        methods: {
            updateScroll() {

            },
            getRecommends(recommends) {
                this.recommends = recommends;
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
