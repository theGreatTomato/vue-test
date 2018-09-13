<template>
    <div>
        <span>count1: {{count1}}</span>
        <span>count2: {{count2}}</span>
        <span>count3: {{count3}}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name: 'xxx',
        data() {
            return {
                num:5
            }
        },
        computed: mapState({
            count1:'count',//两种写法是一样的
            count2:state => state.count,
            count3:function (state) {
                return this.num + state.count
            }
        })
    }
</script>