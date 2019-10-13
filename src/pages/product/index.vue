<template>
    <div class="product">
        <div class="g-header-contianer">
            <product-header></product-header>
        </div>
    </div>
</template>

<script>
    import ProductHeader from './header';

    export default{
        name: 'Product',
        components: {
            ProductHeader
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .product{
        background-color: $bgc-theme;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: $product-z-index;
        width: 100%;
        height: 100%;
    }
</style>
