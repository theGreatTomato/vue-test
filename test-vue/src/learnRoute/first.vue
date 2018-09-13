<template>
    <div>
        first page
        <router-link to="/second"> go to second page</router-link>
        <div>
            <input type="number" v-model="id">
            <button><router-link :to="pageUrl">link to userpage</router-link></button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id:null
            }
        },
        created() {
            console.log('first page create')
        },
        destroyed() {
            console.log('first page is destroyed')
        },
        computed: {
            pageUrl: function () {
                return '/user/' + this.id
            }
        }
    }
</script>
