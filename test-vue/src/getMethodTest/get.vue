<template>
    <div>
        <child v-for="(data, i) in datas" :key="i" :data="data" /> 
    </div>
</template>

<script>
    import child from './child.vue'
    import http from '../../unit/http.js';
    export default {
        components:{
            'child':child
        },
        data() {
            return {
                datas:[]
            }
        },
        beforeCreate() {
            http.get('http://39.108.135.222/react/getJSON.php').then((datas) => {
                console.log(datas,'datas');
                this.datas = datas
            })
        },
    }
</script>