<template>
    <span class="heading">
        <h2 class="m-0">Orders</h2>
        <p>{{ this.orders.length }} orders found</p>
    </span>

    <ul class="tabs list-unstyled d-flex gap-3">
        <li :class="{active: this.selectedTab === 'all'}" @click.prevent="fetchOrders()">All orders</li>
        <li :class="{active: this.selectedTab === 'pending'}" @click.prevent="filterByStatus('pending')">Pending</li>
        <li :class="{active: this.selectedTab === 'shipped'}" @click.prevent="filterByStatus('shipped')">Shipped</li>
        <li :class="{active: this.selectedTab === 'cancelled'}" @click.prevent="filterByStatus('cancelled')">Cancelled</li>
        <li :class="{active: this.selectedTab === 'completed'}" @click.prevent="filterByStatus('completed')">Completed</li>
    </ul>
    
    <OrdersTable :orders="this.orders"/>
</template>

<script>
    import OrdersTable from '../components/orders/OrdersTable.vue';
    import {supabase} from '../supabase.js'

    export default {
        name: 'Orders',
        components: {
            OrdersTable
        },
        data () {
            return {
                orders: [],
                selectedTab: 'all'
            }
        },
        methods: {
            async filterByStatus(status) {
                const { data, error } = await supabase
                    .from('Order')
                    .select('*')
                    .eq('status', status);
                this.orders = data
                this.selectedTab = status

                if (error){
                    this.orders = null
                }
            },
            async fetchOrders(){
                const {data, error} = await supabase.from("Order").select("*");
                if (error){
                    this.error = error
                }
                this.orders = data
                this.selectedTab = 'all'
            }
        },
        mounted() {
            this.fetchOrders()
        }
    }
</script>

<style scoped>
    h2 {
        font-size: 20px;
    }

    p {
        font-size: 11px;
        opacity: .8
    }

    .tabs li {
        font-size: 10px
    }

    .tabs li.active {
        font-weight: 600;
        position: relative;
    }

    .tabs li.active::after {
        content: "";
        position: absolute;
        height: 1.5px;
        width: 100%;
        background: #3529F5;
        left: 0;
        bottom: -2px;
    }
</style>