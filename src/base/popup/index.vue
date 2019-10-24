<template>
        <div class="mine-popup-wrapper" v-if="visible">
            <transition name="mine-popup">
                <div class="mine-popup">
                    {{msg}}
                </div>
            </transition>
        </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: ''
            },
            delayTime: {
                type: Number,
                default: 1500
            }
        },
        data() {
            return {
                visible: false
            };
        },
        methods: {
            show() {
                if (this.visible) {
                    return;
                }
                this.visible = true;
                setTimeout(() => {
                    this.visible = false;
                }, this.delayTime);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .mine-popup-wrapper{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: $search-popup-z-index;
        @include flex-center();

        .mine-popup{
            height: 60px;
            width: 120px;
            padding: 10px 15px;
            border-radius: 10px;
            color: #fff;
            background-color: rgba(17,17,17,.7);
            line-height: 40px;
            text-align: center;
        }
    }

    .mine-popup-enter-active,
    .mine-popup-leave-active{
        transition: all 0.3s;
    }

    .mine-popup-enter,
    .mine-popup-leave-to{
        width: 0;
        height: 0;
    }
</style>
