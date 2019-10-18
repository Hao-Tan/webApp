<template>
    <me-navbar class='header' title="购物车">
        <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
    import MeNavbar from 'base/navbar';

    export default{
        name: 'CartHeader',
        components: {
            MeNavbar
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .iconfont{
        color: $icon-color;
        font-size: $icon-font-size;
    }
</style>
