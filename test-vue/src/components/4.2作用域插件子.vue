<template>
<ul> <!--不能把slot作为root element  这里是slot把item.text传到父组件-->
    <slot 
        name="slotName" 
        v-for="(item, i) in items"
        v-key="i"
        :text="item.text">
    </slot>   
</ul>
</template>

<script>
    export default {
        name:'child-component',
        data() {
            return {
                items:[
                    {
                        id:0,
                        text:'我是xx'
                    },
                    {
                        id:1,
                        text:'谁是SSS'
                    },
                    {
                        id:2,
                        text:'你是aaa'
                    }
                ]
            }
        },
        methods:{
            enter:function (e) {
                this.changeData = '我是更改后的数据'
            }
        }
    }
</script>