<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Good to see U.</h2>
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
h2{
  margin-top: 100px;
}
</style>
