<template>
  <div class="wrapper">
    <template v-for="(item, index) in dataList">
      <div class="item" :index="index" :class="active == index ? 'active' : ''">
        <img class="RecommendationTabs_activeTagBk__T1uBx"
          src="https://gw.alicdn.com/imgextra/i1/O1CN01tyctYf1t1gZtJb9qg_!!6000000005842-55-tps-151-41.svg" alt="">
        <span>{{ item.desc }}</span>
        <i>{{ item.num }}</i>
      </div>
      <div class="array-box" v-if="index < dataList.length - 1">
        <p class="array-right">>></p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts" name="process">
const { dataList, active } = defineProps({
  dataList: Array,
  active: Number
});
</script>

<style scoped>
.wrapper {
  height: 100%;
  overflow: visible;
  display: flex;
  justify-content: space-between;
}

.item {
  height: 100%;
  cursor: not-allowed;
  position: relative;
  font-size: 12px;
  width: 116px;
  height: 36px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 36px;
  padding-left: 12px;
  background-color: #f7f8fa;
  position: relative;
}

.item img {
  display: none;
}

.item span {
  color: rgb(155, 155, 155);
  position: relative;
  z-index: 2;
}

.item i {
  display: inline-block;
  width: 23px;
  height: 18px;
  border-radius: 16px;
  text-align: center;
  line-height: 16px;
  z-index: 2;
  margin-left: 6px;
  background-color: rgb(232, 233, 235);
  position: relative;
  z-index: 3;
}

.item.active {
  cursor: pointer;
}

.item.active img {
  display: block;
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.item.active span {
  color: rgb(71, 133, 255);
}

.item.active i {
  background-color: rgb(224, 236, 255);
}

p.array-right {
  width: 6px;
  font-size: 14px;
  line-height: 36px;
  color: rgb(155, 155, 155);
}
</style>
