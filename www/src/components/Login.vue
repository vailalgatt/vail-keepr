<template>
    <div class="login">
        <div class="container-fluid">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <div class="well well-sm custom-well-small">
                    <div class="input-group">
                        <span class="input-group-addon fa fa-envelope-open col-xs-2" aria-hidden="true"></span>
                        <div class="col-xs-10">
                            <input type="email" class="form-control" v-model="user.email" required placeholder="vail.is@superawesome.com">
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
                </div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    name: 'login',
    data() {
        return {
            user: {}
        }
    },
    computed: {},
    methods: {
        login() {
            this.$store.dispatch('login', this.user)
        }
    },
    components: {}
}
</script>


<style>
h1 {
    color: black;
    text-align: center;
    font-family: 'Asap', sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
}

input {
    color: black;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 10px;
    font-size: 5px;
}

button {
    margin-top: 10px;
    font-weight: bold;
}

span {
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