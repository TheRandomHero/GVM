<template>
<div class="header-container">   
    <div>
        <header>
            <nav class="navigation">
                <h1>GVM</h1>
                <div class="navigation-container">
                    <a href="/">About us </a>
                    <router-link to="/gallery">Gallery</router-link>
                    <router-link to="/gyik">GYIK</router-link>
                    <a href="/">Contact </a>
                    <a href="/">Prices </a>
                </div>
            </nav>
        </header>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({

})
</script>

<style lang="less" scoped>

.navigation-container{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-container{
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

</style>