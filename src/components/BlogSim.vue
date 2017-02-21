<template>
    <el-row>
			<transition-group name="custom-classes-transition" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
				<el-col :span="18" v-if="bounceAnim" v-for="blog in blogs" v-bind:key="blog" class="content-repeat">
					<el-col :sm="12" class="content-left">
							<div class="text-up">
									<div class="text-title pull-left"><h1>Title</h1></div>
									<div class="text-author pull-right">{{ blog.author }} 2017-2-13</div>
							</div>
							<hr>
							<div class="text-down">
									<h4>{{ blog.preview }}</h4>
							</div>
					</el-col>
					<el-col :sm="12" class="content-right">
							<el-carousel>
									<el-carousel-item v-for="image in blog.images">
											<div class="slide-image" :style="'background-image: url('+image+')'"></div>          
									</el-carousel-item>
							</el-carousel>
					</el-col>
				</el-col>
			</transition-group>
    </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      bounceAnim: false
    }
  },
  computed: mapGetters({
    blogs: 'allBlogs'
  }),
  created () {
    this.$store.dispatch('fetchBlogs')
    setTimeout(() => {
      this.bounceAnim = true
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.content-repeat {
		margin-bottom: 20px;
		margin-left:-50px;
		height: 300px;
		border: 4px solid #F04C40;
		background-color: #F04C40;
		color: #ffffff;
		border-radius: 0 15px 15px 0;
		box-shadow: 10px 10px 8px #999999;
	}

	.text-up{
		height:60px;
	}

	.text-down{
		text-align: left;
	}
	
	.content-left{
		padding-left: 50px;
	}
	
	.content-right{
		height: 100%;
		padding-left:10px;
	}

	.slide-image{
		width: 100%;
		height: 93%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto 100%;
	}
	
	.text-title h1{
		margin-bottom: 0;	
	}
	
	.text-author{
		padding-top: 40px;
	}
	
	.pull-left{
		float: left;
	}
	
	.pull-right{
		float: right;
	}
</style>
