<template>
  <n-grid :cols="5" class="item-block">
    <n-gi v-for="item in anime">
      <div
        class="item"
        :style="{ backgroundImage: `url(${item.images.jpg.image_url})` }"
      ></div>
      <p class="anime-title">{{ truncateText(item.title) }}</p>
      <p class="episodes">
        Эпизоды: {{ item.episodes ? item.episodes : "не вышло" }}
      </p>
    </n-gi>
  </n-grid>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  anime: {
    type: Object,
    required: true,
    default: () => {},
  },
});
function truncateText(text) {
  if (text.length > 15) {
    return text.slice(0, 15) + "...";
  }
  return text;
}
</script>

<style lang="scss" scoped>
.item-block {
  display: flex;
  flex-wrap: wrap;
}
.item {
  border-radius: 10px;
  margin: 10px;
  background-color: red;
  width: 150px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
}
.anime-title {
  max-width: 150px;
  font-weight: bold;
}
.episodes {
  color: #7f7f7f;
}
.n-gi {
  overflow: hidden;
}
</style>
