<template>
    <nav class="d-flex flex-column align-items-center">
        <img src="../../assets/inv & tory.png" alt="logo" class="mt-5 me-4">
        
        <ul class= "px-2 m-0 d-flex gap-1 flex-column w-100">
            <li v-for="item in navItems" :key="item.name" :class="{ active: isActive(item) }">
                <router-link :to="item.name.toLowerCase() === 'dashboard' ? '/' : item.name.toLowerCase()"
                    class="text-decoration-none nav-item">
                        <i :class="item.icon"></i>
                        {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        methods: {
            isActive(item) {
                return this.$route.path === (item.name.toLowerCase() === 'dashboard' ? '/' : `/${item.name.toLowerCase()}`);
            }
        },
        data() {
            return {
                selectedNavItem: 'dashboard',
                navItems: [
                    {
                        name: 'Dashboard',
                        icon: 'bi bi-graph-down'
                    },
                    {
                        name: 'Products',
                        icon: 'bi bi-box'
                    },
                    {
                        name: 'Inventory',
                        icon: 'bi bi-clipboard-data-fill'
                    },
                    {
                        name: 'Orders',
                        icon: 'bi bi-shop'
                    },
                    {
                        name: 'Customers',
                        icon: 'bi bi-person-hearts'
                    },
                    {
                        name: 'Settings',
                        icon: 'bi bi-gear'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    nav {
        display: flex;
        flex-direction: column;
    }

    img {
        height: 140px;
    }

    .ul {
        height: calc(100dvh - 120px);
        width: 100%;
    }

    .nav-item {
        font-size: 14px;
        display: flex;
        gap: .8rem;
        align-items: center;
        padding: 6px 0 6px 8px;
    }

    li {
        border-radius: 4px;
        overflow: hidden;
    }

    .nav-item:not(.active) {
        color: #1a1a1ac1;
    }

    .nav-item:hover:not(.active) {
        background: rgba(128, 128, 128, 0.189)
    }

    i {
        font-size: 16px;
    }

    .router-link-active {
        color: #261ad0f9 !important;
    }

    .active {
        font-weight: 500;
        background: #3729f538;
    }    
</style>