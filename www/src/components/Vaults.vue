<template>
    <div class="vaults">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="keepNav">Vaults</h1>
                    <button type="button">
                        <router-link :to="'/keeps'">
                            <h6>Go to Keeps</h6>
                        </router-link>
                    </button>
                </div>
                <form class="navbar-form" role="search">
                    <div class="input-group">
                        <div class="col-xs-12">
                            <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
                        </div>
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit">
                                <i class="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div class="nav navbar-nav navbar-right">
                    <div class="col-xs-12">
                        <button class="btn btn-primary" id="logoutStyle" @click="logout(this.user)">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
        <!--<div class="well">
                    <form class="col-md-3" @submit.prevent="createVault">
                        <input type="text" v-model="name" required placeholder="Vault Name">
                        <input type="text" v-model="description" required placeholder="Description of Vault">
                        <input type="text" v-model="imgUrl" required placeholder="imgUrl of Vault">
                        <input type="text" v-model="articleUrl" required placeholder="articleUrl of Vault">
                    </form>
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
                </div>-->
                <!--<div class="col-xs-4" v-for="keep in keeps">
            <router-link :to=" '/keeps/'+ keep._id">
                <div class="well">
                    <h1>{{keep.title}}</h1>
                    <img :src='keep.imgUrl'>
                    <h3>{{keep.name}}</h3>
                    <p>{{keep.body}}</p>
                    <div class="row" id="social">
                        <span class="fa fa-share-alt col-xs-4" aria-hidden="true">
                            </i>
                        </span>
                        <span class="fa fa-thumb-tack col-xs-4" aria-hidden="true">
                            </i>
                        </span>
                        <span class="fa fa-eye col-xs-4" aria-hidden="true">
                            </i>
                        </span>
                    </div>
                </div>
            </router-link>
        </div>-->
    
        <div class="col-xs-4" v-for="vault in vaults">
            <router-link :to=" '/vaults/'+ vault._id">
                <div class="well">
                    <h1>{{vault.title}}</h1>
                    <img :src='keep.imgUrl'>
                    <h3>{{vault.name}}</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'vaults',
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
input {
    color: black;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 10px;
    font-size: 5px;
}

button {
    font-weight: bold;
}
</style>