<template>
  <n-layout-header bordered>
    <n-grid x-gap="8" :cols="8" align="center">
      <n-gi span="2" offset="1">
        <n-h1 class="title">{{ title }}</n-h1>
      </n-gi>
      <n-gi span="2">
        <n-space size="medium" align="center" class="nav" justify="space-around">
          <template v-for="route in router.options.routes" :key="route.path">
            <router-link to="/" custom>
              <n-a :href="route.path">
                {{ route.name }}
              </n-a>
            </router-link>
          </template>
        </n-space>
      </n-gi>
      <n-gi span="2">
        <search />
      </n-gi>
    </n-grid>
  </n-layout-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
defineProps<{ title: string }>()
</script>

<style scoped>
.title {
  margin: 0;
}

.nav {
  height: 100%;
}
</style>