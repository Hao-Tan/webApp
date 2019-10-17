<template>
    <div class="product">
        <me-loading v-if="!res.sliders"></me-loading>
        <div class="product-container" v-else>
            <div class="g-header-container">
                <product-header></product-header>
            </div>
            <me-scroll>
                <product-slider :sliders="res.sliders"></product-slider>
                <product-briefinfo :productDetail="res.content"></product-briefinfo>
                <product-rate :rate="res.content.rate"></product-rate>
                <product-seller :seller="res.content.seller"></product-seller>
            </me-scroll>
            <product-footer></product-footer>
        </div>
    </div>
</template>

<script>
    import ProductHeader from './header';
    import ProductSlider from './slider';
    import ProductBriefinfo from './briefinfo';
    import ProductRate from './rate';
    import ProductSeller from './seller';
    import ProductFooter from './footer';
    import MeScroll from 'base/scroll';
    import MeLoading from 'base/loading';
    import {getProductDetail} from 'api/product';

    export default{
        name: 'Product',
        components: {
            ProductHeader,
            ProductSlider,
            ProductBriefinfo,
            ProductRate,
            ProductSeller,
            ProductFooter,
            MeLoading,
            MeScroll
        },
        data() {
            return {
                res: {}
            };
        },
        created() {
            getProductDetail(this.$route.params.id).then(res => {
                this.res = res;
            });
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

        &-container{
            height: 100%;
            padding-bottom: $tabbar-height;
        }
    }

    .rate{
        margin: 10px 0;
    }
</style>
