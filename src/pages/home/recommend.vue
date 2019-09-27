<template>
    <div class="recommend">
        <h3 class="recommend-title">热卖推荐</h3>
        <div
        class="loding-container"
        v-if="!recommends.length"
        >
            <me-loading inline></me-loading>
        </div>
        <ul
        class="recommend-list"
        v-else
        >
            <li
            class="recommend-item"
            v-for="(item, index) in recommends"
            :key="index"
            >
                <router-link
                class="recommend-link"
                :to="{name: 'home-product', params: {id: item.baseinfo.itemId}}"
                >
                    <p class="recommend-pic"><img v-lazy="item.baseinfo.picUrl" class="recommend-img"></p>
                    <p class="recommend-name">{{item.name.shortName}}</p>
                    <p class="recommend-origPrice"><del>￥{{item.price.origPrice}}</del></p>
                    <p class="recommend-info">
                        <span class="recommend-price">￥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
                        <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getHomeRecommends} from 'api/home';
    import MeLoading from 'base/loading';

    export default {
        name: 'HomeRecommend',
        data() {
            return {
                recommends: [],
                currentPage: 1,
                totalPage: 1
            };
        },
        components: {
            MeLoading
        },
        created() {
            this.getRecommends();
        },
        methods: {
            // 更新添加数据的接口
            update() {
                return this.getRecommends();
            },

            // 获取推荐数据
            getRecommends() {
                if (this.currentPage <= this.totalPage) {
                    return getHomeRecommends(this.currentPage).then(res => {
                        this.recommends = this.recommends.concat(res.itemList);
                        this.currentPage++;
                        this.totalPage = res.totalPage;
                        this.$emit('loaded', this.recommends);
                    });
                } else {
                    return Promise.reject(new Error('no more data available'));
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .recommend{
        &-title{
            position: relative;
            width: 100%;
            padding: 10px 0;
            font-size: $font-size-l;
            text-align: center;

            &:before,
            &:after{
                content: '';
                position: absolute;
                top: 50%;
                width: 40%;
                height: 1px;
                background-color: #ddd;
            }

            &:before{
                left: 0;
            }

            &:after{
                right: 0;
            }
        }

        &-list {
            @include flex-between();
            flex-wrap:wrap;
        }

        &-item{
            width: 49%;
            background-color: #fff;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.12);
            margin-bottom: 8px;
        }

        &-link{
            display: block;
        }

        &-pic{
            width: 100%;
            padding-top: 100%; //padding和margin都相对于宽而非高
            position: relative;
            margin-bottom: 5px;
        }

        &-img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        &-name{
            height: 36px;
            padding: 0 5px;
            margin-bottom: 8px;
            line-height: 1.5;
            @include multiline-ellipsis();
        }

        &-origPrice{
            padding: 0 5px;
            margin-bottom: 8px;
            color: #ccc;
        }

        &-info{
            @include flex-between();
            padding: 0 5px;
            margin-bottom: 8px;
        }

        &-price{
            color: #e61414;

            &-num{
                font-size: 20px;
            }
        }

        &-count{
            color: #999;
        }
    }

    .loding-container{
        padding-top: 100px;
    }
</style>
