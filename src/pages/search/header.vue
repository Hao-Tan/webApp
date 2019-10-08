<template>
    <me-navbar class='header'>
        <i class="iconfont icon-back" slot="left" @click="back"></i>

        <me-searchbox
            slot="center"
            :fake="false"
            placeholder="开学季有礼，好货5折起"
            @query="query"
            ></me-searchbox>

    </me-navbar>
</template>

<script>
    import MeNavbar from 'base/navbar';
    import MeSearchbox from 'base/searchbox';

    export default {
        name: 'SearchHeader',
        components: {
            MeNavbar,
            MeSearchbox
        },
        methods: {
            back() {
                this.$emit('back');
            },
            query(query) {
                this.$emit('query', query);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "~assets/scss/mixins";

    .header{
        .iconfont{
            font-size: $icon-font-size;
        }

        & .mine-searchbox-wrapper{
            background-color: #eee;
        }
    }
</style>
