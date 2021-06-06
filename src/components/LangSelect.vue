<template>
  <q-select
    v-model="locale"
    :label="$t('select language')"
    :options="langItems"
    outlined
    emit-value
    map-options
    dense
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

export default defineComponent({
  name: 'LangSelect',
  setup(prop, { emit }) {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      langItems,
    };
  },
});
</script>
