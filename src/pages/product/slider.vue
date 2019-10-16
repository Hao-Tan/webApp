<template>
    <div class="slider-wrapper">
        <me-slider
            :direction="direction"
            :loop="loop"
            :interval="interval"
            :pagination="pagination"
            :sliders="sliders"
            >
            <swiper-slide v-for="(item, index) in sliders" :key="index">
                <a :href="item" class="slider-link">
                    <img :src="item"  class="slider-img">
                </a>
            </swiper-slide>
        </me-slider>
    </div>
</template>

<script>
    import MeSlider from 'base/slider';
    import {swiperSlide} from 'vue-awesome-swiper';
    import {sliderOptions} from './config';

    export default{
        name: 'HomeSlider',
        components: {
            MeSlider,
            swiperSlide
        },
        props: {sliders: Array},
        data() {
            return {
                direction: sliderOptions.direction,
                loop: sliderOptions.loop,
                interval: sliderOptions.interval,
                pagination: sliderOptions.pagination
            };
        }
    };
</script>

<style lang="scss" scoped>
    .slider-wrapper {
        width: 100%;
    }

    .slider-link {
        display: block;
        padding-top: 100%;
        position: relative;
    }

    .slider-link,
    .slider-img {
        overflow: hidden;
        width: 100%;
    }

    .slider-img{
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
