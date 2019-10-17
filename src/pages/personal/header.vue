<template>
    <me-navbar title="我的慕淘" class="header">
        <i class="iconfont icon-setting" slot="right"></i>
        <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
    import MeNavbar from 'base/navbar';
    export default {
        name: 'PersonalHeader',
        components: {
            MeNavbar
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .header{
        &.mine-navbar{
            background-color: $header-bgc;
            color: #fff;
        }

        .iconfont{
            font-size: $icon-font-size-sm;

            &:last-child{
                margin-left: 5px;
            }
        }
    }

</style>
