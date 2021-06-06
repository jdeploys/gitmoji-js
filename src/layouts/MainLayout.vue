<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-pale-pink">
      <q-toolbar>
        <q-toolbar-title>{{ $t('gitmoji') }} js</q-toolbar-title>

        <lang-select class="q-mx-lg" style="width: 120px" />
        <q-btn outline @click="onClickGithubLink">github</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LangSelect from 'components/LangSelect.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { LangSelect },
  setup() {
    return {
      onClickGithubLink: () => {
        window.location.href = 'https://github.com/jdeploys/gitmoji-js';
      },
    };
  },
});
</script>
