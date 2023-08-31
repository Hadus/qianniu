<template>
  <span :class="{ green: type == 'green', blue: type == 'blue' }">
    <slot></slot>
  </span>
</template>

<script setup lang="ts" name="btnSign">
const { type } = defineProps({
  type: String,
})

</script>

<style scoped>
span {
  width: 54px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-weight: normal;
  font-size: 12px;
  display: inline-block;
  border-radius: 3px;
  color: rgb(144, 159, 188);
  background-color: rgb(239, 244, 255);
}

span.green {
  color: rgb(2, 171, 203);
  background-color: rgb(229, 251, 254);
}

span.blue {
  color: rgb(61, 127, 255);
  background-color: rgb(235, 243, 255);
}
</style>
