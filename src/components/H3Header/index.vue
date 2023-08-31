<template>
  <h3>
    <span class="title">
      <slot></slot>
    </span>
    <slot name="left"></slot>
    <div class="h-right">
      <slot name="right"></slot>
      <el-icon :size="14" v-if="true">
        <ArrowRight />
      </el-icon>
    </div>
  </h3>
</template>

<script setup lang="ts" name="h3Block">
</script>

<style scoped>
h3 {
  font-size: 18px;
  color: #333;
  line-height: 24px;
  font-weight: normal;
  margin-bottom: 16px;
  background-color: pink;
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
