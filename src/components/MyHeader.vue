<template>
<div class="image-container">   
    <div>
        <header>
            <nav class="navigation">
                <a href="/">About us </a>
                <a href="/">Gallery </a>
                <a href="/">Contact </a>
                <a href="/">Prices </a>
                <h1>GVM</h1>
                <a href="facebook">
                    <img src="../assets/images/facebook.png" alt="facebook" height="25px">
                </a>
                <a href="insta">
                    <img src="../assets/images/instagram.png" alt="insta" height="25px">
                </a>
                <a href="tiktok">
                    <img src="../assets/images/tik-tok.png" alt="tiktok" height="25px">
                </a>
            </nav>
        </header>
    </div>
    <div>
        <img src="../assets/images/embroider_wallpapper2.jpg" alt="header backgorund">
    </div>
    <div class="title">
        <h1>GVM</h1>
        <h2>Gépi hímzés:</h2>
        <h3>Cégeknek</h3>
        <h3>Egyéni megrendlesére</h3>
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
    width: 100%;
    height: 100%;
}
.navigation{
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    z-index: 1;
}

img {
    position: relative;
    width: 100%;
}

.title {
    position: absolute;
    top: 13%;
    left: 15%;
}
</style>