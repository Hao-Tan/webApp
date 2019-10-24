<template>
    <li class="item" @click="toDetail">
        <!-- 左侧按钮 -->
        <div class="item-check" @click.stop="chooseItem">
            <i class="iconfont" :class="{chosen: itemInfo.chosen}">&#xe6ba;</i>
        </div>

        <!-- 商品图片 -->
        <div class="item-img">
            <img :src="itemInfo.pic">
        </div>

        <!-- 右侧信息栏 -->
        <div class="item-info">
            <div class="item-info-title">{{itemInfo.name}}</div>
            <div class="item-info-more">
                <div class="item-info-price">
                    ￥<span class="item-info-price-text">{{itemInfo.price}}</span>
                </div>
                <cart-amount :amount="itemInfo.amount" @update="updateAmount"></cart-amount>
            </div>
        </div>

        <div class="item-remove">
            <span class="item-remove-text" @click.stop="removeItem">删除</span>
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
                default: () => {
                    return {
                        id: 0,
                        name: '',
                        price: 0,
                        pic: '',
                        amount: 1,
                        chosen: false
                    };
                }
            }
        },
        methods: {
            // 更新商品的数量
            updateAmount(n) {
                this.$store.commit('changeAmount', { itemId: this.itemInfo.id, newAmount: n });
            },

            // 移除商品
            removeItem() {
                this.$store.commit('removeCartItem', { itemId: this.itemInfo.id });
            },

            // 跳转至商品的详情页
            toDetail() {
                this.$router.push({name: 'home-product', params: {id: this.itemInfo.id}});
            },

            // 选中当前商品，会计算当前选中商品的总价
            chooseItem() {
                this.$store.commit('chooseCartItem', this.itemInfo);
            }
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

                    &.chosen{
                        color: rgb(222, 24, 27);
                    }
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
