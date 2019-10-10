<template>
    <div class="result">
        <div class="loading-container">
            <me-loading></me-loading>
        </div>
        <ul class="g-list">
            <li class="g-list-item">
                <span class="g-list-text"></span>
            </li>
        </ul>
        <div class="no-result">没有结果</div>
    </div>
</template>

<script>
    import MeLoading from 'base/loading';

    export default {
        name: 'searchResult',
        components: {
            MeLoading
        }
    };
</script>
