<template>
  <div class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in msg" :key="item">
         这是{{item}}
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg:['第一张图','第二张图','第三张图','第四章图']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__container {
    height:500px !important;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
