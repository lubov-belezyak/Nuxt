<script>
import Navbar
import Block1 from "../components/main/Block1";
export default {
  components: {Block1, Navbar}
}
</script>
<template>
<!--  <Tutorial/>-->
  <Block1/>
</template>

<script>
import Block1 from "../components/main/Block1"
export default {
  components: {Block1},
  dirs: [
      '~/components',
      '~/components/main'
  ]
}
</script>
<style>
@import "static/styles/global.css";
@import "static/styles/index.css";
</style>
