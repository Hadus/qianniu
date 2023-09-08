<template>
  <div class="order-item-info">
    <div class="left">
      <a :href="itemData.itemInfo.itemUrl" target="_blank" class="bdrad12"><img :src="itemData.itemInfo.pic"
          alt="product-img"></a>
    </div>
    <div class="right">
      <p class="title">
        <a href="//trade.taobao.com/trade/detail/tradeSnap.htm?tradeID=3503107335644061564&amp;snapShot=true"
          target="_blank">{{ itemData.itemInfo.title }}</a>
      </p>
      <p class="type">
        <span class="key">{{ itemData.itemInfo.skuText[0].name }}：</span><span class="value">{{
          itemData.itemInfo.skuText[0].value }}</span>
      </p>
      <p class="baoyou">
        <a title="消费者保障服务，卖家承诺7天无理由退换货"
          href="https://liveplatform.taobao.com/restful/index/shop/shop-rule?lastCategoryId=1351&amp;ruleId=20000865#/DetailRule"
          target="_blank"><img src="//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="消费者保障服务，卖家承诺7天无理由退换货"></a>
      </p>
      <p class="fahuo">
        <span class="key">{{ itemData.itemInfo.extra[0].name }}：</span><span class="value">{{
          itemData.itemInfo.extra[0].value }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts" name="filterInput">
const { itemData } = defineProps({
  itemData: {
    type: Object,
  },
})
</script>

<style scoped>
.order-item-info {
  display: flex;
  height: 126px;
  padding: 18px;
}

.order-item-info .left>a {
  display: flex;
  width: 89px;
  height: 89px;
  overflow: hidden;
}

.order-item-info .right p {
  line-height: 22px;
  padding: 0;
  font-size: 12px;
  height: 22px;
  text-align: left;
}

.order-item-info .right {
  margin-left: 18px;
}

.order-item-info .right .title a {
  display: inline-block;
  color: #3d7fff;
  background-color: #fff;
  max-width: 300px;
  min-width: 220px;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}

.order-item-info .right .type {
  color: #999;
}

.order-item-info .right .baoyou>a {
  height: 16px;
  width: 16px;
}

.order-item-info .right .fahuo {
  color: #111;
}
</style>