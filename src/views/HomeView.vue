<template>
    <block-with-title />
    <Article />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  BlockWithTitle  from '../components/BlockWithTitle.vue';
import Article from '@/components/Article.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    BlockWithTitle,
    Article
  },
});
</script>
