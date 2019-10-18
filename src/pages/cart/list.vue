<template>
    <div>
        <me-loading class="list-loading" v-if="!cartItems.length"></me-loading>
        <me-scroll v-else class="list-content">
            <div class="list-action">
                <div class="address">
                    <i class="iconfont icon-dizhi"></i>
                    <span class="address-text">朝阳区管庄</span>
                </div>
                <div class="edit">编辑商品</div>
            </div>
            <ul class="list-items">
                <cart-item></cart-item>
            </ul>
        </me-scroll>
    </div>
</template>

<script>
    import MeLoading from 'base/loading';
    import MeScroll from 'base/scroll';
    import CartItem from './item';
    export default {
        name: 'CartList',
        components: {
            MeLoading,
            MeScroll,
            CartItem
        },
        data() {
            return {
                cartItems: [1]
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .list{

        &-loading{
            width: 100%;
            height: 100%;
        }

        &-content{
            background-color: #fff;
        }

        &-action{
            @include flex-between();
            padding: 15px 10px;
            border-top: 1px solid $bgc-theme;

            .edit{
                color: $link-active-color;
            }
        }
    }
</style>
