<template>
    <div>
        <span>{{ doneTodosCount }}</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            doneTodosCount () {
                return this.$store.getters.doneTodos
            }
        }
    }
</script>