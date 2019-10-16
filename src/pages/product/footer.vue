<template>
    <div class="g-footer-container">
        <div class="action-bar">
            <a href="javascript:;" class="action-bar-cell">
                <i class="iconfont icon-shop"></i>
                <span>店铺</span>
            </a>
            <a href="javascript:;" class="action-bar-cell">
                <i class="iconfont icon-service"></i>
                <span>客服</span>
            </a>
            <a href="javascript:;" class="action-bar-cell">
                <i class="iconfont icon-collect"></i>
                <span>收藏</span>
            </a>
            <a href="javascript:;" class="cart">加入购物车</a>
            <a href="javascript:;" class="buy">马上抢</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductFooter'
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .action-bar{
        height: $tabbar-height;
        background-color: #fff;
        display: flex;

        &-cell{
            @include flex-center(column);
            width: 15%;
        }

        .cart,
        .buy{
            flex: 1;
            @include flex-center();
            color: #fff;
            font-size: $font-size-l;
        }

        .cart{
            background-color: #ff9500;
        }

        .buy{
            background-color: #ff0036;
        }

        .iconfont{
            font-size: $icon-font-size;
            margin-bottom: 3px;
        }
    }
</style>
