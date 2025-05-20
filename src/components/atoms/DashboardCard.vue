<template>
    <div class="dashboard-card p-3">
        <p class="card-heading mb-1">{{ card.title }}</p>
        <span class="amount d-block d-flex justify-content-between">
            <span>
                {{card.amount.symbol}}
                {{card.amount.value}}
            </span>
            <div class="symbol-container d-flex align-items-center justify-content-center"
                :class="card.icon.background">
                <i :class="card?.icon.class"></i>
            </div>
        </span>
        <p class="item-status mt-1" :class="card.status.isIncreasing ? 'text-green' : 'text-red'">
            <i :class="card.status.isIncreasing ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"></i>
            {{(card.status.amount * 100).toFixed(0) + "%"}} from last month
        </p>
    </div>
</template>

<script>
    export default {
        name: 'DashboardCard',
        props: ['card']
    }
</script>

<style scoped>
    .dashboard-card {
        background: #fff;
        width: 240px;
        border: 1px solid rgba(128, 128, 128, 0.208);
        box-shadow: 0 0 2px 0 rgba(128, 128, 128, 0.341);
        border-radius: 8px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .card-heading {
        font-size: 12px;
    }

    .amount {
        font-weight: 900;
        font-size: 20px;
    }

    .item-status {
        font-size: 12px;
    }

    .text-green {
        color: #158408;
    }

    .text-red {
        color: red;
    }

    .symbol-container {
        height: 32px;
        aspect-ratio: 1;
        border-radius: 8px;     
    }

    .amount .green {
        background: #1484084d;
        color: #158408; 
    }

    .amount .purple {
        background: #4e46e541;
        color: #4f46e5; 
    }

    .amount .blue {
        background: #0c6dc840;
        color: #0c6ec8; 
    }
</style>