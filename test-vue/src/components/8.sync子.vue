<template>
    <div>
        {{text}}
        <button @click="myChange">xx</button>
    </div>
    
</template>

<script>
    export default {
        props: {
            data:String
        },
        data() {
            return {
                text:this.data
            }
        },
        methods:{
            myChange:function () {
                this.text = 'child data'
                this.$emit('data',this.text)
            }
        }
    }
</script>