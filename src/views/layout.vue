<template>
<!--  一级路由-->
  <nav>顶部通栏</nav>
  <header>头部</header>
  <main>
<!--  二级路由  -->
    <router-view></router-view>
  </main>
  <footer>尾部</footer>
</template>
<script>
export default {
  name: 'xtx-layout'
}
</script>
<style lang="less" scoped>

</style>
