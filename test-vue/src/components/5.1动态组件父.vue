<template>
    <div>
        <div>父组件</div>
        <component :is="currentView"></component> 
        <button @click="changeComponent">changeComponent</button>
    </div>
</template>

<script>
import child from './5.2动态组件子01'
import child2 from './5.3动态组件子002'
    export default {
        name:'father-component',
        components:{
            'child': child,
            'child2': child2
        },
        data () {
            return {
                currentView:'child'
            }
        },
        methods: {
            changeComponent: function () {
                this.currentView = 'child2'
            }
        }
    }
</script>