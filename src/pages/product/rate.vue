<template>
    <div class="rate">
        <div class="rate-title">商品评价 ({{rate.totalCount}})</div>
        <ul class="rate-keywords">
            <li class="rate-keyword"
                v-for="item in rate.keywords"
                :key="item.word"
            >{{item.word}}({{item.count}})</li>
        </ul>
        <ul class="rate-list">
            <li class="rate-list-item" v-for="rate in rate.rateList" :key="rate.feedId">
                <p class="item-user">
                    <img :src="rate.headPic" class="item-user-pic">
                    <span class="item-user-name">{{rate.userName}}</span>
                </p>
                <p class="item-content">{{rate.content}}</p>
                <p class="item-moreinfo">
                    <span class="item-moreinfo-date">{{rate.dateTime}}</span>
                    <span class="item-moreinfo-sku">{{rate.skuInfo}}</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ProductRate',
        props: {
            rate: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .rate{
        width: 100%;
        background-color: #fff;
        padding: 10px;
        font-size: $font-size-base;

        &-title{
            font-size: $font-size-l;
            color: #777;
            margin-bottom: 15px;
        }

        &-keywords{
            display: flex;
            flex-wrap: wrap;
        }

        &-keyword{
            padding: 8px 10px;
            background-color: #ffeeee;
            margin: 0 10px 10px 0;
            border-radius: 10px;
        }

        .item-user{
            margin: 15px 0 10px;
            @include flex-center();
            justify-content: flex-start;

            &-pic{
                width: 20px;
                margin-right: 5px;
                border-radius: 50%;
            }
        }

        .item-content{
            line-height: 1.5;
            color: #333;
        }

        .item-moreinfo{
            color: #999;
            margin-top: 8px;
            line-height: 1.5;

            &-sku{
                margin-left: 5px;
            }
        }
    }
</style>
