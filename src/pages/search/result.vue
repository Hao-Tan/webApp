<template>
    <div class="result">
        <div class="loading-container" v-show="loading">
            <me-loading></me-loading>
        </div>
        <ul class="g-list" v-show="!loading && results.length">
            <li class="g-list-item" v-for="item in results" :key="item[0]" @click="$_selectItem(item[0])">
                <span class="g-list-text">{{item[0]}}</span>
            </li>
        </ul>
        <div class="no-result" v-show="!loading && !results.length">没有结果</div>
    </div>
</template>

<script>
    import MeLoading from 'base/loading';
    import {getSearchResult} from 'api/search';
    import {searchMixin} from 'assets/js/mixins';

    export default {
        name: 'searchResult',
        mixins: [searchMixin],
        components: {
            MeLoading
        },
        props: {
            queryWord: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                loading: false,
                results: []
            };
        },
        watch: {
            queryWord(newWord) {
                this.getResults(newWord);
            }
        },
        methods: {
            getResults(keyword) {
                if (!keyword) {
                    console.log(this.results);
                    this.results = [];
                    return;
                };

                this.loading = true;
                getSearchResult(keyword).then(res => {
                    if (res) {
                        this.results = res;
                        this.loading = false;
                        console.log(this.loading, this.results);
                    }
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .g-list{
        border: none;
    }
</style>
