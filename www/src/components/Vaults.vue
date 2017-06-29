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
        <div class="row">
            <form @submit.prevent="createKeep">
                <div class="col-xs-12">
                    <input type="text" v-model="keepName" placeholder="add name">
                    <input type="text" v-model="keepDescription" placeholder="add description">
                    <input type="text" v-model="keepImg" placeholder="add image">
                    <button type="submit">Add Keep</button>
                </div>
            </form>
            <form @submit.prevent="createVault">
                <div class="col-xs-12">
                    <input type="text" v-model="vaultName" placeholder="add name">
                    <input type="text" v-model="vaultDescription" placeholder="add description">
                    <input type="text" v-model="vaultImg" placeholder="add image">
                    <button type="submit">Add Vault</button>
                </div>
            </form>
        </div>
        <div class="col-xs-4" v-for="vault in vaults">
            <div class="well">
                <router-link :to=" '/vaults/'+ vault._id">
                    <h1>{{vault.name}}</h1>
                    <h3>{{vault.description}}</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'vaults',
        data() {
            return {
                keepName: "",
                keepDescription: "",
                keepImg: "",
                vaultName: "",
                vaultDescription: "",
                vaultImg: "",
                creatorId: this.$store.state.user._id
            }
        },
        mounted() {
            this.$store.dispatch('getVaults')
        },
        computed: {
            vaults() {
                return this.$store.state.vaults
            },
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout', this.user)
            },
            activeVault(vaultId) {
                this.$store.dispatch('setActiveVaults', vaultId)
            },
        createKeep() {
            this.$store.dispatch('createKeep', {
                name: this.keepName,
                description: this.keepDescription,
                img: this.keepImg
            }),
                this.keepName = '',
                this.keepDescription = '',
                this.keepImg = ''
        },
        createVault() {
            this.$store.dispatch('createVault', {
                name: this.vaultName,
                description: this.vaultDescription,
                img: this.vaultImg
            }),
                this.vaultName = '',
                this.vaultDescription = '',
                this.vaultImg = ''
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
        font-size: 15px;
    }

    button {
        font-weight: bold;
    }
</style>