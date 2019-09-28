<template>
    <me-scroll :scrollbar="false">
        <ul class="tab">
            <li
            class="tab-item"
            v-for="(item, index) in items"
            :key="index"
            :class="{'tab-item-active': curId === item.id}"
            @click="switchTab(item.id)"
            >
                {{item.name}}
            </li>
        </ul>
    </me-scroll>
</template>

<script>
    import MeScroll from 'base/scroll';
    import {categoryNames} from './config';

    export default {
        name: 'CategoryTab',
        components: {
            MeScroll
        },
        data() {
            return {
                curId: ''
            };
        },
        created() {
            this.init();
            this.switchTab(this.items[0].id);
        },
        methods: {
            init() {
                this.items = categoryNames;
            },
            switchTab(id) {
                if (this.curId === id) {
                    return;
                }
                this.curId = id;
                this.$emit('switchTab', this.curId);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    $tab-item-height:46px;

    .swiper-container{
        height: 100%;
        width: 100%;
    }

    .tab{
        width: 100%;
        height: auto;

        &-item{
            height: $tab-item-height;
            background-color: #fff;
            border-right: 1px solid $border-color;
            border-bottom: 1px solid $border-color;
            color: #080808;
            font-size: $font-size-l;
            font-weight: bold;
            text-align: center;
            line-height: $tab-item-height;
            @include ellipsis();

            &:last-child{
                border-bottom: none;
            }

            &-active{
                background: none;
                border-right: none;
                color: #f23030;
            }
        }
    }
</style>
