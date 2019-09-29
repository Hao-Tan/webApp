<template>
    <div class="content-wrapper">
        <div class="loading-container" v-if="isLoading">
            <div class="loading-wrapper">
                <me-loading :inline="false"></me-loading>
            </div>
        </div>

        <me-scroll
            @scroll-end="scrollEnd"
            ref="scroll"
            v-else
            >
            <div class="content">
                <div class="pic" v-if="content.banner">
                    <a :href="content.banner.linkUrl" class="pic-link">
                        <img v-lazy="content.banner.picUrl" class="pic-img" @load="updateScroll">
                    </a>
                </div>
            </div>

            <div class="section" v-for="(section, index) in content.data" :key="index">
                <h4 class="section-title">{{section.name}}</h4>
                <ul class="section-list">
                    <li class="section-item" v-for="(item, subindex) in section.itemList" :key="subindex">
                        <a :href="item.linkUrl" class="section-link">
                            <p class="section-pic">
                                <img v-lazy="item.picUrl" class="section-img">
                            </p>
                            <p class="section-name">{{item.name}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </me-scroll>

        <div class="g-backtop-container">
            <me-backtop
                :visible="isBackTopVisible"
                @backTop="backToTop"
            ></me-backtop>
        </div>
    </div>
</template>

<script>
    import {CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from './config';
    import {getCategoryDetail} from 'api/category';
    import storage from 'assets/js/storage';
    import MeLoading from 'base/loading';
    import MeScroll from 'base/scroll';
    import MeBacktop from 'base/backtop';

    export default{
        name: 'CategoryContent',
        components: {
            MeLoading,
            MeScroll,
            MeBacktop
        },
        props: {
            curId: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                isBackTopVisible: false,
                content: {},
                isLoading: true
            };
        },
        watch: {
            curId(id) {
                this.isLoading = true;
                this.getContent(id).then(() => { this.isLoading = false; });
            }
        },
        methods: {
            getContent(id) {
                let content = storage.get(CATEGORY_CONTENT_KEY);
                let updateTime;
                const curTime = new Date().getTime();

                if (content && content[id]) {
                    updateTime = content[id].updateTime || 0;
                    if (curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL) { // 缓存中获取数据
                        return this.getContentByLocalStorage(content[id]);
                    } else { // 缓存过期，通过API获取数据
                        return this.getContentByAPI(id).then(() => {
                            this.updateDataToLocalStorage(content, id, curTime);
                        });
                    }
                } else { // 没有缓存数据，调用API
                    return this.getContentByAPI(id).then(() => {
                        this.updateDataToLocalStorage(content, id, curTime);
                    });
                }
            },
            getContentByLocalStorage(content) {
                this.content = content.data;
                return Promise.resolve();
            },
            getContentByAPI(id) {
                return getCategoryDetail(id).then(content => {
                    return new Promise(resolve => {
                        if (content) {
                            this.content = content;
                            resolve();
                        }
                    });
                });
            },
            updateDataToLocalStorage(content, id, curTime) {
                content = content || {};
                content[id] = {};
                content[id].data = this.content;
                content[id].updateTime = curTime;
                storage.set(CATEGORY_CONTENT_KEY, content);
            },
            backToTop() {
                this.$refs.scroll && this.$refs.scroll.scrollToTop();
            },
            updateScroll() {
                this.$refs.scroll.scrollbarUpdate();
            },
            scrollEnd(translate, swiper) {
                this.isBackTopVisible = translate < 0 && -translate > swiper.height;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .content-wrapper{
        width: 100%;
        height: 100%;
        padding: 0 10px 10px;

        & .loading-container{
            @include flex-center();
            width: 100%;
            height: 100%;

            & .loading-wrapper{
                width: 80px;
                height: 60px;
                background-color: $modal-bgc;
                color: #fff;
                border-radius: 3px;
            }
        }

        .content{
            width: 100%;
            padding-top: 10px;

            .pic-img{
                width: 100%;
            }
        }

        .section{

            &-title{
                font-size: $font-size-l;
                color: #080808;
                font-weight: bold;
                padding: 20px 0 10px;
            }

            &-list{
                background-color: #fff;
                @include flex-between();
                justify-content: flex-start;
                flex-wrap: wrap;
            }

            &-item{
                    width: 33.3%;
                }

            &-link{
                @include flex-center(column);
                padding: 10px 0;
            }

            &-pic{
                width: 80%;
                padding-top: 90%;
                position: relative;
                margin-bottom: 5px;
            }

            &-img{
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            &-name{
                @include ellipsis();
            }
        }
    }

</style>
