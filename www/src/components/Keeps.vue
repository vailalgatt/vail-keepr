<template>
    <div class="keeps">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="keepNav">Keeps</h1>
                    <button type="button">
                        <router-link :to="'/vaults/'">
                            <h6>Go to Vaults</h6>
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
        <div class="col-xs-4" v-for="keep in keeps">
            <div class="well">
                <h1>{{keep.name}}</h1>
                <img class="fit" :src='keep.imgUrl'>
                <p>{{keep.description}}</p>
                <div class="well" id="social">
                    <div class="row">
                        <div class="col-xs-12">
                            <button @click="openVaults">
                                <span class="fa fa-thumb-tack col-xs-4" aria-hidden="true"></span>
                            </button>
                            <div class="col-xs-12" v-for="vault in vaults" v-if="showVaults">
                                <div class="well" id="showingVaults">
                                    <router-link :to=" '/vaults/'+ vault._id">
                                        <h5>{{vault.name}} <button @click="addKeep" class="fa fa-plus" aria-hidden="true"></button></h5>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Vaults from './Vaults'
    export default {
        name: 'keeps',
        data() {
            this.$store.dispatch('getKeeps')
            this.$store.dispatch('getVaults')
            this.$store.dispatch('getAllKeeps')
            return {
                showVaults: false
            }
        },
        computed: {
            vaults() {
                return this.$store.state.vaults
            },
            keeps() {
                return this.$store.state.keeps
            },
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout', this.user)
            },
            addKeep() {
                //add from toggle list of showVaults
            },
            openVaults() {
                this.showVaults = !this.showVaults
            }
        },
        activeVault(vaultId) {
            this.$store.dispatch('setActiveVaults', vaultId)
        },
        components: {

        }
    }

</script>


<style>
    /*.navbar-default{
    background-color: black;
}*/

    input {
        color: black;
        font-family: 'Open Sans', sans-serif;
        font-size: 10px;
        margin-top: 15px;
    }

    button {
        font-weight: bold;
    }

    img {
        width: 60%;
        height: 25%;
    }

    router-link {
        color: white;
    }

    #showingVaults {
        background-color:grey;
    }
</style>