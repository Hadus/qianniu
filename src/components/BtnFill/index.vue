<template>
  <p :class="{ img: imgSrc }">
    <img src="//img.alicdn.com/imgextra/i1/O1CN01jkApnt1oddLPdWsQl_!!6000000005248-2-tps-24-24.png">
    <slot></slot>
  </p>
</template>

<script setup lang="ts" name="btnFill">
const { imgSrc } = defineProps({
  imgSrc: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
p {
  width: 56px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all .1s linear;
  cursor: pointer;
}

p {
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all .1s linear;
  cursor: pointer;
}

p>img {
  display: none;
  height: 12px;
}

p.img>img {
  display: inline;
}

p {
  background-color: #5584ff;
  color: #fff;
}

p:hover {
  border-color: #3e71f7;
}
</style>
