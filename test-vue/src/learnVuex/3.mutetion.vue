<template>
    <div>
        mutetion 事件必须为同步 异步更新用action
        <button @click="handleChange"> 0000 </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        computed: mapState({
            count:'count',
        }),
        data () {
            return {
                num : 5
            }
        },
        methods: {
            handleChange:function () {
                this.num ++
                this.$store.commit('increment', { num: this.num })
                //参照redux也可以写成 （{type:'increment',num:this.num}）
            }
        }
    }
</script>