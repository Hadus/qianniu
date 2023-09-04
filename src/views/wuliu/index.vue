<template>
  <div class="wuliu-wrapper">
    <v-head class="wuliu-head" />
    <div class="bot">
      <v-side class="wuliu-side" />
      <v-content class="wuliu-content" />
    </div>
  </div>
</template>

<script setup lang="ts" name="wuliu">
import vHead from './head.vue';
import vSide from './side.vue';
import vContent from './content.vue';
</script>

<style scoped>
.wuliu-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.wuliu-head {
  width: 100%;
  height: 97px;
  border-bottom: 1px solid #f0f0f0;
}

.wuliu-wrapper>.bot {
  flex: 1;
  display: flex;
  height: 100%;
}

.wuliu-wrapper>.bot>div {
  height: 100%;
}

.wuliu-side {
  width: 198px;
  border-right: 1px solid #f0f0f0;
}

.wuliu-content {
  flex: 1;
}

.wuliu-coontent {}
</style>
