<template>
  <div class="hello">
    <h1>Welcome to Keepr</h1>
    <p>Get Started</p>
    <div class="col-xs-12">
      <li><router-link to="login">Login</router-link></li>
      <li><router-link to="register">Register</router-link></li>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 10px;
}

a {
  color: #FF5AF5;
}
</style>
