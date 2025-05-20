<template>
  <h2 class="page-headings">Dashboard overview</h2>
  <p>Welcome back, here is what's happening today!</p>

  <ul class="dashboard-cards mt-5 p-0 d-flex flex-wrap gap-5">
    <span v-for="card in cards" :key="card.title">
      <DashboardCard :card="card"/>
    </span>
  </ul>
  
</template>

<script>
  import DashboardCard from '../components/atoms/DashboardCard.vue';
  import { getOrdersCount } from '../services/OrderService'; 

  export default {
      name: 'Dashboard',
      components: {
        DashboardCard,
      },
      data() {
          return {
            ordersCount: 0,
          }
      },
      methods: {
        async setOrdersCount() {
          this.ordersCount = await getOrdersCount();
        }
      },
      mounted(){
        this.setOrdersCount();
      },
      computed: {
        cards(){
          return [
              {
                title: "Total revenue",
                amount: {
                  symbol: "$",
                  value: 4650,
                },
                icon: {
                  background: "green",
                  class: "bi bi-currency-dollar",
                },
                status: {
                  isIncreasing: true,
                  amount: 0.04, 
                },
              },
              {
                title: "Customers",
                amount: {
                  symbol: "",
                  value: 320,
                },
                icon: {
                  background: "purple",
                  class: "bi bi-person-hearts", 
                },
                status: {
                  isIncreasing: true,
                  amount: 0.12,
                },
              },
              {
                title: "Orders",
                amount: {
                  symbol: "",
                  value: this.ordersCount
                },
                icon: {
                  background: "blue",
                  class: "bi bi-cart4",
                },
                status: {
                  isIncreasing: false,
                  amount: 0.01,
                },
              },
            ]
        }
      }
  }
</script>