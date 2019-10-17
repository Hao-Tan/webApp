<template>
    <div class="more">
        <div class="g-line">
            <div class="g-line-title">
                <i class="iconfont icon-shouhoukefucopy"></i>
                <span class="g-line-title-text">售后服务</span>
            </div>
            <div class="g-line-enter">
                <i class="iconfont icon-back"></i>
            </div>
        </div>

        <div class="g-line">
            <div class="g-line-title">
                <i class="iconfont icon-yijianfankui"></i>
                <span class="g-line-title-text">意见反馈</span>
            </div>
            <div class="g-line-enter">
                <i class="iconfont icon-back"></i>
            </div>
        </div>

        <div class="g-line">
            <div class="g-line-title">
                <i class="iconfont icon-dizhi"></i>
                <span class="g-line-title-text">收货地址</span>
            </div>
            <div class="g-line-enter">
                <i class="iconfont icon-back"></i>
            </div>
        </div>

        <div class="g-line">
            <div class="g-line-title">
                <i class="iconfont icon-tuichudenglu"></i>
                <span class="g-line-title-text">退出登录</span>
            </div>
            <div class="g-line-enter">
                <i class="iconfont icon-back"></i>
            </div>
        </div>

        <div class="g-line">
            <div class="g-line-title">
                <i class="iconfont icon-dianhua"></i>
                <span class="g-line-title-text">400-123-8888</span>
            </div>
            <div class="g-line-enter">
                <i class="iconfont icon-back"></i>
            </div>
        </div>

        <div class="hotline">
            <p>客服热线400-123-8888（8:00-22:00）</p>
            <p>拨打前请记录您的UID</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonalMore'
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .hotline{
        font-size: $font-size-l;
        padding: 20px 0 10px 20px;
        line-height: 1.5;
    }
</style>
