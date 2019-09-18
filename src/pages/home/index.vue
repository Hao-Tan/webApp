<template>
    <div class="home">
        <router-view></router-view>
        <header class="g-header-caontainer">
            <home-header></home-header>
        </header>
        <div></div>
        <div class="g-backtop-container"></div>
    </div>
</template>

<script>
    import HomeHeader from './header';

    export default{
        name: 'Home',
        components: {
            HomeHeader
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
