<template>
  <q-select
    ref="qSelect"
    v-model="filter"
    :options="filterOptions"
    :label="$t('filter')"
    outlined
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { Category, CATEGORY_ALL } from 'components/types';
import { useI18n } from 'vue-i18n';
import { $enum } from 'ts-enum-util';
import { GitmojiCategory } from 'src/data/gitmojiData';
import { uiStore } from 'src/store/ui/UIModule';

export default defineComponent({
  name: 'FilterSelect',
  setup() {
    const { t, locale } = useI18n();

    // data generate
    const makeCategoryList = () => {
      let categoryList: Category[] = [allOption];

      for (const [key, value] of $enum(GitmojiCategory).entries()) {
        categoryList = [
          ...categoryList,
          { label: t(`category.${key}`), value: key, enumKey: value },
        ];
      }

      return categoryList;
    };

    const makeAllOption = () => {
      return {
        label: t(`category.${CATEGORY_ALL}`),
        value: CATEGORY_ALL,
        enumKey: '',
      };
    };

    let allOption = makeAllOption();
    const refCategoryList = ref(makeCategoryList());

    // init
    uiStore.updateFilter(allOption);

    // locale change issue
    watch(locale, () => {
      allOption = makeAllOption();
      const categoryList = makeCategoryList();
      refCategoryList.value = categoryList;
      // update label
      uiStore.updateFilter(
        categoryList.find((row) => row.value === uiStore.filter?.value) ||
          allOption
      );
    });

    return {
      filter: computed({
        get: () => uiStore.filter,
        set: (value) => uiStore.updateFilter(value || allOption),
      }),
      filterOptions: refCategoryList,
    };
  },
});
</script>
