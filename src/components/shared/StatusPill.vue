<template>
    <div class="status-pill d-flex justify-content-center align-items-center" :class="status">
        {{ capitalize(status) }}
    </div>
</template>

<script>
    export default {
        name: 'StatusPill',
        props: ['status'], 
        methods: {
            capitalize(str){
                return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            }
        }
    }
</script>

<style scoped>
    .status-pill {
        padding: 2px 12px;
        font-size: 8px;
        border-radius: 8px
    }

    .pending {
        background: #0c6dc848;
        color: #0c6dc8;
        border: 1px solid #0C6EC8;
    }

    .completed {
        background: #22a7136d;
        color: #0E5905;
        border: 1px solid #0E5905;
    }

    .cancelled {
        background: #ab050532;
        color: #AB0505;
        border: 1px solid #AB0505;
    }

    .shipped {
        background: #d97f0046;
        color: #c77401;
        border: 1px solid #D97F00;
    }
</style>