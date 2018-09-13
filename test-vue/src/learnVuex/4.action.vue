<template>
    <div>
        <span>action : {{status}}</span>
        <div>{{ count }}</div>
        <button @click="handleChange"> 0000 </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        computed: mapState({
            count:'count',
            status:'status'
        }),
        data () {
            return {
                num : 5
            }
        },
        methods: {
            handleChange:function () {
                this.num ++
                this.$store.dispatch('increment', { num: this.num })
                //参照redux也可以写成 （{type:'increment',num:this.num}）
            }
        }
    }
</script>