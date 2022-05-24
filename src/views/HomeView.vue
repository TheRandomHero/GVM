<template>
    <block-with-title />
    <block-with-title-left />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  BlockWithTitle  from '../components/BlockWithTitle.vue';
import  BlockWithTitleLeft  from '../components/BlockWithTitleLeft.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    BlockWithTitle,
    BlockWithTitleLeft
  },
});
</script>
