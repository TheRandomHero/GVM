<template>
  <div class="header-background">
      <div class="header-title">
        <p>Gyakran ismetelt kerdesek</p>
      </div>
      <img src="../assets/images/tailor-s-work-desk-tailor-embroidery-background-pattern-color-sewing-threads-reels-pink-background-top-view-copyspace-colorful-threads_410521-202.webp" alt="header backgorund">
  </div>
  <div class="faq-container">
    <div class="faq" v-for="(faq,index) in faqs" :key="index" >
      <div class="faq-q" @click="faq.opened = !faq.opened">
        <p>{{faq.title}}</p>
      </div>
      <transition name="faq">
        <div class="faq-a" v-show="faq.opened" >
          <p>{{faq.descripton}}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Faq from '../types/faq'
export default defineComponent({
  setup(){
      const faqs = ref<Faq[]>([
        {opened:false, title: "Milyen anyagokat használtok?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Mennyi idő mire kész a rendelésem?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Hogy tudok fizetni?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Hogy kapom meg a megrendelésem?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Mikor tudok kapcsolatba lépni veletek?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Mit kérdezzek még?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Mekkora a kapacitás?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Van esetleg még valami?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {opened:false, title: "Milyen anyagokat használtok?", descripton:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      ])

      return {faqs}
  }
})
</script>

<style lang="less">
.header-background{
  width: 100%;
  max-height: 700px;
  overflow: hidden;
  position: relative;
}


.header-title{
  position: absolute;
  bottom:20%;
  left:18%;
  font-size: 25px;
   
}

.faq-container{
  width: 100%;
}

.faq{
  margin: 10px;
}

.faq-q{
  background-color: antiquewhite;
}

.faq-q p{
  font-size: 25px;
  margin: 0;
}

.faq-a{
  background-color:burlywood
}
.faq-a p{
  font-size: 20px;
  margin:0px;
  padding: 10px 30px; 
}
// ------------------------------------
//Transition

.faq-enter-from,
.faq-leave-to{
  transform: translateX(30px);
  opacity: 0;
}
.faq-enter-to,
.faq-leave-from{
  opacity: 1;
}
.faq-enter-active, .faq-leave-active{
  transition: all 0.5s ease-in-out;
}

</style>