<template>
  <div class="advert-view-container">
    <el-row :gutter="10">
      <el-col :span="17">
        <div class="advert-view-item">
          <el-row>
            <el-col :span="13">
              <el-carousel
                trigger="click"
                arrow="never"
                :autoplay="false"
                :loop="true"
                height="170px"
              >
                <el-carousel-item key="actionEffect">
                  <div class="carousel-item">
                    <div class="title">
                      行动效果<i
                        style="padding-left: 5px"
                        class="niceFonts-tooltip"
                      ></i>
                    </div>
                    <div class="item-content">
                      <div style="line-height: 28px">
                        <span class="ds-link-type" style="margin-right: 10px"
                          >成交加速</span
                        >
                        <el-link>
                          近期无宝贝使用万相台，使用万相台快速成交破零></el-link
                        >
                      </div>
                      <div style="line-height: 28px">
                        <span class="ds-link-type" style="margin-right: 10px"
                          >提升搜索</span
                        >
                        <el-link> 试试直通车极简计划，加速店铺起量></el-link>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
                <el-carousel-item key="merchantVideo">
                  <div class="carousel-item">
                    <div class="title">商家短视频</div>
                    <div class="item-content">
                      <div style="display: flex">
                        <div class="merchant-video-text" style="width: 33%">
                          天猫国际
                        </div>
                        <div class="merchant-video-text" style="width: 33%">
                          内容分析
                        </div>
                        <div class="merchant-video-text" style="width: 33%">
                          商家短视频
                        </div>
                      </div>
                      <div>
                        <div class="merchant-video-text">天猫海外</div>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-col>
            <el-col :span="11">
              <div class="carousel-item">
                <div class="title">学堂早知道</div>
                <div class="item-content">
                  <span class="ds-link-type" style="margin-right: 10px"
                    >必看</span
                  >
                  <el-link> 快速提升流程及转化</el-link>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="advert-view-item">
          <el-carousel
            trigger="click"
            arrow="never"
            :loop="true"
            height="170px"
          >
            <el-carousel-item key="1">
              <img
                style="width: 100%; height: 170px"
                src="@/assets/img/data/business1.png"
              />
            </el-carousel-item>
            <el-carousel-item key="2">
              <img
                style="width: 100%; height: 170px"
                src="@/assets/img/data/business2.png"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.advert-view-container {
  margin-top: 10px;
  margin-bottom: 10px;
}

.advert-view-item {
  background: #fff;
  box-shadow: var(--el-box-shadow-light);
}

.carousel-item {
  padding: 10px 20px;
}

.carousel-item .title {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
}

.ds-link-type {
  border-radius: 2px;
  padding: 1px 4px;
  margin-right: 6px;
  line-height: normal;
  display: inline-block;
  border: 1px solid rgb(255, 133, 51);
  color: rgb(255, 133, 51);
  font-size: 12px;
}

.advert-view-item :deep(.el-link__inner) {
  font-size: 12px;
  font-weight: 400;
}

.advert-view-item :deep(.el-carousel__arrow) {
  opacity: 0;
}

.advert-view-item
  :deep(.el-carousel__indicators .is-active .el-carousel__button) {
  background-color: #2062e6;
  width: 30px;
  height: 2px;
}

.advert-view-item :deep(.el-carousel__button) {
  background-color: #ececec;
}

.merchant-video-text {
  font-size: 17px;
  color: #2062e6;
  opacity: 0.6;
  padding: 10px 0;
}
</style>