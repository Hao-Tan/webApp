<template>
    <li class="item">
        <!-- 左侧按钮 -->
        <div class="item-check">
            <i class="iconfont">&#xe6ba;</i>
        </div>
        
        <!-- 商品图片 -->
        <div class="item-img">
            <img src="http://gtms03.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg">
        </div>

        <!-- 右侧信息栏 -->
        <div class="item-info">
            <div class="item-info-title">apple iPad 平板电脑apple iPad 平板电脑apple iPad 平板电脑apple iPad 平板电脑apple iPad 平板电脑</div>
            <div class="item-info-more">
                <div class="item-info-price">
                    ￥<span class="item-info-price-text">2999</span>
                </div>
                <cart-amount :amount.sync="itemInfo.amount"></cart-amount>
            </div>
        </div>

        <div class="item-remove">
            删除
        </div>
    </li>
</template>

<script>
    import CartAmount from './amount';
    export default {
        name: 'CartItem',
        components: {
            CartAmount
        },
        props: {
            itemInfo: {
                type: Object,
                default: () =>{
                    return {
                        id: 1,
                        name: '',
                        price: '',
                        pic: '',
                        amount: 1
                    }
                }
            }
        },
        created(){
            console.log(this.itemInfo)
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .item{
            border-top: 1px solid $bgc-theme;
            border-bottom: 1px solid $bgc-theme;
            padding: 15px 10px;
            display: flex;
            flex-wrap: wrap;

            &:last-child{
                border-bottom: none;
            }

            &-check{
                width: 10%;
                @include flex-center(column);

                .iconfont{
                    font-size:$icon-font-size;
                    color: #ddd;

                }
            }

            &-img{
                width: 18%;
                padding-top: 18%;
                margin-left: 2%;
                position: relative;

                & img{
                    width: 100%;
                    position: absolute;
                    top: 0;
                }
            }

            &-info{
                display: flex;
                flex-direction: column;
                width: 70%;
                padding-left: 10px;

                &-title{
                    width: 100%;
                    font-weight: bold;
                    line-height: 1.5;
                    height: 3em;
                    @include multiline-ellipsis(2);
                }

                &-more{
                    margin-top: 20px;
                    width: 100%;
                    @include flex-between();
                }

                &-price{
                    color: rgb(222, 24, 27);

                    &-text{
                        font-size: 22px;
                    }
                }
            }

            &-remove{
                width: 100%;
                text-align: right;
                padding: 20px 10px 0 0;
            }
        }
</style>
