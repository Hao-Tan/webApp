<template>
    <div class="seller">
        <div class="seller-title">
            <img class="seller-title-logo" :src="seller.shopIcon"/>
            <div class="seller-title-shop">
                <p class="seller-title-shop-name">{{seller.shopName}}</p>
                <img class="seller-title-shop-plat" :src="seller.creditLevelIcon"/>
            </div>
        </div>
        <div class="seller-evaluates">
            <span class="seller-evaluate" v-for="evaluate in seller.evaluates" :key="evaluate.title">{{evaluate.title}} {{evaluate.score}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductSeller',
        props: {
            seller: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .seller{
        background-color: #fff;
        padding: 10px;

        &-title{
            @include flex-center();
            justify-content: flex-start;
            height: 60px;

            &-logo{
                width: 60px;
                height: 60px;
                border: 1px solid #ccc;
                margin-right: 10px;
            }

            &-shop{
                @include flex-center(column);
                align-items: flex-start;
                font-size: 15px;
                color: #333;

                &-plat{
                    height: 14px;
                    margin-top: 5px;
                }
            }
        }

        &-evaluates{
            display: flex;
            width: 100%;
            margin: 20px 0;
        }

        &-evaluate{
            flex: 1;
            text-align: center;
        }
    }
</style>
