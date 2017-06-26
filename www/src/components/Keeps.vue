<template>
    <div class="keeps">
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
            keeps(){
                return this.$store.state.keeps
            }
        },
        methods: {
            createKeep(){
                this.$store.dispatch('createKeep', {
                    name: 'Brand new KEEP!',
                    description: 'HIYA'
                })
            },
            addKeep(){
                //drag and drop? 
            }
        },
        components: {}
    }

</script>


<style>

</style>