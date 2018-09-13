<template>
    <div>
        <div class='ab'>{{text}}</div>
        <select v-model="selected" name="select" id="select" >
            <option value="S">d2</option>
            <option value="B">B1</option>
            <option value="C">C5</option>
        </select>
        <span>{{selected}}</span>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        title: String
    },
    data () {
        return {
            text: 'this.title',
            selected:[]
        }
    },
}
</script>

<style>
    .ab {
        color:aquamarine
    }
</style>
