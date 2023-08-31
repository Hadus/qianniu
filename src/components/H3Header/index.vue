<template>
  <h3>
    <span class="title">
      <slot></slot>
    </span>
    <slot name="left"></slot>
    <div class="h-right">
      <slot name="right"></slot>
      <el-icon v-if="hasArrow" :size="size">
        <ArrowRight />
      </el-icon>
    </div>
  </h3>
</template>

<script setup lang="ts" name="h3Block">
const { hasArrow, size } = defineProps({
  hasArrow: {
    type: Boolean,
    default: true
  },
  size: {
    type: Number,
    default: 14
  }
});
</script>

<style scoped>
h3 {
  font-size: 18px;
  color: #333;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  background-color: #fff;
}

h3 .h-right {
  float: right;
}

h3 .h-right i {
  position: relative;
  top: 2px;
}

h3 .h-right span {
  color: hsla(0, 0%, 40%);
  font-size: 14px;
  margin-right: 10px;
  margin-left: 5px;
}
</style>
