<template>
  <div class="order-item-info">
    <div class="left">
      <a href="//trade.taobao.com/trade/detail/tradeSnap.htm?tradeID=3503107335644061564&amp;snapShot=true"
        target="_blank" class="bdrad12"><img
          src="//img.alicdn.com/imgextra/i1/2559988253/O1CN012Xkbfk2ApvbD3ECCI_!!2559988253.jpg_sum.jpg"
          alt="product-img"></a>
    </div>
    <div class="right">
      <p class="title">
        <a href="//trade.taobao.com/trade/detail/tradeSnap.htm?tradeID=3503107335644061564&amp;snapShot=true"
          target="_blank">保山南红手链手串佛珠满肉柿子红挂件吊坠川料南红手串真品</a>
      </p>
      <p class="type">
        <span class="key">颜色分类：</span><span class="value">大伟2号链接</span>
      </p>
      <p class="baoyou">
        <a title="消费者保障服务，卖家承诺7天无理由退换货"
          href="https://liveplatform.taobao.com/restful/index/shop/shop-rule?lastCategoryId=1351&amp;ruleId=20000865#/DetailRule"
          target="_blank"><img src="//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="消费者保障服务，卖家承诺7天无理由退换货"></a>
      </p>
      <p class="fahuo">
        <span class="key">发货时间：</span><span class="value">09月04日 13:33前发货</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts" name="filterInput">
const { type } = defineProps({
  type: {
    type: String,
    default: ''
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