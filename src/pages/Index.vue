<template>
  <q-page class="q-pa-md">
    <div class="q-mb-lg">
      <filter-select></filter-select>
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
import { computed, defineComponent } from 'vue';
import { gitmojiData } from 'src/data/gitmojiData';
import EmojiCard from 'components/EmojiCard.vue';
import { CATEGORY_ALL } from 'components/types';
import FilterSelect from 'components/FilterSelect.vue';
import { uiStore } from 'src/store/ui/UIModule';

export default defineComponent({
  name: 'PageIndex',
  components: { FilterSelect, EmojiCard },
  setup() {
    const filter = computed(() => uiStore.filter);

    const filteredList = computed(() => {
      const filterRef = filter.value;
      if (!filterRef || filterRef.value === CATEGORY_ALL) {
        return gitmojiData;
      }
      return gitmojiData.filter((row) => row.category === filterRef.value);
    });

    return {
      list: filteredList,
    };
  },
});
</script>
