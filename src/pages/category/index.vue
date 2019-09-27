<template>
    <div class="category">
        <header class="g-header-container">
            <category-header></category-header>
        </header>
    </div>
</template>

<script>
    import CategoryHeader from './header';

    export default{
        name: 'Category',
        components: {
            CategoryHeader
        }
    };
</script>

<style lang="scss" scoped>
</style>
