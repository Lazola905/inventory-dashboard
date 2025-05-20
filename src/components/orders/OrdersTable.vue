<template>
    <div class="custom-table">
        <ul class="table-header-content list-unstyled d-flex gap-5 align-items-center px-3">
            <li @click.prevent="sortById()">
                Id <i :class="this.currentOrder.id == 'ascending' ? 'bi bi-chevron-down' : 'bi bi-chevron-up'"></i>
            </li>
            <li>Customer</li>
            <li @click.prevent="sortByDate()">
                Date <i :class="this.currentOrder.date == 'ascending' ? 'bi bi-chevron-down' : 'bi bi-chevron-up'"></i>
            </li>
            <li @click.prevent="sortByPrice()">
                Price <i :class="this.currentOrder.price == 'ascending' ? 'bi bi-chevron-down' : 'bi bi-chevron-up'"></i>
            </li>
            <li class="ps-1">Status</li>
            <li>Actions</li>
        </ul>

        <div v-if="displayedOrders?.length">
            <ul v-for="order in displayedOrders" :key="order.id" class="table-content list-unstyled d-flex gap-5 align-items-center px-3">
                <li>#00{{order?.id}}</li>
                <li>{{order?.name}}</li>
                <li>{{order?.date.split("T")[0]}}</li>
                <li>{{formatCurrency(order?.price)}}</li>
                <li>
                    <StatusPill :status="order?.status"/>
                </li>
                <li class="action-buttons d-flex gap-3">
                    <i class="bi bi-pencil-square" @click.prevent="handleEdit(order?.id)"></i>
                    <i class="bi bi-trash3" @click.prevent="handleDelete(order?.id)"></i>
                </li>
            </ul>
        </div>
        <div v-else-if="displayedOrders?.length === 0">
            <Loader/>
        </div>
    </div>
</template>

<script>
    import StatusPill from '../shared/StatusPill.vue';
    import Loader from '../shared/Loader.vue'
    import {supabase} from '../../supabase.js'

    export default {
        name: 'OrdersTable',
        props: ['orders'],

        computed: {
            displayedOrders(){
                return this.sortedOrders ?? (this.orders ?? filteredOrders);
            }
        },

        data() {
            return {
                sortedOrders: null,
                filteredOrders: null,
                currentOrder: {
                    date: 'ascending',
                    price: 'ascending',
                    id: 'ascending'
                }
            }
        },

        components: {
            StatusPill,
            Loader
        }, 

        methods: {
            async sortByDate() {
                const { data, error } = await supabase
                    .from('Order')
                    .select('*')
                    .order('date', { ascending: this.currentOrder.date !== 'ascending' ? true : false });
                this.currentOrder.date = this.currentOrder.date === 'ascending'  ? 'descending' : 'ascending'
                this.sortedOrders = data
            },

            async sortByPrice() {
                const { data, error } = await supabase
                    .from('Order')
                    .select('*')
                    .order('price', { ascending: this.currentOrder.price !== 'ascending' ? true : false });
                this.currentOrder.price = this.currentOrder.price === 'ascending'  ? 'descending' : 'ascending'
                this.sortedOrders = data
            },

            async sortById() {
                const { data, error } = await supabase
                    .from('Order')
                    .select('*')
                    .order('id', { ascending: this.currentOrder.id !== 'ascending' ? true : false });
                this.currentOrder.id = this.currentOrder.id === 'ascending'  ? 'descending' : 'ascending'
                this.sortedOrders = data
            },

            formatCurrency(price){
                const formatted = new Intl.NumberFormat('en-ZA', {
                    style: 'currency',
                    currency: 'ZAR',
                }).format(price);
                return formatted
            }
        }
    }
</script>

<style scoped>
    .custom-table {
        height: var(--table-rows-height);
        background: var(--table-heading-bg);
        color: var(--table-heading-color);
        border-radius: 4px; 
        border: 1px solid var(--table-heading-border);
        padding-top: 6px;
        margin: 0;
        display: inline-block;
    }

    .table-content {
        height: var(--table-rows-height);
        border: .5px solid rgba(128, 128, 128, 0.219);
        border-radius: 4px;
        margin: .5rem 0;
    }

    .table-header-content li {
        font-size: 12px;
        font-weight: 600;
        position: relative;
    }

    .table-values {
        overflow-y: auto
    }

    .action-buttons i {
        font-size: 16px;
    }

    .action-buttons i:nth-child(1) {
        color: #3529F5;
    }

    .action-buttons i:nth-child(2) {
        color: #AB0505;
    }

    .table-content li {
        font-size: 14px;
        padding: .3rem 0;
    }

    ul li:nth-child(1){
        width: 30px;
    }

    ul li:nth-child(2){
        width: 140px;
    }

    ul li:nth-child(3), ul li:nth-child(6){
        width: 100px;
    }

    ul li:nth-child(4){
        width: 72px;
    }
    
    ul li:nth-child(5){
        width: 58px;
    }

    .table-header-content i {
        font-size: 11px;
        position: absolute;
        top: 3px;
        transform: translateX(4px);
    }
</style>