<template>
    <div class="keeps">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="keepNav">Keeps</h1>
                </div>
                <form class="navbar-form" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit">
                                <i class="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div class="nav navbar-nav navbar-right">
                    <div class="col-xs-12">
                        <button class="btn btn-primary" id="logoutStyle"@click="logout(this.user)">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
        <div class="col-xs-4" v-for="keep in keeps">
            <router-link :to=" '/keeps/'+ keep._id">
                <div class="well">
                    <h1>{{keep.title}}</h1>
                    <img :src='keep.imgUrl'>
                    <h3>{{keep.name}}</h3>
                    <p>{{keep.body}}</p>
                    <div class="row" id="social">
                        <span class="fa fa-share-alt col-xs-4" aria-hidden="true"></i> </span>
                        <span class="fa fa-thumb-tack col-xs-4" aria-hidden="true"></i> </span>
                        <span class="fa fa-eye col-xs-4" aria-hidden="true"></i> </span>
                    </div>
                </div>
            </router-link>
            </li>
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
            logout() {
                this.$store.dispatch('logout', this.user)
            },
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

/*.navbar-default{
    background-color: black;
}*/
    input {
        color: black;
        font-family: 'Open Sans', sans-serif;
        font-size: 5px;
        margin-top: 10px;
    }

    button {
        font-weight: bold;
    }

    img {
        width: 60%;
        height: 25%;
    }
    #social {
        color: black;
        text-align: center;
    }
    
</style>