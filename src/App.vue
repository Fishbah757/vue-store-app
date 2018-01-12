<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
  height: auto; 
}
.products-list {
  width: 400px;
  margin: 0 auto;
  list-style: none;
  padding-left: 0;
}
.products-list li {
  margin: 40px 0;
}
</style>
