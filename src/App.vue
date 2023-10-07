<template>
  <n-config-provider :theme="theme">
    <the-header title="jikkai"></the-header>
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui';
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';
import { ref } from 'vue';

const theme = ref<BuiltInGlobalTheme>(lightTheme)
// const changeTheme = () => {
//   theme.value = theme.value.name === 'light' ? darkTheme : lightTheme;
// }
</script>