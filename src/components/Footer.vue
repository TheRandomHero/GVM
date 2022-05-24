<template>
    <div class="my-footer">
        <div class="follow">
            <h2>Follow</h2>
            <a href="facebook">Facebook</a>
            <a href="tiktok">Tik-Tok</a>
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
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 200px;
    justify-content: right;
}
</style>