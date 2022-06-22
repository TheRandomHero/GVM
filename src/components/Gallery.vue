<template>
    <div class="header-background">
        <img src="../assets/images/colorful_threads.jpg" alt="header backgorund">
    </div>
    <div class="gallery-container">
        <div v-for="(url,index) in images" :key="index" class="image-card">
            <img :src="url" alt="url" @click="show(index)">
        </div>
        <VueEasyLightbox
            :visible="visible"
            :imgs="images"
            :index="index"
            @hide="handleHide"
        ></VueEasyLightbox>    
    </div>    
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import axios from 'axios'

export default defineComponent({
    data(){
        return{
            images:[],
            visible:false,
            index:0
        }
    },
    methods:{
        show(index:number){
            this.visible = true
            this.index = index;
        },
        handleHide(){
            this.visible = false
        }
    },
    mounted(){
        axios.get('https://res.cloudinary.com/dwqs04xan/image/list/gallery.json').then((res) =>{
            this.images = res.data.resources.map((t:any) => 
        
            `https://res.cloudinary.com/dwqs04xan/image/upload/v${t.version}/${t.public_id}.jpg`
        
      )
        })
    },
    components:{
        VueEasyLightbox,
    }
})
</script>
<style lang="less">

.gallery-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10% 15%;
}
.image-card img{
    max-height: 250px;
    max-width: 250px;
    padding: 10px;
}

.header-background{
    width: 100%;
    max-height: 700px;
    overflow: hidden;
}

.header-background img{
    width: 100%;
}
</style>
