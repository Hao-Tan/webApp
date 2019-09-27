<template>
  <swiper :options="swiperOption" ref="swiper">

    <div class="mine-scroll-pull-down" v-if="pullDown">
        <me-loading :text="pullDownText" ref="pullDownLoading"></me-loading>
    </div>

    <swiper-slide>
      <slot></slot>
    </swiper-slide>

    <div class="mine-scroll-pull-up" v-if="pullUp">
        <me-loading :text="pullUpText" ref="pullUpLoading"></me-loading>
    </div>

    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>
<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import MeLoading from 'base/loading';
    import {PULL_DOWN_HEIGHT,
            PULL_DOWN_TEXT_INIT,
            PULL_DOWN_TEXT_START,
            PULL_DOWN_TEXT_ING,
            PULL_DOWN_TEXT_END,
            PULL_UP_HEIGHT,
            PULL_UP_TEXT_INIT,
            PULL_UP_TEXT_START,
            PULL_UP_TEXT_ING,
            PULL_UP_TEXT_END} from './config';

    export default {
        name: 'MeScroll',
        components: {
            swiper,
            swiperSlide,
            MeLoading
        },
        props: {
            scrollbar: {
                type: Boolean,
                default: true
            },
            data: {
                type: [Array, Object]
            },
            pullDown: {
                type: Boolean,
                default: false
            },
            pullUp: {
                type: Boolean,
                default: false
            }
        },

        watch: {
            data() {
                this.scrollbarUpdate();
            }
        },

        created() {
            this.init();
        },

        methods: {
            // 初始化参数
            init() {
                this.pullingStatus = false;// 识别码，判断当前是否被拉动
                this.pullDownText = PULL_DOWN_TEXT_INIT;
                this.pullUpText = PULL_UP_TEXT_INIT;
                this.swiperOption = {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: true,
                    setWrapperSize: true,
                    scrollbar: {
                        el: this.scrollbar ? '.swiper-scrollbar' : null,
                        hide: true
                    },
                    on: {
                        sliderMove: this.scroll,
                        touchEnd: this.touchEnd,
                        transitionEnd: this.scrollEnd
                    }
                };
            },

            // 返回最顶部,接收速度和回弹至顶部的回调事件
            scrollToTop(speed, runCallback) {
                this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallback);
            },

            // 更新swiper-scrollbar
            scrollbarUpdate() {
                this.$refs.swiper && this.$refs.swiper.swiper.update();
            },
            // 上下拉动时改变提示加载提示文字
            scroll() {
                if (this.pullingStatus) {
                    return;
                }

                const swiper = this.$refs.swiper.swiper;

                // 滚动事件分发，滚动时附带位置信息和当前swiper对象
                this.$emit('scroll', swiper.translate, swiper);

                if (swiper.translate > 0) { // 下拉
                    if (!this.pullDown) {
                        return;
                    }

                    if (swiper.translate > PULL_DOWN_HEIGHT) {
                        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
                    } else {
                        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
                    }
                } else if (swiper.isEnd) { // 上拉
                    if (!this.pullUp) {
                        return;
                    }

                    const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));

                    if (isPullUp) {
                        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
                    } else {
                        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
                    }
                }
            },

            // 滚动结束触发
            scrollEnd() {
                this.$emit('scroll-end', this.$refs.swiper.swiper.translate, this.$refs.swiper.swiper, this.pullingStatus);
            },

            // 手指松开后触发事件
            touchEnd() {
                if (this.pullingStatus) {
                    return;
                }

                const swiper = this.$refs.swiper.swiper;

                if (swiper.translate > PULL_DOWN_HEIGHT) { // 下拉
                    if (!this.pullDown) {
                        return;
                    }

                    this.pullingStatus = true;
                    swiper.allowTouchMove = false;
                    swiper.setTranslate(PULL_DOWN_HEIGHT);
                    swiper.setTransition(swiper.params.speed);
                    swiper.params.virtualTranslate = true;
                    this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);

                    this.$emit('pull-down', this.pullDownEnd);
                } else if (swiper.isEnd) { // 上拉
                    // 滚动条区域最大高度
                    const totalHeight = parseInt(swiper.$wrapperEl.css('height'));

                    // 判断是否处于上拉状态
                    const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight;

                    if (isPullUp) {
                        if (!this.pullUp) {
                            return;
                        }

                        this.pullingStatus = true;
                        swiper.allowTouchMove = false;
                        swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height));
                        swiper.setTransition(swiper.params.speed);
                        swiper.params.virtualTranslate = true;
                        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);

                        this.$emit('pull-up', this.pullUpEnd);
                    }
                }
            },

            // 往外暴露的方法，用来恢复下拉状态
            pullDownEnd() {
                const swiper = this.$refs.swiper.swiper;

                this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
                swiper.allowTouchMove = true;// 允许拉动
                swiper.params.virtualTranslate = false; // 固定滚动条位置
                swiper.setTransition(swiper.params.speed); // 过渡动画时间
                swiper.setTranslate(0);// 将swiper的位置复原到顶端
                this.pullingStatus = false;

                // 延迟transition相同时间分发动画结束的事件
                setTimeout(() => {
                    this.$emit('pull-down-transition-end', swiper.translate);
                }, swiper.params.speed);
            },

            // 往外暴露的方法，用来恢复上拉状态
            pullUpEnd() {
                const swiper = this.$refs.swiper.swiper;

                this.$refs.pullDownLoading.setText(PULL_UP_TEXT_END);
                swiper.allowTouchMove = true;
                swiper.params.virtualTranslate = false;
                swiper.setTransition(swiper.params.speed);
                this.pullingStatus = false;
            }
        }
    };
</script>

<style scoped>

    .swiper-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .swiper-slide{
        height: auto;
    }

    .mine-scroll-pull-down,
    .mine-scroll-pull-up {
        position: absolute;
        left: 0;
        width: 100%;
    }

    .mine-scroll-pull-down{
        bottom: 100%;
        height: 80px;
    }

    .mine-scroll-pull-up{
        top: 100%;
        height: 30px;
    }
</style>
