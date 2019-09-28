<template>
    <div class="category">
        <header class="g-header-container">
            <category-header></category-header>
        </header>
        <div class="g-content-container">
            <div class="sidebar">
                <category-tab @switchTab="switchTab"></category-tab>
            </div>
            <div class="main">
                <category-content :curId="curId"></category-content>
            </div>
        </div>
    </div>
</template>

<script>
    import CategoryHeader from './header';
    import CategoryContent from './content';
    import CategoryTab from './tab';

    export default{
        name: 'Category',
        components: {
            CategoryHeader,
            CategoryContent,
            CategoryTab
        },
        data() {
            return {
                curId: ''
            };
        },
        methods: {
            switchTab(id) {
                this.curId = id;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .category{
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: $bgc-theme;
    }

    .g-content-container{
        display: flex;
        padding-top: $navbar-height;
        height: 100%;
    }

    .sidebar{
        width: 80px;
        height: 100%;
    }

    .main{
        flex: 1;
        height: 100%;
    }
</style>
