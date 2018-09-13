<template>
    <div>
        second page
        <router-link to="/"> go to first page</router-link>
    </div>
</template>

<script>
    export default {
        created() {
            console.log('second page create')
        },
    }
</script>
