<script lang="ts">
export default { name: "Table" };
</script>

<script setup lang="ts">
//import
import { ElTable, ElTableColumn } from "element-plus";

//props
defineProps<{ key?: string }>();
defineEmits<{ (e: "change", value?: string): void }>();

//let
const tableData = [
  { date: "2016-05-02", name: "王小虎", address: "上海市普陀区金沙江路 1518 弄" },
  { date: "2016-05-04", name: "王小虎", address: "上海市普陀区金沙江路 1517 弄" },
  { date: "2016-05-01", name: "王小虎", address: "上海市普陀区金沙江路 1519 弄" },
  { date: "2016-05-03", name: "王小虎", address: "上海市普陀区金沙江路 1516 弄" },
];
</script>

<template>
  <div>
    <ElTable :data="tableData">
      <ElTableColumn prop="date" label="日期" width="180"></ElTableColumn>
      <ElTableColumn prop="name" label="姓名" width="180"></ElTableColumn>
      <ElTableColumn prop="address" label="地址"></ElTableColumn>
    </ElTable>
  </div>
</template>
