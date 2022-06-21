<template>
    <div class="app">
        <my-header />
        <router-view/>
        <my-footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/Footer.vue'

export default defineComponent({
    name: 'App',
    components: {
        MyHeader,
        MyFooter,
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

body{
    margin: 0px;
}
</style>
