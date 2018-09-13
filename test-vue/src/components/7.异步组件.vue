<template>
    <div v-html="htmlCode">
        
    </div>
</template>

<script>
    export default {
        name: 'test' ,
        data () {
            return {
                htmlCode : ''
            }
        },
        created() {
            setTimeout( () => {
                this.htmlCode = "<h1>1552</h1>"
            },2000)
        },
    }
</script>