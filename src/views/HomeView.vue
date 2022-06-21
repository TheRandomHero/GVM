<template>
    <block-with-title />
    <block-with-title-left />
    <homescreen-gallery />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  BlockWithTitle  from '../components/BlockWithTitle.vue';
import  BlockWithTitleLeft  from '../components/BlockWithTitleLeft.vue';
import HomescreenGallery from '../components/HomescreenGallery.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    BlockWithTitle,
    BlockWithTitleLeft,
    HomescreenGallery
  },
});
</script>
