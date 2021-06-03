<template>
  <q-card class="emoji-card" flat bordered>
    <q-card-section>
      <div
        class="emoji-card__emoji"
        :data-clipboard-text="gitmoji.emoji"
        @click="onClickEmoji(gitmoji)"
      >
        {{ gitmoji.emoji }}
      </div>
      <q-tooltip>Click to Copy!</q-tooltip>
    </q-card-section>
    <q-separator inset />
    <q-card-section>
      <div class="emoji-card__desc">{{ $t(`desc.${gitmoji.key}`) }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from 'vue';
import { GitmojiData } from 'src/data/gitmojiData';
import ClipboardJS from 'clipboard';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'EmojiCard',
  props: {
    gitmoji: {
      type: Object as PropType<GitmojiData>,
      required: true,
    },
  },
  setup() {
    const $q = useQuasar();

    const onClickEmoji = (gitmoji: GitmojiData) => {
      $q.notify({
        type: 'positive',
        message: `클립보드에 복사되었어요! ${gitmoji.emoji}`,
      });
    };

    onMounted(() => new ClipboardJS('.emoji-card__emoji'));

    return {
      onClickEmoji,
    };
  },
});
</script>

<style lang="scss">
.emoji-card {
  min-height: 180px;
  font-family: Binggrae;
  cursor: pointer;

  &__emoji {
    text-align: center;
    font-size: 3em;
  }
  &__desc {
    font-size: 1em;
    cursor: text;
  }
}
</style>