<template>
    <me-navbar class='header'>
        <me-searchbox
            slot="center"
            placeholder="开学季有礼，好货5折起"
            fake
            @click.native="goToSearch"
            ></me-searchbox>
        <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
    import MeNavbar from 'base/navbar';
    import MeSearchbox from 'base/searchbox';

    export default {
        name: 'CategoryHeader',
        components: {
            MeNavbar,
            MeSearchbox
        },
        methods: {
            goToSearch() {
                this.$router.push('./search');
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "~assets/scss/mixins";

    .header {
        &.mine-navbar {
            background-color: $header-bgc-translucent;
        }

        .iconfont {
            color: $icon-color-default;
            font-size: $icon-font-size;
        }
    }
</style>
