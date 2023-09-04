<template>
  <div class="side-wrapper">
    <div class="scroll">
      <div class="item item-home">
        <vH3Header :size="12" :hasArrow="false">
          <template #left>
            <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
            首页
          </template>
        </vH3Header>
      </div>
      <div class="item">
        <vH3Header :size="12">
          <template #left>
            <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
            商品管理
          </template>
        </vH3Header>
        <div class="menu-wrapper">
          <p>发布宝贝</p>
          <p>出售中的宝贝</p>
          <p>商品优化</p>
          <p>原创保护</p>
          <p>阿里进货管理</p>
          <p>品牌货源</p>
          <p>分销管理</p>
          <p>淘货源</p>
        </div>
      </div>
      <div class="item">
        <vH3Header :size="12">
          <template #left>
            <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
            交易管理
          </template>
        </vH3Header>
        <div class="menu-wrapper">
          <p>已卖出的宝贝</p>
          <p>发货</p>
          <p>评价管理</p>
          <p>退款管理</p>
          <p>物流工具</p>
          <p>物流服务</p>
          <p>我要寄快递</p>
          <p>知识产权</p>
          <p>改地址服务</p>
          <p>地址库</p>
          <p>加入服务</p>
        </div>
      </div>
      <div class="item">
        <vH3Header :size="12">
          <template #left>
            <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
            内容管理
          </template>
        </vH3Header>
        <div class="menu-wrapper">
          <p>店铺直播</p>
          <p>发订阅<span class="qn-aside-tag-icon"><svg t="1584930198252" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4474" width="12" height="12">
                <path
                  d="M682.666667 42.666667H341.333333c-145.066667 0-256 110.933333-256 256v341.333333c0 145.066667 110.933333 256 256 256h85.333334l51.2 76.8c0 8.533333 8.533333 8.533333 8.533333 8.533333 17.066667 17.066667 42.666667 8.533333 59.733333-8.533333l51.2-76.8h85.333334c145.066667 0 256-110.933333 256-256v-341.333333c0-145.066667-110.933333-256-256-256z m34.133333 674.133333H588.8L401.066667 341.333333v375.466667h-85.333334V238.933333h136.533334l170.666666 358.4V238.933333h85.333334v477.866667z"
                  p-id="4475" fill="#31CC31"></path>
              </svg></span>
          </p>
          <p>内容管理</p>
          <p>数据概览</p>
          <p>效果分析</p>
          <p>全部互动</p>
          <p>发店铺视频</p>
        </div>
        <div class="item">
          <vH3Header :size="12">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              店铺管理
            </template>
          </vH3Header>
          <div class="menu-wrapper">
            <p>手机店铺装修</p>
            <p>图片空间</p>
            <p>PC店铺装修</p>
            <p>店铺体检</p>
            <p>违规记录</p>
            <p>数据概览</p>
            <p>店铺账号授权</p>
            <p>线下门店管理</p>
          </div>
        </div>
        <div class="item">
          <vH3Header :size="12">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              营销中心
            </template>
          </vH3Header>
          <div class="menu-wrapper">
            <p>活动报名</p>
            <p>营销工具</p>
            <p>顺手买一件</p>
          </div>
        </div>
        <div class="item">
          <vH3Header :size="12">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              推广管理
            </template>
          </vH3Header>
          <div class="menu-wrapper">
            <p>直通车</p>
            <p>推广中心</p>
            <p>极速推</p>
            <p>万相台</p>
          </div>
        </div>
        <div class="item">
          <vH3Header :size="12">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              用户运营
            </template>
          </vH3Header>
          <div class="menu-wrapper">
            <p>淘宝群</p>
            <p>会员运营</p>
            <p>老客运营</p>
            <p>策略效果</p>
          </div>
        </div>
        <div class="item">
          <vH3Header :size="12">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              客服管理
            </template>
          </vH3Header>
          <div class="menu-wrapper">
            <p>接待数据</p>
            <p>现场管理</p>
            <p>接待工具</p>
          </div>
        </div>
        <div class="item">
          <vH3Header :size="12">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              财务管理
            </template>
          </vH3Header>
          <div class="menu-wrapper">
            <p>提前收款</p>
          </div>
        </div>
        <div class="item">
          <vH3Header :size="12" :hasArrow="false">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              数据中心
            </template>
          </vH3Header>
        </div>
        <div class="item">
          <vH3Header :size="12" :hasArrow="false">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              服务
            </template>
          </vH3Header>
        </div>
        <div class="item">
          <vH3Header :size="12">
            <template #left>
              <img src="https://openworkbench.oss-cn-hangzhou.aliyuncs.com/4c60b37976e448d39a25bcb40beee8c7.png" alt="">
              应用
            </template>
          </vH3Header>
          <p class="booked">
            我订购的应用
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts" name="side">
import vH3Header from '@/components/H3Header';
// const { item } = defineProps({
//   item: Object,
//   test: {
//     type: String,
//     default: '1'
//   }
// })
</script>

<style scoped>
.side-wrapper {
  overflow-y: scroll;
}

.side-wrapper .scroll {
  width: 100%;
  padding: 12px;
}

.side-wrapper .item {
  margin-bottom: 18px;
}

.side-wrapper .item h3 {
  font-size: 14px;
  padding-left: 5px;
  line-height: 37px;
  cursor: pointer;
}

.side-wrapper .item h3:hover {
  background-color: #f7f8fa;
}

.side-wrapper .item h3 img {
  height: 16px;
  width: 16px;
  vertical-align: sub;
  margin-right: 10px;
}

.side-wrapper .item.item-home h3 {
  color: #3d7fff;
  background-color: #f7f8fa;
}

.side-wrapper .item.item-home h3:hover {
  background-color: #f7f8fa;
}

.side-wrapper .menu-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}

.side-wrapper .menu-wrapper>p {
  width: 50%;
  font-size: 12px;
  color: #737373;
  cursor: pointer;
  line-height: 35px;
}

.side-wrapper .item>p {}
</style>
