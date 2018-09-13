<template>
    <div>
        <router-link to='/'>首页</router-link>
        <div>user id is : {{id}}</div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                id:this.$route.params.id
            }
        },
        created() {
            console.log(this.$route);  
        },
    }
</script>