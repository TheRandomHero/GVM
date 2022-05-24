<template>
    <div class="inside-container">
        <div class="title-container">
            <h1>Cégeknek</h1>
            <h2>Logók/minták nagy mennyiségben</h2>
        </div>
        <div class="image-container">
            <img src="../assets/images/company_logo.jpg" alt="company_logo">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style lang="less" scoped>

.inside-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.image-container{
    width: 500px;
    height: 650px;
}

.image-container img{
    width: 100%;
    height: 100%;
}

.title-container{
    width: 500px;
}
</style>