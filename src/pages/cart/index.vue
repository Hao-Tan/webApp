<template>
    <div class="cart">
        <div class="g-header-container">
            <cart-header></cart-header>
        </div>
        <cart-list class="cart-container"></cart-list>
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
            width: 100%;
            height: 100%;
        }
    }
</style>
