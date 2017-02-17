<template>
    <div>
			<div v-for="blog in blogs" class="content-repeat">
        <div :sm="6" class="content-left">
            <div class="text-up">
                <div class="text-title pull-left"><h1>Title</h1></div>
                <div class="text-author pull-right">{{ blog.author }} 2017-2-13</div>
            </div>
            <hr>
            <div class="text-down">
                <h4>{{ blog.preview }}</h4>
            </div>
        </div>
        <div :sm="6" class="content-right">
            <el-carousel>
                <el-carousel-item v-for="image in blog.images">
                    <div class="slide-image" :style="'background-image: url('+image+')'"></div>          
                </el-carousel-item>
            </el-carousel>
        </div>
			</div> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    blogs: 'allBlogs'
  }),
  created () {
    this.$store.dispatch('fetchBlogs')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content-repeat {
        display: none;
        padding: 10px;
        margin-bottom: 20px;
        margin-left:-10px;
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

    .content-right{
        height:100%;
    }

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
