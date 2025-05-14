<template>
	<section class="application">
		<HeaderVue/>
		<Navbar/>
		<main class="p-5">
			<router-view/>
		</main>
	</section>
</template>

<script>
	import HeaderVue from './components/shared/HeaderVue.vue'
	import Navbar from './components/shared/Navbar.vue'

	export default {
		components: {
			Navbar,
			HeaderVue,
		}
	}
</script>