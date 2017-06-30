<template>
    <div class="keeps">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="keepNav">Vault</h1>
                    <button type="button">
                        <router-link :to="'/keeps'">
                            <h6>Go to Keeps</h6>
                        </router-link>
                    </button>
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
                        <button class="btn btn-primary" id="logoutStyle" @click="logout(this.user)">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
        <div class="col-xs-4" v-for="vault in vaults">
            <h1>{{vault.title}}</h1>
        </div>
        <div class="row">
            <div v-for="keep in keeps">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="https://static.pexels.com/photos/196547/pexels-photo-196547.jpeg">
                        <div class="caption">
                            <h3>{{keep.name}}</h3>
                            <p>{{keep.description}}</p>
                            <button @click="removeKeep(keep)" class="btn-small">remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Keeps from './Keeps'
    export default {
        name: 'vault',
        data() {
            return {
            }
        },
        mounted() {
            this.$store.dispatch('getKeeps')
            this.$store.dispatch('getVault')
        },
        computed: {
            keeps() {
                return this.$store.state.keeps
            },
            vault() {
                return this.$store.state.activeVault
            }
        },
        methods: {
            removeVault(vault) {
                this.$store.dispatch('removeVault', vault)
            },
            removeKeep(keep) {
                this.$store.dispatch('removeKeep', keep)
            },
            logout() {
                this.$store.dispatch('logout', this.user)
            }
        },
        components: {
            Keeps
        }
    }

</script>

<style>
    input {
        color: black;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        margin-top: 15px;
    }

    button {
        font-weight: bold;
        margin-top: 15px;
    }
    
</style>