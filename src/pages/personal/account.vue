<template>
    <div class="account">
        <p class="account-pic">
            <i class="iconfont icon-user"></i>
        </p>
        <p class="account-sign">
            <a href="javascirpt:;" class="account-sign-text">注册</a>
            <a href="javascirpt:;" class="account-sign-text">登录</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'PersonalAccount'
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .account{
        background-color: $header-bgc;
        @include flex-center(column);
        padding: 20px 0 15px;
        color: #fff;

        &-pic{
            border-radius: 50%;
            background-color: #fff;
            width: 60px;
            height: 60px;
            @include flex-center();

            .iconfont{
                color: $header-bgc;
                font-size: 30px;
            }
        }

        &-sign{
            margin-top: 10px;
            width: 66%;
            height: 30px;
            @include flex-center();
            position: relative;

            &-text{
                flex: 1;
                @include flex-center();
                font-size: 20px;
                font-weight: bold;
                color: #fff;
            }

            &:before{
                content: '';
                background-color: #fff;
                width: 1px;
                height: 80%;
                position: absolute;
                left: 50%;
                top: 10%;
            }
        }
    }
</style>
