<template>
    <div>
        <div>父组件</div>
        <base-input 
            v-model="inputvalue" 
            placeholder="输入数据"
            ></base-input>
            <div>{{ inputvalue }}</div>
        <button @click="showChild">看console</button>
        <child res = "test">
            <template slot="slotName" scope="props">
                <li >{{props.text}}</li>
            </template>
        </child>
    </div>
</template>

<script>
import child from './4.2作用域插件子'
import baseInput from './3.base-input';
    export default {
        name:'father-component',
        components:{
            'child':child,
            baseInput
        },
        data () {
            return {
                inputvalue:''
            }
        },
            methods:{
            showChild:function () {
                //console.log(parent.$refs) 自己看官网把 
            },
            inputchange: function (value) {
                console.log('object');
                this.inputvalue = value
            }
        }
    }
</script>