<template>
  <div>
    <Intro />
    <Article />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  Intro  from '../components/Intro.vue';
import Article from '@/components/Article.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Intro,
    Article
  },
});
</script>
