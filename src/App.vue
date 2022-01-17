<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';

export default defineComponent({
  name: 'App',
  setup() {
    useMeta({
      // sets document title
      title: '깃모지(gitmoji) by js',

      // meta tags
      meta: {
        description: {
          name: 'description',
          content: '깃모지(gitmoji)를 한글로 분류해서 정리한 사이트입니다.',
        },
        keywords: {
          name: 'keywords',
          content: 'gitmoji,깃모지,gitmoji 한글,gitmoji category,깃모지 분류,gitmoji kr,gitmoji korean,git emoji',
        },
        equiv: {
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=UTF-8',
        },
        // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
        ogTitle: {
          name: 'og:title',
          content: '깃모지(gitmoji) by js',
        },
      },
    });
  },
});
</script>
