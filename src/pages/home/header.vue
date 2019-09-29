<template>
    <me-navbar class="header" v-show="visible">
        <i class="iconfont icon-scan" slot="left"></i>
        <me-searchbox
            placeholder="开学季有礼，好货5折起"
            slot="center"
            @query="getQuery"
            >
        </me-searchbox>
        <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
    import MeNavbar from 'base/navbar';
    import MeSearchbox from 'base/searchbox';

    export default{
        name: 'HomeHeader',
        components: {
            MeNavbar,
            MeSearchbox
        },
        data() {
            return {
                visible: true
            };
        },
        methods: {
            show() {
                this.visible = true;
            },
            hide() {
                this.visible = false;
            },
            getQuery(query) {
                console.log(query);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .header{
        &.mine-navbar{
            background-color: transparent;
            transition: background-color 0.5s;
            z-index: $navbar-z-index;
            position: absolute;
        }

        &.header-transition{
            background-color: $header-bgc-translucent;
        }

        .iconfont{
            color: $icon-color-default;
            font-size: $icon-font-size;
        }
    }
</style>
