<template>
    <div class="amount">
        <span class="minus" :class="{disabled: amount<=1}" @click.stop="minus">-</span>
        <span class="amount-number">{{amount}}</span>
        <span class="plus" @click.stop="plus">+</span>
    </div>
</template>

<script>
    export default {
        name: 'CartAmount',
        props: {
            amount: {
                type: Number,
                default: 1
            }
        },
        methods: {
            minus() {
                if (this.amount <= 1) {
                    return;
                }
                this.$emit('update', this.amount - 1);
            },
            plus() {
                this.$emit('update', this.amount + 1);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .amount{
        display: flex;

        & span{
            height: 32px;
            background-color: #eee;
            @include flex-center(column);
        }

        .minus,
        .plus{
            width: 32px;
            font-size: 32px;
        }

        &-number{
            padding: 0 20px;
            margin: 0 1px;
            font-size: 14px;
        }

        .minus{
            border-radius: 3px 0 0 3px;
        }

        .disabled{
            color: #ccc;
        }

        .plus{
            border-radius: 0 3px 3px 0;
        }
    }
</style>
