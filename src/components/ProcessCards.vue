<template>
    <div class="cards-container">
        <div class="cards">
            <img src="../assets/images/contact.png" alt="contact">
            <p class="card-text">Ha felkeltettük érdeklődését, lépjen velünk kapcsolatba. Telefonon, emailen vagy akár személyesen a megadott címen.</p>
        </div>
        <div class="cards">
            <img src="../assets/images/design-thinking_64px.png" alt="design">
            <p class="card-text">Egyeztetés után elkezdjük tervezni a megadott adatok alapján, vagy az Ön ötletei küldje el nekünk email címünkre</p>
        </div>
        <div class="cards">
            <img src="../assets/images/delivered.png" alt="delivered">
            <p class="card-text">Ha elégedett a termékkel, fizetés után rögtön átveheti személyesen vagy kérheti postázással is</p>
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
<style lang="less">
.cards-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    text-align: center;
    padding: 50px 0px;
}
.card-text{
    max-width: 150px;
    font-size: 20px;
}
</style>