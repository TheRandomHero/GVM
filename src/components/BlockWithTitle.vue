<template>
    <div class="header-background">
        <img src="../assets/images/embroider_wallpapper2.jpg" alt="header backgorund">
    </div>
    <div class="title">
        <h1>GVM</h1>
        <h2>Gépi hímzés:</h2>
        <h3>Cégeknek</h3>
        <h3>Egyéni megrendlesére</h3>
    </div>
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
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {

    },
})
</script>
<style lang="less" scoped>

.header-background{
    width: 100%;
}

.header-background img{
    width: 100%;
}
.inside-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px 0px;
}

.image-container{
    width: 600px;
    height: 650px;
}

.image-container img{
    width: 100%;
    height: 100%;
}

.title-container{
    width: 400px;
    text-align: center;
}


.title {
    position: absolute;
    top: 13%;
    left: 15%;
}
</style>