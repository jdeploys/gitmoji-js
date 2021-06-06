<template>
  <q-page class="q-pa-md">
    <q-page-sticky class="header-toolbar q-pa-md" position="top" expand>
      <div class="full-width row">
        <filter-select class="col"></filter-select>
        <q-toggle v-model="expanded" :label="$t('expand')" />
      </div>
    </q-page-sticky>
    <q-expansion-item
      v-for="(items, index) in list"
      :key="`grouped_${index}`"
      :label="$t(`category.${items[0].category}`)"
      :model-value="expandedCategory[items[0].category]"
    >
      <div class="row q-col-gutter-md">
        <q-intersection
          v-for="item in items"
          :key="item.key"
          class="col-2 col-md-2 col-sm-3 col-xs-12"
          transition="scale"
          once
        >
          <emoji-card :gitmoji="item"></emoji-card>
        </q-intersection>
      </div>
    </q-expansion-item>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import {
  GitmojiCategory,
  GitmojiData,
  gitmojiData,
} from 'src/data/gitmojiData';
import EmojiCard from 'components/EmojiCard.vue';
import { CATEGORY_ALL } from 'components/types';
import FilterSelect from 'components/FilterSelect.vue';
import { uiStore } from 'src/store/ui/UIModule';
import { groupBy } from 'lodash';
import { $enum } from 'ts-enum-util';

export default defineComponent({
  name: 'PageIndex',
  components: { FilterSelect, EmojiCard },
  setup() {
    const filter = computed(() => uiStore.filter);

    const filteredList = computed(() => {
      const filterRef = filter.value;
      if (!filterRef || filterRef.value === CATEGORY_ALL) {
        // @ts-ignore
        return groupBy(gitmojiData, (row: GitmojiData) => row.category);
      }
      const filtered = gitmojiData.filter(
        (row) => row.category === filterRef.value
      );
      // @ts-ignore
      return groupBy(filtered, (row: GitmojiData) => row.category);
    });

    const expanded = computed({
      get: () => uiStore.expanded,
      set: (value) => uiStore.updateExpanded(value),
    });

    let expandedCategory: { [key: string]: boolean } = {};

    for (const [, value] of $enum(GitmojiCategory).entries()) {
      expandedCategory = {
        ...expandedCategory,
        [value]: true,
      };
    }

    const refExpandedCategory = ref(expandedCategory);

    watch(expanded, (value) => {
      Object.keys(expandedCategory).forEach((key) => {
        if (refExpandedCategory.value.hasOwnProperty(key)) {
          refExpandedCategory.value[key] = value;
        }
      });
    });

    return {
      list: filteredList,
      expandedCategory: refExpandedCategory,
      expanded,
    };
  },
});
</script>
