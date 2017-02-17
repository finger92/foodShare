<template>
  <div>
      <nav-bar></nav-bar>
      <blog-sim></blog-sim>
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
