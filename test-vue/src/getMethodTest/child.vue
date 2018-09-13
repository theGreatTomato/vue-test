<template>
    <div>{{text}}</div>
</template>
<script>
    export default {
        data() {
            return {
                text:this.data
            }
        },
        props:{
            data:String
        }
    }
</script>