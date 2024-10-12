<template>
  <div>
    <DataGrid :grid-config="gridConfig" :columns="columns" :items="items"></DataGrid>
  </div>
</template>

<script setup lang="ts">
import DataGrid from "./components/DataGrid.vue";
import {ref} from "vue";
import {IColumn} from "./utils/interfaces/dataGrid.ts";

const gridConfig = ref()
const columns = ref<IColumn[]>([
  {
    key: "first",
    title: "First",
    width: "500px",
    headStyle: "background-color: aqua",
  },
  {
    key: "second",
    title: "second",
    width: "250px"
  },
  {
    key: "third",
    title: "third"
  },
  {
    key: "forth",
    title: "forth"
  },
  {
    key: "fifth",
    title: "fifth"
  },
])
const items = ref([
  {
    first: "Amir",
    second: "Ali",
    third: "Hossein",
    forth: "Sadegh",
    fifth: "Nima",
  },
  {
    first: "Sara",
    second: "Leila",
    third: "Elham",
    forth: "Asal",
    fifth: "Nazanin",
  },
])
</script>

<style scoped>
</style>
