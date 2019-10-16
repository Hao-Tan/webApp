<template>
    <div class="briefinfo">
        <me-navbar class="briefinfo-sold">
            <span class="briefinfo-sold-price" slot="left">
                ￥<span class="briefinfo-sold-price-num">{{productDetail.priceText}}</span>
            </span>
            <span class="briefinfo-sold-soldCount" slot="right">{{productDetail.soldCount}}件已售</span>
        </me-navbar>

        <div class="briefinfo-skuname">
            {{productDetail.title}}
        </div>
        <me-navbar class="briefinfo-delivery">
            <span class="briefinfo-delivery-postage" slot="left">{{productDetail.postage}}</span>
            <span class="briefinfo-delivery-sellcount" slot="center">月销量 {{productDetail.sellCount}}件</span>
            <span class="briefinfo-delivery-from" slot="right">{{productDetail.from}}</span>
        </me-navbar>
    </div>
</template>

<script>
    import MeNavbar from 'base/navbar';

    export default {
        name: 'ProductBriefinfo',
        props: {
            productDetail: Object
        },
        components: {
            MeNavbar
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    $font-size-price: 20px;

    .briefinfo{
        font-size: $font-size-base;

        &-sold{
            background-image: linear-gradient(to right, #ef338f, #ef364a);
            color: #fff;

            &-price-num{
                font-size: $font-size-price;
            }

            &-soldCount{
                background-color: #cc2e46;
                border-radius: 5px;
                padding: 5px 10px;
            }
        }

        &-skuname{
            @include multiline-ellipsis();
            font-size: $font-size-l;
            line-height: 1.5;
            padding: 10px;
            color: #333;
            background-color: #fff;
        }

        &-delivery{
            height: 30px;
            color: #999;

            &-sellcount{
                text-align: center;
                width: 100%;
                display: inline-block;
            }
        }
    }
</style>
