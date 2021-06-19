<template>
  <q-select
    v-model="locale"
    :label="$t('select language')"
    :options="langItems"
    outlined
    emit-value
    map-options
    dense
    dark
  >
  </q-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

const langItems = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
];

// 언어 선택기
export default defineComponent({
  name: 'LangSelect',
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      langItems,
    };
  },
});
</script>
