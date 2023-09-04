

<template>
  <div class="content-wrapper">
    <div class="beard">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item>发货</el-breadcrumb-item>
        <el-breadcrumb-item>物流详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item">
      <div class="order-info">
        <div class="left">
          <div>
            <p>
              <span class="key">交易订单编号：</span><span class="value">3475009332833905518</span>
            </p>
            <p>
              <span class="key">支付时间：</span><span class="value">2023-08-13 21:10</span>
            </p>
          </div>
          <div>
            <p>
              <span>买家收货信息：</span><span>云南省昆明市呈贡区***************, 王*, ***********</span>
              <el-icon>
                <ArrowDownBold />
              </el-icon>
              <a href="javascript:;">显示</a>
            </p>
          </div>
        </div>
        <div class="right">
          <a href="javascript:;">查看发货/退货信息</a>
          <a href="javascript:;">
            <el-icon>
              <ArrowDownBold />
            </el-icon>
            回到旧版</a>
        </div>
      </div>
      <div class="wuliu-info">
        <div class="left">
          <div class="baoguo-msg">
            <h3>包裹明细</h3>
            <p><span>物流单号：</span><span>9872018204859</span></p>
            <p><span>物流公司：</span><span>邮政快递包裹</span></p>
            <p><span>发货时间：</span><span>2023-08-19 14:14:25</span></p>
            <p><span>履约单号：</span><span>LP00592625500430</span></p>
            <p><span>发货方式：</span><span>自己联系</span></p>
          </div>
          <div class="baoguo-shop">
            <h3>包裹中的商品：</h3>
            <div class="shop">
              <div class="item">
                <div>
                  <img src="//img.alicdn.com/bao/uploaded/i2/2559988253/O1CN01ebqfbj2ApvbB4SW1n_!!2559988253.jpg_sum.jpg"
                    width="48" height="48" style="border-radius: 8px; overflow: hidden; flex-shrink: 0;">
                </div>
                <div>
                  <p>
                    <a href="//trade.taobao.com/trade/detail/tradeSnap.htm?tradeId=3475009332834905518" target="_blank"
                      rel="noreferrer">紫水晶手链紫罗兰深紫单圈手串乌拉圭饰品女款乌拉圭紫紫色</a>
                  </p>
                  <span
                    style="background: rgb(239, 244, 255); border-radius: 3px; font-size: 12px; color: rgb(17, 17, 17); padding: 0 7px">
                    731836485212
                  </span>
                </div>
                <div>x 1</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h3>物流动态</h3>
          <div class="activities-wrapper">
            <el-timeline>
              <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp"
                :class="index == 0 ? 'current' : ''">
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="content">
// const { item } = defineProps({
//   item: Object,
//   test: {
//     type: String,
//     default: '1'
//   }
// })
const activities = [
  {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  },
  {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  }, {
    content: '快件已由【澜沧大水井路S公共服务站】代收，地址：粮食局里面掌上明珠对面大水井公共服务站，请及时取件，如有疑问请联系15125615801(共配站客服电话)【来自代收点】',
    timestamp: '操作时间: 2023-08-21 12:08:09  回传时间: 2023-08-21 12:11:25',
  },
]
</script>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
}

.beard {
  height: 50px;
  border: 1px solid #f0f0f0;
  line-height: 50px;
  padding: 0 20px;
}

.item {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
}

.item>.order-info {
  height: 80px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  color: #111;
  font-size: 14px;
  padding-top: 10px;
}

.item>.order-info>div.left p {
  display: inline-block;
  margin-right: 50px;
}

.item>.order-info>div.left p {
  margin-bottom: 8px;
}

.item>.order-info>div.left i {
  margin: 0 10px;
}

.item>.order-info>div.right a {
  color: #5684ff;
}

.item>.order-info>div.right a:last-child {
  color: rgb(153, 153, 153);
  margin-left: 12px;
}

.item>.wuliu-info {
  padding-top: 20px;
  flex: 1;
  display: flex;
  color: #111;
  font-size: 14px;
  height: 100%;
}

.item>.wuliu-info>div {
  flex: 1;
  height: 100%;
}

.item>.wuliu-info>div.left {
  border-right: 1px solid #f0f0f0;
}

.item>.wuliu-info>div.left h3 {
  font-weight: bolder;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}

.item>.wuliu-info>div.left p {
  line-height: 21px;
  margin-bottom: 12px;
  padding-left: 40px;
}

.item>.wuliu-info>div.left>.baoguo-shop {
  display: flex;
  padding-top: 15px;
}

.item>.wuliu-info>div.left>.baoguo-shop h3 {
  font-weight: normal;
  padding-left: 15px;
  width: 118px;
  line-height: 15px;
}

.item>.wuliu-info>div.left>.baoguo-shop>.shop {
  flex: 1;
}

.item>.wuliu-info .item {
  display: flex;
  padding: 0;
  flex-direction: row;
  padding-right: 30px;
}

.item>.wuliu-info .item>div>p {
  padding-left: 5px;
  margin-bottom: 0px;
}

.item>.wuliu-info .item>div:nth-child(2) {
  flex: 3;
  height: 100%;
  padding-left: 15px;
}

.item>.wuliu-info .item>div a {
  color: #5584ff;
}

.item>.wuliu-info .item>div:first-child {
  width: 48px;
  height: 100%;

}

.item>.wuliu-info .item>div:last-child {
  height: 100%;
  flex: 1;
}

.item>.wuliu-info>.right {
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
}

.item>.wuliu-info>.right h3 {
  line-height: 50px;
  font-weight: bolder;
  font-size: 14px;
}

.item>.wuliu-info>.right .activities-wrapper {
  padding-right: 70px;
  height: 60%;
  overflow-y: scroll;
}
</style>
<style>
.content-wrapper .el-breadcrumb {
  line-height: 50px !important;
}

.content-wrapper .el-breadcrumb__item>.el-breadcrumb__inner {
  font-weight: normal;
  font-size: 14px;
  color: rgb(102, 102, 102);
  cursor: pointer;
}

.content-wrapper .el-breadcrumb__item:last-child>.el-breadcrumb__inner {
  color: rgb(51, 51, 51);
  cursor: pointer;
}

.content-wrapper .el-breadcrumb__item>.el-breadcrumb__inner:hover {
  color: #3d7fff;
}

.content-wrapper .el-breadcrumb__item:last-child>.el-breadcrumb__inner:hover {
  color: #3d7fff;
}

.content-wrapper .el-timeline-item__tail {
  height: 50%;
  top: 22px;
  border-left: 1px solid rgb(153, 153, 153);
}

.content-wrapper .el-timeline-item__node {
  background-color: rgb(153, 153, 153);
  width: 9px;
  height: 9px;
  left: 1px;
}

.content-wrapper li.el-timeline-item .el-timeline-item__content {
  color: #999;
}

.content-wrapper li.el-timeline-item.current .el-timeline-item__content {
  color: #333;
}

.content-wrapper li.el-timeline-item.current .el-timeline-item__timestamp {
  color: #333;
}

.content-wrapper li.el-timeline-item.current .el-timeline-item__node {
  background-color: rgb(17, 17, 17);
}
</style>
