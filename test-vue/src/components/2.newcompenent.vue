<template>
    <div>
        <input type="text" name="input" id="input0" v-model.lazy="input0">
        <div>{{input0}}</div>
        <test></test>
        <hello-world :isNumber="115">我是老番茄</hello-world>
    </div>
</template>

<script>
import Test from './test.vue'
import HelloWorld from './HelloWorld';

export default {
    name: 'second',
    components:{
        'test':Test,
        'helloWorld':HelloWorld
    },
    data () {
        return {
            test: 'xxx',
            input0:'',
            num:15
        }
    } 
} 
</script>

<style>
.a {
    color: cadetblue;
}
</style>
