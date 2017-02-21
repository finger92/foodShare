<template>
  <div>
      <nav-bar class="nav-bar"></nav-bar>
      <blog-sim class="blog-sim"></blog-sim>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import BlogSim from './BlogSim.vue'
export default {
  name: 'main',
  components: { NavBar, BlogSim }
}
</script>

<style scoped>
	.blog-sim{
		padding: 30px 0 30px 0;
	}
	
	.nav-bar{
		height: 40px;
	}
</style>
