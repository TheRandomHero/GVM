<template>
    <div class="app">
        <my-header />
        <home-view />
        <homescreen-gallery />
        <my-footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import HomeView from './views/HomeView.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/Footer.vue'
import HomescreenGallery from './components/HomescreenGallery.vue'
export default defineComponent({
    name: 'App',
    components: {
        HomeView,
        MyHeader,
        MyFooter,
        HomescreenGallery
    },
    data(){
        return{
            images:[]
        }
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
