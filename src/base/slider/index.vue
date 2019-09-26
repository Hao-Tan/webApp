<template>
    <swiper :options="swiperOption" :key="refreshKey">
        <slot></slot>
        <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import {swiper} from 'vue-awesome-swiper';

    export default{
        name: 'MeSlider',
        props: {
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) > -1;
                }
            },
            interval: {
                type: Number,
                default: 3000,
                validator(value) {
                    return value >= 0;
                }
            },
            loop: {
                type: Boolean,
                default: true
            },
            pagination: {
                type: Boolean,
                default: true
            },
            sliders: {
                type: Array
            }
        },
        components: {
            swiper
        },
        watch: {
            sliders(newData) {
                if (newData.length === 0) {
                    return;
                }
                this.refreshKey = Math.random();
                this.swiperOption.loop = newData.length === 1 ? false : this.loop;
            }
        },
        created() {
            // 创建时调用初始化函数
            this.init();
        },
        methods: {
            // 初始化Swiper组件参数
            init() {
                this.refreshKey = Math.random();
                this.swiperOption = {
                    watchOverflow: true,
                    direction: this.direction,
                    autoplay: this.interval ? {delay: this.interval, disableOnInteraction: false} : false,
                    slidesPerview: 1,
                    loop: this.sliders.length <= 1 ? false : this.loop,
                    pagination: {
                        el: this.pagination ? '.swiper-pagination' : null
                    }
                };
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>
