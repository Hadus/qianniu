<template>
  <div class="paganation-wrapper" :class="{ right: position == 'right' }">
    <el-pagination class="paganation" :layout="layout" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页"
      @current-change="(val) => { emits('currentChange', val) }" />
    <p class="confirm" v-if="layout.includes('jumper')">确定</p>
  </div>
</template>

<script setup lang="ts" name="paganation">
const { position, layout, total, pageSize } = defineProps({
  position: {
    type: String,
    default: 'center'
  },
  layout: {
    type: String,
    default: 'prev, pager, next, jumper'
  },
  total: {
    type: Number,
    default: 10
  },
  pageSize: {
    type: Number,
    default: 10
  },
});
const emits = defineEmits(['currentChange'])
</script>

<style scoped>
.paganation-wrapper {
  display: flex;
  justify-content: center;
}

.paganation-wrapper.right {
  justify-content: end;
}

.paganation-wrapper p.confirm {
  width: 60px;
  height: 36px;
  text-align: center;
  line-height: 34px;
  color: #111;
  font-size: 14px;
  border: 1px solid #c4c6cf;
  border-radius: 500px;
  cursor: pointer;
}

.paganation-wrapper p.confirm:hover {
  background-color: #f0f2f5;
}
</style>
<style>
.paganation-wrapper .el-pagination.paganation {
  width: auto;
}

.paganation-wrapper .paganation button {
  border: 1px solid #c4c6cf;
  border-radius: 500px;
  width: 82px;
  color: #111;
}

.paganation-wrapper .paganation .el-pager>li:first-child {
  margin-left: 13px;
}

.paganation-wrapper .paganation .el-pager>li {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #c4c6cf;
  margin-right: 13px;
}

.paganation-wrapper .paganation .el-pager>li.is-active {
  border-color: #3d7fff;
  background-color: #3d7fff;
  color: #fff;
}
</style>