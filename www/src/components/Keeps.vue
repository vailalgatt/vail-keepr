<template>
    <div class="keeps">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="keepNav">Keeps</h1>
                </div>
                    <form class="navbar-form" role="search">
                        <div class="input-group">
                            <div class="col-xs-12">
                            <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
                            </div>
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a class="dungeon" style="color:black; cursor: pointer" @click="logout(this.user)">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="well">
            <ol>
                <li v-for="keep in keeps">
                    <router-link :to=" '/keeps/'+ keep._id">
                        <div class="well">
                            {{keep.name}}
                            <button class="fa fa-trash" aria-hidden="true" @click="addKeep()"></button>
                        </div>
                    </router-link>
                </li>
            </ol>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'keeps',
        data() {
            this.$store.dispatch('getKeeps')
        },
        computed: {
            keeps() {
                return this.$store.state.keeps
            }
        },
        methods: {
            createKeep() {
                this.$store.dispatch('createKeep', {
                    name: 'Brand new KEEP!',
                    description: 'HIYA'
                })
            },
            addKeep() {
                //drag and drop? 
            }
        },
        components: {}
    }

</script>


<style>
    input {
        color: black;
        font-family: 'Open Sans', sans-serif;
        margin-bottom: 10px;
        font-size: 5px;
    }
button{
    font-weight: bold;
}
</style>