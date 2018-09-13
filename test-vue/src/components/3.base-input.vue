<template>
    <div>
         <input
            type="text"
            @input="$emit('input',$event.target.value)"
            v-bind="$attrs" 
        ><!--$attrs把父组件传进来的属性全部放在这里了-->
    </div>
</template>

<script>
    export default {
        created() {
            console.log('object');
        },
        props:{
            checked:Boolean
        },
        /*watch: {
            input:function () {
                console.log('object');
                this.$emit('inputChange',this.input)
            }
        }*/
        
    }   
    
</script>