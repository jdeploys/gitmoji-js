<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-header">
      <q-toolbar>
        <q-toolbar-title>{{ $t('gitmoji') }} js</q-toolbar-title>
        <q-btn
          icon="help_outline"
          :label="$t('how to use?')"
          outline
          @click="isShowHowToModal = true"
        ></q-btn>

        <lang-select class="q-mx-lg" style="width: 120px" />
        <q-btn outline @click="onClickGithubLink">github</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer class="footer q-pa-md">
      <div class="row">
        <div class="col self-center">
          <q-tooltip>{{ $t('please donate') }}</q-tooltip>
          <q-btn
            icon="local_cafe"
            :label="$t('did you like this page?')"
            flat
            @click="onClickDonate"
          ></q-btn>
        </div>
        <div class="col self-center column items-end">written by jdeploys.</div>
      </div>
    </footer>
    <q-dialog v-model="isShowHowToModal">
      <div class="bg-white q-px-lg q-pb-md">
        <how-to-use />
      </div>
    </q-dialog>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LangSelect from 'components/LangSelect.vue';
import HowToUse from 'components/HowToUse.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { HowToUse, LangSelect },
  setup() {
    const isShowHowToModal = ref(false);

    return {
      isShowHowToModal,
      onClickDonate: () => {
        window.location.href = 'https://paypal.me/jdeploys?locale.x=ko_KR';
      },
      onClickGithubLink: () => {
        window.location.href = 'https://github.com/jdeploys/gitmoji-js';
      },
    };
  },
});
</script>
