<template>
  <div class="home">
    <!-- <h1>hello</h1>
    <el-button>hello</el-button>
    <el-button type="primary">hello</el-button>
    <el-button type="info">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-button type="success">hello</el-button>
    <el-tag type="tag">enenen</el-tag>
    <i class="fa fa-user"></i>-->
    <Header></Header>
    <el-container>
  <el-container class="content">
    <Menu/>
  <el-container>
    <el-main>Main</el-main>
    <el-footer><Footer/></el-footer>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Menu from '@/components/common/Menu.vue'
import Footer from '@/components/common/Footer.vue'
export default {
  name: 'HelloWorld',
  components: { Header, Menu, Footer },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .home {
      width: 100%;
      height: 100;
      // background: yellow;
      // .el-button {
      //   color: red
      // }
      .content {
        position: absolute;
        width: 100%;
        top: 60px;
        bottom: 0;
      }
    }
</style>
