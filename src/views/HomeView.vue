<template>
  <my-header />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  MyHeader  from '../components/MyHeader.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    MyHeader,
  },
});
</script>
