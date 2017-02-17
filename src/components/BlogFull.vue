<template>
  <div :sm="9" class="content-repeat">
    <div :sm="6" class="content-left">
        <div class="text-up">
            <div class="text-title pull-left"><h1>Title</h1></div>
            <div class="text-author pull-right">author 2017-2-13</div>
        </div>
        <hr>
        <div class="text-down">
            <h4>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</h4>
        </div>
    </div>
    <div :sm="6" class="content-right">
      <div class="banner">
        <ul>
          <li><div class="slide-image" style="background-image: url(resource/pic/IMG_2189.JPG)"></div></li>
          <li><div class="slide-image" style="background-image: url(resource/pic/IMG_2311.JPG)"></div></li>
          <li><div class="slide-image" style="background-image: url(resource/pic/IMG_2454.JPG)"></div></li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
