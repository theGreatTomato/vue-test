<template>
    <div>
        <div>过滤器的第一种用法：{{ message | formatText }}</div>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data () {
            return {
                message: 'ssss'
            }
        },
        filters: {
            formatText: function (value) {
                console.log(value)
                return value
            }
        }
    }
</script>
