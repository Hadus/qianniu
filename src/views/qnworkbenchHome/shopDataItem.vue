<template>
  <div class="wrapper">
    <p class="desc">{{ item.desc }}</p>
    <p class="num">
      {{ item.num }}<i v-if="item.type">%</i>
    </p>
    <p class="stat">
      昨日
      <span>{{ item.stat }}<i v-if="item.type">%</i></span>
    </p>
  </div>
</template>

<script setup lang="ts" name="shopDataItem">
const { item } = defineProps({
  item: Object
})
</script>

<style scoped>
.wrapper {
  border-radius: 12px;
  background-color: #f7f8fa;
  padding: 12px 18px;
  margin-bottom: 18px;
  cursor: pointer;
  height: 90px;
}

p.desc {
  font-size: 12px;
  color: #666;
  letter-spacing: 0;
  line-height: 1
}

p.num {
  font-size: 27px;
  color: #111;
  letter-spacing: 0;
  line-height: 1;
  margin: 7px 0 7px;
}

p.num i {
  font-size: 20px;
}

p.stat {
  font-size: 12px;
  color: #666;
  letter-spacing: 0;
  line-height: 1
}

p.stat span {
  font-family: AlibabaSans102-Medium;
  font-size: 13px;
  color: #333;
}
</style>
