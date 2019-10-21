<template>
    <div id="app" class="g-container">
        <div class="g-view-container">
            <keep-alive exclude="Search">
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="g-footer-container">
            <c-tabbar></c-tabbar>
        </div>
    </div>
</template>

<script>
    import CTabbar from 'components/tabbar';
    export default {
        name: 'App',
        components: {
            CTabbar
        },
        created() {
            this.$store.commit('getItems');
        }
    };
</script>
