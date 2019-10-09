<template>
    <transition name="mine-confirm">
        <div class="mine-confirm-wrapper" v-if="visible" @click="hide">
            <div class="mine-confirm" @click.stop>
                <div class="mine-confirm-title"></div>
                <div class="mine-confirm-msg">{{msg}}</div>
                <div class="mine-confirm-btns">
                    <button class="mine-confirm-btn mine-confirm-ok" @click="ok">确定</button>
                    <button class="mine-confirm-btn mine-confirm-cancel" @click="cancel">取消</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default{
        name: 'MeConfirm',
        props: {
            msg: {
                type: String
            }
        },
        data() {
            return {
                visible: false
            };
        },
        methods: {
            show() {
                this.visible = true;
            },
            hide() {
                this.visible = false;
            },
            ok() {
                this.hide();
                this.$emit('ok');
            },
            cancel() {
                this.hide();
                this.$emit('cancel');
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .mine-confirm-wrapper{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: $search-popup-z-index;
        @include flex-center();
        background-color: $modal-bgc;
    }

    .mine-confirm{
        overflow: hidden;
        width: 88%;
        background-color: #fff;
        border-radius: 10px;
        font-size: 16px;

        &-title{
            padding: 20px 15px 0;
            font-size: 18px;
            text-align: center;
            @include ellipsis();
        }

        &-msg{
            padding: 30px 10px 50px;
            text-align: center;
            @include multiline-ellipsis();
        }

        &-btns{
            display: flex;
        }

        &-btn{
            flex: 1;
            height: 50px;
            background-color: #fff;
            font-size: 14px;
        }

        &-ok{
            background-color: $header-bgc-translucent;
            color: #fff;
        }

        &-cancel{
            border-top: 1px solid $border-color;
        }
    }
</style>
