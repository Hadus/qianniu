<template>
  <div class="empty">
    <div class="empty-image">
      <img alt="empty" src="https://img.alicdn.com/imgextra/i3/O1CN01zEhOem20tuj9wrbDk_!!6000000006908-2-tps-780-456.png">
    </div>
    <div class="empty-desc">
      暂无审核中证照
    </div>
  </div>
</template>

<script setup lang="ts" name="shopQAEmpty">
// const { item } = defineProps({
//   item: Object,
//   test: {
//     type: String,
//     default: '1'
//   }
// })

</script>

<style scoped>
.container {
  width: 960px;
  margin: 0 auto;
  background-color: skyblue;
}

.empty {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
}

.empty>div {
  width: 170px;
}

.empty-image {
  height: 100px;
}

.empty-desc {
  color: #666;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
  text-align: center;
}

img {
  height: 100%;
}
</style>
