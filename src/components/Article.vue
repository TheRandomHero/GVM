<template>
    <div class="block-container">
        <div class="block-card">
            <img src="../assets/images/design-thinking_64px.png" alt="design">
            <p>Egyeni tervezes de elore megtervezett modellekbol is valogathato</p>
        </div>
        <div class="block-card">
            <img src="../assets/images/embroidery_64px.png" alt="design">
            <p>Egyeni tervezes de elore megtervezett modellekbol is valogathato</p>
        </div>
        <div class="block-card">
            <img src="../assets/images/delivered.png" alt="design">
            <p>Egyeni tervezes de elore megtervezett modellekbol is valogathato</p>
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

.block-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.block-card{
    width: 200px;
    text-align: center;
}
</style>