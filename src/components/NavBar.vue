<template>
    <div class="nav">
        <el-col :span="12">
						<div :class="{active:curChoose=='blog'}" class="title-button"  @click="makeActive('blog')">blog</div>
				</el-col>
			
        <el-col :span="12">
						<div :class="{active:curChoose=='map'}" class="title-button"  @click="makeActive('map')">map</div>
			</el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      curChoose: 'blog'
    }
  },
  methods: {
    makeActive: function (item) {
      this.curChoose = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-col{
		height: 40px;
		line-height: 40px;
		background: #eee;
		border-radius: 4px;
	}
	
	.el-col div{
		height: 100%;
		color: #23527c;
		border-radius: 4px
	}
	
	.el-col .active{
		background: #003058;	
	}
	
	.el-col div.active{
		color: #fff;
	}
	
	.nav{
		width:70%;
		margin:auto;
	}
</style>
