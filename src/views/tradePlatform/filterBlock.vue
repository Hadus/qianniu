<template>
  <div class="row">
    <v-filter-input class="row-input" label="订单编号" />
    <v-filter-input class="row-input" label="物流编号" />
    <v-filter-input class="row-input" label="订单状态" type="select" />
    <v-filter-input class="row-input" label="预售状态" type="select" />
    <v-filter-input class="row-input" label="售后服务" type="select" />
    <v-filter-input class="row-input" label="商品ID" />
    <v-filter-input class="row-input" label="宝贝名称" />
    <v-filter-input class="row-input" label="买家昵称" />
    <v-filter-input class="row-input" label="催发货订单" />
    <v-filter-input class="row-input" label="" type="blank" />
    <v-filter-input class="row-input" label="创建时间" type="date" />
    <v-filter-input class="row-input" label="付款时间" type="date" />
    <v-filter-input class="row-input" label="评价状态" type="select" />
    <v-filter-input class="row-input" label="物流服务" type="select" />
    <v-filter-input class="row-input" label="交易类型" type="select" holder="所有类型" />
    <v-filter-input class="row-input" label="订单状态" type="select" />
  </div>
</template>

<script setup lang="ts" name="filterBlock">
import vFilterInput from './filterInput.vue';
// const { item } = defineProps({
//   item: Object,
//   test: {
//     type: String,
//     default: '1'
//   }
// })
</script>

<style scoped>
.row {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.row>div.row-input {
  margin-right: 14px;
  margin-bottom: 18px;
}
</style>