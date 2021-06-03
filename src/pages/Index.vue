<template>
  <q-page class="q-pa-md">
    <div class="q-mb-lg">
      <q-select
        outlined
        v-model="filter"
        :options="filterOptions"
        :label="$t('filter')"
      />
    </div>
    <div class="row q-col-gutter-md">
      <q-intersection
        v-for="item in list"
        :key="item.key"
        class="col-2"
        transition="scale"
        once
      >
        <emoji-card :gitmoji="item"></emoji-card>
      </q-intersection>
    </div>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import {
  GitmojiCategory,
  gitmojiData,
} from 'src/data/gitmojiData';
import EmojiCard from 'components/EmojiCard.vue';
import { $enum } from 'ts-enum-util';
import { useI18n } from 'vue-i18n';

interface Category {
  label: string;
  value: string;
  enumKey: string;
}

const allValue = 'all';

export default defineComponent({
  name: 'PageIndex',
  components: { EmojiCard },
  setup() {
    const { t } = useI18n();
    const allOption = {
      label: t(`category.${allValue}`),
      value: allValue,
      enumKey: '',
    };
    const filter = ref<Category>(allOption);

    let categoryList: Category[] = [allOption];

    for (const [key, value] of $enum(GitmojiCategory).entries()) {
      categoryList = [
        ...categoryList,
        { label: t(`category.${key}`), value: key, enumKey: value },
      ];
    }

    const filterOptions = ref(categoryList);

    const filteredList = computed(() => {
      const filterRef = filter.value;
      if (filterRef.value === allValue) {
        return gitmojiData;
      }
      return gitmojiData.filter((row) => row.category === filterRef.value);
    });

    return {
      list: filteredList,
      filter,
      filterOptions,
    };
  },
});
</script>
