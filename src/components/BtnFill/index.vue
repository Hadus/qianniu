<template>
  <p class="btn-fill" :class="{ img: imgSrc, normal: size == 'normal', blank: type == 'blank' }">
    <img src="//img.alicdn.com/imgextra/i1/O1CN01jkApnt1oddLPdWsQl_!!6000000005248-2-tps-24-24.png" v-if="false">
    <slot></slot>
  </p>
</template>

<script setup lang="ts" name="btnFill">
const { imgSrc, size, type } = defineProps({
  imgSrc: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
p.btn-fill {
  display: inline-block !important;
  min-width: 56px;
  height: 30px;
  padding: 0 15px;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  font-size: 12px;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all .1s linear;
  cursor: pointer;
  display: flex;
  border: 1px solid transparent;
  font-weight: normal;
}

p.btn-fill {
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all .1s linear;
  cursor: pointer;
}

p.btn-fill>img {
  display: none;
  height: 12px;
}

p.btn-fill.img>img {
  display: inline;
}

p.btn-fill {
  background-color: #5584ff;
  color: #fff;
}

p:hover {
  border-color: #3e71f7;
}

p.btn-fill.normal {
  height: 36px;
  line-height: 36px;
  font-size: 14px;
}

p.btn-fill.blank {
  color: #111;
  border-color: rgb(210, 211, 218);
  background-color: #fff;
}
</style>
