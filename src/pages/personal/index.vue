<template>
    <div class="personal">
        <div class="g-header-container">
            <personal-header></personal-header>
        </div>
        <me-scroll>
            <personal-account></personal-account>
            <personal-order-and-property></personal-order-and-property>
            <personal-more></personal-more>
        </me-scroll>
    </div>
</template>

<script>
    import MeScroll from 'base/scroll';
    import PersonalHeader from './header';
    import PersonalAccount from './account';
    import PersonalOrderAndProperty from './order&property';
    import PersonalMore from './more';
    export default{
        name: 'Personal',
        components: {
            MeScroll,
            PersonalHeader,
            PersonalAccount,
            PersonalOrderAndProperty,
            PersonalMore
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .personal{
        height: 100%;
        padding-top: $navbar-height+(-1);
    }
</style>
