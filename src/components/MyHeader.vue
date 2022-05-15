<template>
<div class="image-container">   
    <div>
        <header>
            <nav class="navigation">
                <a href="/">About us </a>
                <a href="/">Gallery </a>
                <a href="/">Contact </a>
                <a href="/">Prices </a>
            </nav>
        </header>
    </div>
    <div >
        <img src="../assets/images/scissors_gimp_transparent_with_logo2.png" alt="header backgorund">
    </div>
    <div>
        <h1>Gépi varrás</h1>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({

})
</script>

<style lang="less" scoped>

.image-container{
    display: inline-block;
    width: 100vh;
    height: 100%;
}
.navigation{
    display: flex;
    justify-content: space-around;
    width: 100%;
}

img {
    position: relative;
    width: 100%;
}

h1 {
    position: absolute;
    top: 13%;
    left: 45%;
}
</style>