<template>
    <div class="container">
        <div v-for="(url,index) in images" :key="index" class="image-card">
            <img :src="url" :alt="url">
        </div>
        <div class="button">
            <router-link :to="{name:'gallery'}">
                <button>Go to gallery</button>
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data(){
        return{
            images:[],
        }
    },
    methods:{
        toGallery(){
            this.$router.push({ path:'/gallery'});
        }
    },
    mounted(){
        axios.get('https://res.cloudinary.com/dwqs04xan/image/list/homescreen.json').then((res) =>{
            this.images = res.data.resources.map((t:any) => 
        
            `https://res.cloudinary.com/dwqs04xan/image/upload/v${t.version}/${t.public_id}.jpg`
        
      )
        })
    }
})
</script>
<style lang="less" scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

.image-card{
    flex: 0 0 25%;
}

.image-card img{
    max-height: 200px;
    max-width: 200px;
}

.button{
    flex-basis: 100%;
}
</style>
