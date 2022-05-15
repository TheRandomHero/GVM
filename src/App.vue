<template>
    <div class="app">
        <home-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import HomeView from './views/HomeView.vue'
export default defineComponent({
    name: 'App',
    components: {
        HomeView
     }
})

</script>
<style lang="less">

.app{
    display: flex;
    justify-content: center;
    width: 100%
}
</style>
