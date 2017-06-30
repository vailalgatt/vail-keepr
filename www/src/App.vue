<template>
  <div id="app">
    <!--<img src="./assets/logo.jpg">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-default{
    background-color: black;
}
.keepNav{
  color: #FF5AF5;
}

#logoutStyle{
  background-color: whitesmoke;
  color: black;
  font-weight: bold;
}

a {
  color: #FF5AF5;
}

</style>
