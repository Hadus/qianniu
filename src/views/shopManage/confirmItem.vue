<template>
  <div class="wrapper">
    <div class="block-wrapper confirm-item-wrapper">
      <div class="wrapper-left">
        <img class="task-icon" :src="item.img" alt="">
      </div>
      <div class="wrapper-right">
        <v-h3-block :hasArrow="false">
          {{ item.title }}
        </v-h3-block>
        <div class="info">
          {{ item.msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="confirmItem">
import vH3Block from '@/components/H3Header/index.vue';
const { item } = defineProps({
  item: Object
});
</script>

<style scoped>
.confirm-item-wrapper {
  min-width: 160px;
  display: flex;
  position: relative;
  background-image: linear-gradient(90deg, #f5f8ff 2%, #fff);
}

.confirm-item-wrapper .wrapper-left {
  width: 42px;
  height: 42px;
  line-height: 42px;
  font-size: 18px;
  margin-right: 20px;
}

.confirm-item-wrapper .wrapper-left img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.confirm-item-wrapper .wrapper-right {
  flex: 1;
}

.confirm-item-wrapper .wrapper-right h3 {
  font-size: 14px;
  color: #111;
}

.confirm-item-wrapper .wrapper-right .info {
  height: auto;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 19px;
  color: #666;
  padding-right: 60px;
}

.confirm-item-wrapper::after {
  content: '去完成';
  width: 56px;
  height: 30px;
  background-color: #5584ff;
  border-radius: 20px;
  position: absolute;
  right: 10px;
  top: 18px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #fff;
}
</style>
