<template>
  <q-card class="emoji-card" flat bordered>
    <q-card-section
      class="emoji-card-section"
      :data-clipboard-text="gitmoji.emoji"
      @click="onClickEmoji(gitmoji)"
    >
      <div class="emoji-card__emoji">
        {{ gitmoji.emoji }}
      </div>
      <div class="emoji-card__emoji-text text-center text-grey-6">
        :{{ gitmoji.key }}:
      </div>
      <q-tooltip class="bg-dark" anchor="top middle">
        {{ $t('click to copy') }}
      </q-tooltip>
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
import { useI18n } from 'vue-i18n';

// 이모지 표시 카드
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
    const { t } = useI18n();

    const onClickEmoji = (gitmoji: GitmojiData) => {
      $q.notify({
        type: 'info',
        message: `${t('clipboard copied!')} ${gitmoji.emoji}`,
      });
    };

    onMounted(() => {
      new ClipboardJS('.emoji-card-section');
    });

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
    &-text {
      // chart_with_upwards_trend 글자가 카드 크기를 넘어가지 않도록 수정
      font-size: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: -0.5px;
    }
  }
  &__desc {
    font-size: 1em;
    cursor: text;
  }
}
</style>
