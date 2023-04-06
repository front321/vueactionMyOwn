<template>
  <div class="hello">
    <h1>hello</h1>
    <el-button>hello</el-button>
    <el-button type="primary">hello</el-button>
    <el-button type="info">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-button type="success">hello</el-button>
    <el-tag type="tag">enenen</el-tag>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
