<template>
    <div class="keeps">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="keepNav">Keeps</h1>
                    <button type="button">
                        <router-link :to="'/vaults/'">
                            <h6>Go to Vaults -></h6>
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
                <h1>{{keep.title}}</h1>
                <img :src='keep.imgUrl'>
                <p>{{keep.body}}</p>
                <div class="well" id="social">
                    <div class="row">
                        <div class="col-xs-12">
                            <span class="fa fa-share-alt col-xs-4" aria-hidden="true">
                        </span>
                            <span class="fa fa-eye col-xs-4" aria-hidden="true">
                        </span>
                            <button @click="openVaults">
                                <span class="fa fa-thumb-tack col-xs-4" aria-hidden="true"></span>
                            </button>
                            <div class="col-xs-4" v-for="vault in vaults" v-if="showVaults">
                                <div class="well">
                                    <router-link :to=" '/vaults/'+ vault._id">
                                        <h1>{{vault.name}}</h1>
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
            return {
                showVaults: false
            }
        },
        computed: {
            vaults() {
                return this.$store.state.keeps
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
            createKeep() {
                this.$store.dispatch('createKeep', {
                    name: 'Brand new KEEP!',
                    description: 'HIYA'
                })
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
        font-size: 15px;
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
        background-color: white;
    }

    router-link {
        color: white;
    }
</style>