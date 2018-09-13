<template>
    <div>
        <div>父组件</div>
        <div> '<child :data="data" @data="data = $event"></child>'  相当于下面的 </div>
        <child :data.sync="data"></child>
    </div>
</template>

<script>
import child from './8.sync子'
    export default {
        name:'father-component',
        components:{
            'child': child,
        },
        data () {
            return {
                data:'s15s'
            }
        }
    }
</script>