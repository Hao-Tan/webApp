<template>
    <me-navbar class='header' title="商品详情">
        <i class="iconfont icon-back" slot="left" @click="back"></i>
        <router-link to="/cart" slot="right">
            <i class="iconfont icon-cart"></i>
        </router-link>
    </me-navbar>
</template>

<script>
    import MeNavbar from 'base/navbar';
    import {getProductDetail} from 'api/product';

    export default{
        name: 'ProductHeader',
        components: {
            MeNavbar
        },
        methods: {
            back() {
                this.$router.back();
            }
        },
        created() {
            console.log(this.$route);
            console.log(getProductDetail(this.$route.params.id));
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .header{
        &.mine-navbar{
            background-color: $header-bgc-translucent;
            color: #fff;
        }

        .iconfont{
            color: $icon-color-default;
            font-size: $icon-font-size;
        }
    }
</style>
