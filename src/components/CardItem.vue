<template>
  <n-space>
    <div class="item" v-for="anime in  animeList " :key="anime.mal_id">
      <n-grid :cols="1" class="item-grid">
        <n-gi>
          <n-image object-fit='cover' :src="anime.images.jpg.image_url" width="150" height="200" />
        </n-gi>
        <n-gi>
          <n-p class="item-title">
            {{ anime.title }}
          </n-p>
        </n-gi>
        <n-gi>
          <n-p class="item-episodes">
            Эпизоды: {{ anime.episodes ?? "не вышло" }}
          </n-p>
        </n-gi>
      </n-grid>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import type { Anime } from '@/shared/types'

defineProps<{ animeList: Anime[] }>()
</script>

<style lang="scss" scoped>
.item {
  height: 100%;
  margin: 0;

  &-grid {
    height: 100%;
  }

  &-title {
    height: 100%;
    max-width: 150px;
    font-weight: bold;
  }

  &-episodes {
    color: #7f7f7f;
    // FIX
    height: 100%;
    vertical-align: bottom;
  }
}
</style>
