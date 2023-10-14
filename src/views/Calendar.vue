<template>
  <div class="container">
    <div class="calendar">
      <div class="calendar-radio">
        <n-space vertical>
          <n-radio-group v-model:value="currentDay" size="large">
            <n-radio-button @click="getAnimeFromSchedules(day.value)" v-for="day in daysPerWeek" :key="day.value"
              :value="day.value">
              {{ day.label }}
            </n-radio-button>
          </n-radio-group>
        </n-space>
      </div>
      <CardItem :anime-list="animePerDay" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import CardItem from "@/components/CardItem.vue";
import { getAnimeByPath } from '@/shared/api'
import { Anime } from "@/shared/types";

onMounted(() => {
  getAnimeFromSchedules(currentDay.value);
});

const animePerDay = ref<Anime[]>([]);
const daysPerWeek = ref([
  {
    label: "понедельник",
    value: "Monday",
  },
  {
    label: "вторник",
    value: "Tuesday",
  },
  {
    label: "среда",
    value: "Wednesday",
  },
  {
    label: "четверг",
    value: "Thursday",
  },
  {
    label: "пятница",
    value: "Friday",
  },
  {
    label: "суббота",
    value: "Saturday",
  },
  {
    label: "воскресенье",
    value: "Sunday",
  },
]);
const currentDay = ref(daysPerWeek.value[0].value);

const getAnimeFromSchedules = async (day: string) => {
  const response = await getAnimeByPath("schedules", {
    params: { filter: day }
  })

  animePerDay.value = response.data;
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 20px;
  max-width: 1050px;
  margin: 0 auto;
}

.calendar {
  max-width: 900px;

  &-radio {
    text-transform: capitalize;
    margin-bottom: 20px;
  }
}
</style>
