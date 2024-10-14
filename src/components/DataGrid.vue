<template>
  <div class="data-grid_wrapper" :dir="props.gridConfig.direction">
    <div class="data-grid">
      <div class="data-grid_header">
        <div class="data-grid_header__row">
          <div v-for="col in props.columns" :key="col.key" class="head-col" :class="[`text-${props.gridConfig.textAlign}`]" :style="{ flex: `0 0 ${col.width}` }">
            {{ col.title }}
          </div>
        </div>
      </div>
      <div class="data-grid_content">
        <div class="data-grid_content__row" v-for="(row, index) in props.items" :key="index">
          <div v-for="col in props.columns" :key="col.key" class="cell" :class="[`text-${props.gridConfig.textAlign}`]" :style="[{ flex: `0 0 ${col.width}` }, col.style]">
            {{ row[col.key] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IColumn, IGridConfig} from "../utils/interfaces/dataGrid.ts";
import {INITIAL_GRID_CONFIG} from "../utils/constants/dataGrid.ts";

interface IProps {
  gridConfig: IGridConfig;
  columns: IColumn[];
  items: any[];
}

const props = withDefaults(defineProps<IProps>(), {
  gridConfig: () => INITIAL_GRID_CONFIG,
})
</script>
<style scoped lang="scss">
.data-grid {
  &_wrapper {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px;
  }
  &_header {
    margin-bottom: 16px;
    &__row {
      display: flex;
      height: 48px;
      .head-col {
        color: black;
        flex: 1 1 auto;
        width: 100%;
        font-weight: 500;
        display: flex;
        align-items: center;
        &.text-start {
          text-align: start;
          justify-content: start;
        }
        &.text-center {
          text-align: center;
          justify-content: center;
        }
        &.text-end {
          text-align: end;
          justify-content: end;
        }
      }
    }
  }
  &_content {
    &__row {
      display: flex;
      background-color: #f2f8ff;
      border-radius: 10px;
      padding: 16px 0;
      margin-bottom: 8px;
      .cell {
        color: black;
        flex: 1 1 auto;
        width: 100%;
        border-inline-end: 1px solid #ffffff;
        &.text-start {
          text-align: start;
        }
        &.text-center {
          text-align: center;
        }
        &.text-end {
          text-align: end;
        }
      }
    }
  }
}
</style>