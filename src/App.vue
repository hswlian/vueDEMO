<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple m-logo">
              <img src="./assets/logo.png" height="32" width="32"/>
              <span>vue-demo</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="home">首页示例</router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="page1">表单示例</router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="page2">表格示例</router-link>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    padding: 0;
    margin: 0;
  }
  .el-header{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .el-row{
    margin: 20px 0;
  }
  .m-logo{
    color:#409EFF;
    font-size:24px
  }
  .m-logo{
    padding: 0 150px;
  }
  .m-logo span{
    vertical-align: top;
  }
  .el-main{
    padding: 0;
  }
</style>
