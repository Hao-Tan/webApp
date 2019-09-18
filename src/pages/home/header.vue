<template>
    <me-navbar class="header" title="jqjqjqjq">
        <i class="iconfont icon-scan" slot="left"></i>
        <div slot="center">搜索框</div>
        <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
    import MeNavbar from 'base/navbar';

    export default{
        name: 'HomeHeader',
        components: {
            MeNavbar
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .header{
        background-color: rgb(225,96,96) !important;

        .iconfont{
            color: $icon-color-default;
            font-size: $icon-font-size;
        }
    }
</style>
