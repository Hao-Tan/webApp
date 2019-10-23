<template>
    <div class="cart">
        <div class="g-header-container">
            <cart-header></cart-header>
        </div>
        <cart-list class="cart-container"></cart-list>
        <div class="cart-balance">
            <span class="cart-total">合计：<span class="cart-total-text">￥{{(this.$store.getters.totalPrice).toFixed(2)}}</span></span>
            <div class="cart-pay">结算</div>
        </div>
    </div>
</template>

<script>
    import CartHeader from './header';
    import CartList from './list';
    export default{
        name: 'Cart',
        components: {
            CartHeader,
            CartList
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .cart{
        height: 100%;

        &-container{
            padding-top: $navbar-height;
            padding-bottom: 40px;
            width: 100%;
            height: 100%;
        }

        &-balance{
            position: absolute;
            bottom: $tabbar-height;
            z-index: $tabbar-z-index+10;
            width: 100%;
            height: 40px;
            @include flex-center();
            justify-content: flex-end;
            background-color: #fff;
            border-top: 1px solid $bgc-theme;

            .cart-total-text{
                color: rgb(222, 24, 27);
                font-size: 16px;
            }

            .cart-pay{
                background-color: rgb(222, 24, 27);
                color: #fff;
                width: 60px;
                height: 30px;
                @include flex-center();
                margin: 0 10px;
                border-radius: 15px;
            }
        }
    }
</style>
