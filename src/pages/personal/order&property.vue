<template>
    <div class="order-and-property">
        <div class="order">
            <div class="g-line">
                <div class="g-line-title">
                    <i class="iconfont icon-dingdan"></i>
                    <span class="g-line-title-text">我的订单</span>
                </div>
                <div class="g-line-enter">
                    <span class="attch-info">查看我的全部订单</span>
                    <i class="iconfont icon-back"></i>
                </div>
            </div>
            <div class="order-items">
                <div class="order-item">
                    <i class="iconfont icon-daifukuan"></i>
                    <span class="order-item-text">待付款</span>
                </div>
                <div class="order-item">
                    <i class="iconfont icon-daishouhuo"></i>
                    <span class="order-item-text">待收货</span>
                </div>
                <div class="order-item">
                    <i class="iconfont icon-daipingjia"></i>
                    <span class="order-item-text">待评价</span>
                </div>
                <div class="order-item">
                    <i class="iconfont icon-tuikuan"></i>
                    <span class="order-item-text">退货/退款</span>
                </div>
            </div>
        </div>

        <div class="property">
            <div class="g-line">
                <div class="g-line-title">
                    <i class="iconfont icon-iconfontwodezichan"></i>
                    <span class="g-line-title-text">我的资产</span>
                </div>
                <div class="g-line-enter">
                    <i class="iconfont icon-back"></i>
                </div>
            </div>
            <div class="property-items">
                <span class="property-item">现金券</span>
                <span class="property-item">红包</span>
                <span class="property-item">余额</span>
                <span class="property-item">礼品卡</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'PersonalOrderAndProperty'
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .order,
    .property{
        background-color: #fff;
        margin: 20px 0;

        &-items{
            width: 100%;
            display: flex;
        }

        &-item{
            flex: 1;
            @include flex-center(column);
            padding: 15px 0 10px;
            color: #666;
            font-size: 14px;

            .iconfont{
                margin-bottom: 10px;
                font-size: $icon-font-size+4;
            }
        }
    }
</style>
