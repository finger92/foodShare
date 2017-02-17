<template>
    <el-row class="nav">
        <el-col :span="12" :class="{active:navChoose.blog}"><div @click="active(navChoose.blog)" class="title-button">blog</div></el-col>
        <el-col :span="12" :class="{active:navChoose.map}"><div @click="active(navChoose.map)" class="title-button">map</div></el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      navChoose: {
        blog: true,
        map: false
      }
    }
  },
  methods: {
    active: function (item) {
      item = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-col{
		background-color: #eee;
	}
	
	.el-col a{
		padding: 10px 15px;
		color: #23527c;
	}
	
	.el-col.active{
		background-color: #003058;
	}
	
	.el-col.active a{
		color: #fff;
	}
	
	.nav{
		width:70%;
		margin:auto;
	}

	.text-up{
		height:60px;
	}

	.content-right{
		height:100%;
	}

	.banner { position: relative; overflow: auto; }
	.banner li { list-style: none; }
	.banner ul li { float: left; }

	.slide-image{
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto 100%;
	}
	.text-author{
		padding-top: 40px;
	}
</style>
