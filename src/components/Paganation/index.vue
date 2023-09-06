<template>
  <div class="paganation-wrapper" v-if="type == 'select'">
    <el-pagination layout="prev, pager, next, jumper" :total="50" class="paganation-wrapper" prev-text="上一页"
      next-text="下一页" />
  </div>
</template>

<script setup lang="ts" name="paganation">
const { type } = defineProps({
  type: {
    type: String,
    default: ''
  },
})
</script>

<style scoped>
.paganation-wrapper {}
</style>
<style>
.paganation-wrapper button {
  border: 1px solid #c4c6cf;
  border-radius: 500px;
  width: 82px;
  color: #111;
}

.paganation-wrapper .el-pager>li:first-child {
  margin-left: 13px;
}

.paganation-wrapper .el-pager>li {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #c4c6cf;
  margin-right: 13px;
}

.paganation-wrapper .el-pager>li.is-active {
  border-color: #3d7fff;
  background-color: #3d7fff;
  color: #fff;
}
</style>