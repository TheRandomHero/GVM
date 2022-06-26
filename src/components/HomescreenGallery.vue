<template>
    <div class="homegallery-container">
        <div class="gallery-title">
            <h1>Tekintse meg galériánkat</h1>
        </div>
        <div class="button">
            <router-link :to="{name:'gallery'}" />
                <button>Go to gallery</button>
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
.homegallery-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 50px 0px
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

.gallery-title{
    flex-basis: 100%;
}
</style>
