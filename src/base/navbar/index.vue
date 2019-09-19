<template>
    <div class="mine-navbar">
        <div class="mine-navbar-left" v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div class="mine-navbar-center" v-if="$slots.center">
            <slot name="center"></slot>
        </div>
        <div class="mine-navbar-right" v-if="$slots.right">
            <slot name="right"></slot>
        </div>
        <div class="mine-navbar-title" v-if="title">
           <span class="mine-navbar-text">{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Me',
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .mine-navbar {
        @include flex-between;
        height: 50px;
        background-color: #fff;
        position: relative;
        color: #eee;

        &-left{
            margin-left: 10px;

            ~ .mine-navbar-right{
                position: static;
            }
        }

        &-center{
            margin: 0 10px;
            flex: 1;

            ~ .mine-navbar-right{
                position: static;
            }
        }

        &-right{
            margin-right: 10px;
            position: absolute;
            right: 0;
        }

        &-title{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 30%;
            right: 30%;
            font-size: 18px;
            @include flex-center();
        }

        &-text{
            @include ellipsis();
            font-size: 18px;
            line-height: 1.5em;
            padding: 0 5px;
        }
    }
</style>
