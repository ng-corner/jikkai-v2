<template>
  <div class="container">
    <div class="calendar">
      <div class="">
        <n-space vertical>
          <n-radio-group
            v-model:value="value"
            name="radiobuttongroup3"
            size="large"
          >
            <n-radio-button
              @click="Calendar(song.value)"
              v-for="song in songs"
              :key="song.value"
              :value="song.value"
            >
              {{ song.label }}
            </n-radio-button>
          </n-radio-group>
        </n-space>
      </div>
      <CardItem :anime="animes" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CardItem from "../components/CardItem.vue";

const value = ref();
const animes = ref([]);
const songs = ref([
  {
    label: "понедельник ",
    value: "Monday",
  },
  {
    label: "вторник ",
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

const Calendar = async (day: string = "Monday") => {
  animes.value = await fetch(`https://api.jikan.moe/v4/schedules?filter=${day}`)
    .then((data) => data.json())
    .then((res) => res.data);
  console.log(animes.value);
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 20px;
  max-width: 1050px;
  margin: 0 auto;
}
.calendar {
  max-width: 900px;
}
</style>
