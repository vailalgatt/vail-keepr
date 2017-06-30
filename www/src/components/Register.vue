<template>
    <div class="register">
        <div class="container-fluid">
        <h1>Create Your Account</h1>
            <form @submit.prevent="register">
            <div class="well well-sm custom-well-small">
                <div class="input-group">
                      <span class="input-group-addon fa fa-user-circle col-xs-2" aria-hidden="true"></span>
                    <div class="col-xs-10">
                    <input type="text" class="form-control" v-model="user.name" required placeholder="First Name">
                </div>
                </div>
                <div class="input-group">
                    <span class="input-group-addon fa fa-envelope-open col-xs-2" aria-hidden="true"></span>
                      <div class="col-xs-10">
                    <input type="email" class="form-control" v-model="user.email" required placeholder="email@somewhere.com">
                </div>
                </div>
                <div class="input-group">
                    <span class="input-group-addon fa fa-star col-xs-2" aria-hidden="true"></span>
                      <div class="col-xs-10">
                    <input type="password" class="form-control" v-model="user.password" required placeholder="password">
                </div>
                </div>
                <div class="form group row">
                      <div class="col-xs-12">
                    <button class="btn btn-default" type="submit">submit</button>
                </div>
                </div>
                 <h5>Congrats on your new account! Log in </h5>
                <router-link :to=" '/login/'">
                    <h5>here!</h5>
                </router-link>
            </div>
            </form>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'register',
        data() {
            return {
                user: {}
            }
        },
        computed: {},
        methods: {
            register() {
                this.$store.dispatch('register', this.user)
            }
        },
        components: {}
    }
</script>


<style>
.register{
    background-color: grey;
}
h1{
    color: #FF5AF5;
    text-align: center;
    font-family: 'Asap', sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 1px black; 
}
button{
    margin-bottom: 10px;
    font-weight: bold;
}
span{
    color: black;
    text-align: left;
}
.well.custom-well-small { 
    width: 335px; 
    margin: 0 auto; 
    text-align: center;
    background-color: #fbfbfb;
}
</style>