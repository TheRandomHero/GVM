<template>
    <div class="my-footer">
        <div class="top-row">
            <div class="contact-wrapper">
                <div class="map">
                    <a href="https://www.google.hu/maps/place/Dunaf%C3%B6ldv%C3%A1r,+Kossuth+Lajos+u.+46,+7020/@46.8105189,18.9038811,14z/data=!4m5!3m4!1s0x4742400bdeaf40b5:0x1b8b9b05c6e377c1!8m2!3d46.8106878!4d18.9216802">
                        <img src="../assets/images/map.jpg" alt="map">
                    </a>
                </div>
                <div class="contact">
                    <h2>Contact</h2>
                    <h3>Kossuth Lajos 48</h3>
                    <h3>Dunaföldvár</h3>
                    <h3>7020</h3>
                    <h2>Telefon</h2>
                    <h3>0670/123-45678</h3>
                </div>
            </div>
            <div class="logos">
                <p><a href="https://www.facebook.com"><img src="../assets/images/SocialMediaWhiteIcons/facebook-60.png" alt="facebook"></a></p>
                <p><a href="https://www.instagram.com"><img src="../assets/images/SocialMediaWhiteIcons/instagram-60.png" alt="instagram"></a></p>
                <p><a href="https://www.tiktok.com"><img src="../assets/images/SocialMediaWhiteIcons/tiktok-60.png" alt="tiktok"></a></p>
                <p><a href="https://www.twitter.com"><img src="../assets/images/SocialMediaWhiteIcons/twitter-60.png" alt="twitter"></a></p>
            </div>
        </div>    
        <div class="bottom-row">
            <p>GVM ⓒ2022</p>
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
<style lang="less">

.my-footer{
    background-color: #ffddca;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: right;
}

.top-row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}

.bottom-row{
    width: 100%;
    text-align: center;
}

.map{
    padding: 25px;
}

.map img{
    max-width: 325px;
}

.contact-wrapper{
    display: flex;
}
.contact{
    padding: 25px 100px
}

.logos{
    display: flex;
    align-items: center;
}

.logos img{
    margin: 0px 35px
}
</style>