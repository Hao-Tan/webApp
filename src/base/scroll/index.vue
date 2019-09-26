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
        data() {
            return {
                pullingStatus: false,
                pullDownText: PULL_DOWN_TEXT_INIT,
                pullUpText: PULL_UP_TEXT_INIT,
                swiperOption: {
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
                        touchEnd: this.touchEnd
                    }
                }
            };
        },

        watch: {
            data() {
                this.scrollbarUpdate();
            }
        },

        methods: {
            scrollbarUpdate() {
                this.$refs.swiper && this.$refs.swiper.swiper.update();
            },

            scroll() {
                if (this.pullingStatus) {
                    return;
                }

                const swiper = this.$refs.swiper.swiper;

                if (swiper.translate > 0) {
                    if (!this.pullDown) {
                        return;
                    }

                    if (swiper.translate > PULL_DOWN_HEIGHT) {
                        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
                    } else {
                        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
                    }
                } else if (swiper.isEnd) {
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
            // 手指松开后触发事件
            touchEnd() {
                if (this.pullingStatus) {
                    return;
                }

                const swiper = this.$refs.swiper.swiper;

                if (swiper.translate > PULL_DOWN_HEIGHT) {
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
                } else if (swiper.isEnd) {
                    const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
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

            // 往外暴露的方法，用来恢复状态
            pullDownEnd() {
                const swiper = this.$refs.swiper.swiper;

                this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
                swiper.allowTouchMove = true;
                swiper.params.virtualTranslate = false;
                swiper.setTransition(swiper.params.speed);
                swiper.setTranslate(0);
                this.pullingStatus = false;
            },

            pullUpEnd() {
                const swiper = this.$refs.swiper.swiper;
                const totalHeight = parseInt(swiper.$wrapperEl.css('height'));

                this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
                swiper.allowTouchMove = true;
                swiper.params.virtualTranslate = false;
                swiper.setTransition(swiper.params.speed);
                swiper.setTranslate(-(totalHeight - swiper.height));
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
