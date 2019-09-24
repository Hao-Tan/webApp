<template>
    <div class="product">
        Product
    </div>
</template>

<script>
    export default{
        name: 'Product'
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
