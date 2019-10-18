<template>
    <li class="item">
        <div class="item-info">
            <span class="item-check">
                <i class="iconfont">&#xe6ba;</i>
            </span>
            <span class="item-img">
                <img src="http://gtms03.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg">
            </span>
            <span class="item-title">apple iPad 平板电脑</span>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'Cart-item'
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .item{
            border-top: 1px solid $bgc-theme;
            border-bottom: 1px solid $bgc-theme;
            padding: 15px 10px;

            &:last-child{
                border-bottom: none;
            }

            &-info{
                display: flex;
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
                width: 20%;
                padding-top: 100%;
                position: relative;

                & img{
                    width: 100%;
                    position: absolute;
                    top: 0;
                }
            }
        }
</style>
