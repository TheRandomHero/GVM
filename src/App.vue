<template>
    <div class="app">
        <my-header />
        <home-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import HomeView from './views/HomeView.vue'
import MyHeader from './components/MyHeader.vue'
export default defineComponent({
    name: 'App',
    components: {
        HomeView,
        MyHeader
     }
})

</script>
<style lang="less">

.app{
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}
</style>
