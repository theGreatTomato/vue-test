<template>
    <div>
        <span>{{count}}</span>
        <button @click="change">change count</button>
    </div>
    
</template>

<script>

    export default {
        name: 'xx',
        data () {
            return {
                newCount:66
            }
        },
        computed: {
            count: function () {
                return this.$store.state.count
            }
        },
        methods: {
            change: function () {
                this.$store.commit('increment',this.newCount)
            }
        }
    }
</script>