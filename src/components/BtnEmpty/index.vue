<template>
  <p :class="{ img: imgSrc }">
    <img src="//img.alicdn.com/imgextra/i1/O1CN01jkApnt1oddLPdWsQl_!!6000000005248-2-tps-24-24.png">
    <slot></slot>
  </p>
</template>

<script setup lang="ts" name="btnEmpty">
const { imgSrc } = defineProps({
  imgSrc: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
p {
  width: 85px;
  height: 30px;
  border-radius: 50px;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
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
  color: #5584ff;
  border: 1px solid rgb(245, 247, 255);
  background-color: rgb(245, 247, 255);
}

p:hover {
  border-color: #3e71f7;
}
</style>
