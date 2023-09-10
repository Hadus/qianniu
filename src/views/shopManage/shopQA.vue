<template>
  <div class="container">
    <div class="title">店铺资质管理</div>
    <div>
      <div class="note block-wrapper">
        <div class="wrapper-left">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em"
            fill="currentColor" aria-hidden="true">
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z">
            </path>
          </svg>
        </div>
        <div class="wrapper-right">
          <p>1、不同类型商品所需资质类型不同，具体请参照平台“<a
              href="https://helpcenter.taobao.com/servicehall/knowledge_detail?spm=a21wg.updatequalinfo.0.0.6739602bvTHUlv&amp;kwdContentId=10236023758923776&amp;hcSessionId=52c585a1-d677-42a4-9152-2fbbf466c650">淘宝特种资质备案知识汇总</a>
          </p>
          <p>2、商家所提交的证照请确保真实有效，若提供虚假资质，平台将依据规则处于店铺监管、店铺删除等处置。规则要求<a
              href="https://rule.taobao.com/detail-14.htm?spm=a2177.7231193.0.0.LLSy3p&amp;tag=self">点此</a></p>
          <p>3、医疗器械相关资质，若为淘宝上传审核通过的，1688平台需重新上传，审核通过后再发布商品</p>
          <p>4、证照提交后审核时间为2个工作日，证照审核通过后，方可发布对应类型的商品</p>
          <p>5、根据《电子商务法》和《网络交易监督管理办法
            》的要求，资质审核通过后，平台将对已审核通过的资质进行每六个月一次的再次核验确认。如果再次核验不通过，仍将下线资质，为避免影响商家正常的业务经营，如果您的资质有变动，请您及时更新。</p>
        </div>
      </div>
    </div>
    <div class="info-wrapper">
      <el-tabs v-model="activeName" class="tabs">
        <el-tab-pane label="有效证照" name="first">
          <div class="card-type-warpper">
            <div class="title block-wrapper">
              营业执照
            </div>
            <div class="cards">
              <div class="card block-wrapper">
                <div class="top">
                  <div class="wrapper-left">
                    <img
                      src="https://img.alicdn.com/imgextra/i3/O1CN01421ct423WVKYFBZYo_!!6000000007263-2-tps-108-126.png">
                  </div>
                  <div class="wrapper-right">
                    <p class="head">《营业执照》</p>
                    <p><span class="key">公司名称：</span><span class="value">{{ mock_shop.yyzz.companyName }}</span></p>
                    <p><span class="key">有效期截止日期：</span><span class="value">{{ mock_shop.yyzz.expireDate }}</span></p>
                  </div>
                </div>
                <div class="bot">
                  <p class="look" @click="handleClickCard">查看详情</p>
                  <p class="btn">
                    <v-btn-empty>下 载</v-btn-empty>
                    <v-btn-empty>更 新</v-btn-empty>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="审核中证照" name="second">
          <vShopQAEmpty />
        </el-tab-pane>
        <el-tab-pane label="审核不通过证照" name="third">
          <vShopQAEmpty />
        </el-tab-pane>
        <el-tab-pane label="已失效证照" name="fourth">
          <vShopQAEmpty />
        </el-tab-pane>
      </el-tabs>
      <div class="operate">
        <p>
          <img src="https://img.alicdn.com/imgextra/i2/O1CN01aJstAa1tmrK84Xjwa_!!6000000005945-55-tps-16-18.svg" alt="">
          消息通知<span>5</span>
        </p>
        <p class="line"></p>
        <p>
          <img src="https://img.alicdn.com/imgextra/i4/O1CN01mo1WfJ1MGRycJgZ57_!!6000000001407-55-tps-14-18.svg" alt="">
          提交记录
        </p>
      </div>
      <div class="add-wrapper"><button>添加证照</button></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="shopQA">
import { useRouter } from 'vue-router';
const $router = useRouter();
import vShopQAEmpty from './showQAEmpty.vue';
import vBtnEmpty from '@/components/BtnEmpty/index.vue';
import mock_shop from '@/assets/data/current/shop';
const activeName = 'first';
const handleClickCard = function () {
  $router.push('/shop-manage/shop-qa-info?src=https%3A%2F%2Fqc-main.taobao.com%2Fquali%2Fportal%3FbizSource%3Dtaobao%26url_open_type%3Diframe%23%2FqualiInfo-center%2');
}
</script>

<style scoped>
.container>div {
  padding-left: 20px;
  margin-bottom: 20px;
}

.title {
  border-bottom: 1px solid #e6e9ed;
  line-height: 49px;
}

.note {
  background-color: rgb(241 245 255);
  display: flex;
}

.note .wrapper-left {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: #3d7fff;
}


.note .wrapper-right {
  height: auto;
}

.note .wrapper-right p {
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  color: #666;
  font-family: PingFangSC-Regular;
}

.note .wrapper-right p>a {
  color: #4178ff;
}

.info-wrapper {
  position: relative;
}

.info-wrapper .operate {
  position: absolute;
  right: 0;
  top: 0;
  height: 36px;
  display: flex;
  justify-content: space-around;
}

.info-wrapper .operate p {
  color: #111100;
  font-size: 13px;
  line-height: 36px;
}

.info-wrapper .operate p.line {
  width: 1px;
  background-color: #111100;
  margin: 0 20px;
  height: 20px;
  position: relative;
  top: 8px;
}

.info-wrapper .operate img {
  width: 16px;
  height: 18px;
  vertical-align: middle;
  margin-right: 5px;
}

.info-wrapper .operate p>span {
  background-color: #fdb6c5;
  border-radius: 18px;
  color: #ff0036;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  margin-left: 4px;
  overflow: hidden;
  padding: 0 13px;
}

.info-wrapper .card-type-warpper {
  width: 100%;
}

.info-wrapper .card-type-warpper>.title {
  width: 100%;
  height: 42px;
  background-color: #f2f5fc;
  line-height: 42px;
  padding: 0;
  padding-left: 12px;
  color: #111;
  font-family: PingFangSC-Semibold;
  font-size: 14px;
}

.info-wrapper .card-type-warpper .cards {
  width: 100%;
  height: auto;
}

.info-wrapper .card-type-warpper .card {
  background-color: #fff;
  width: 387px;
  height: 188px;
  border: 1px solid #cdd2d8;
  padding: 30px 10px 0px 26px;
  transition: .5s;
}

.info-wrapper .card-type-warpper .card:hover {
  border: 1px solid #3d7fff;
  box-shadow: 0 0 0 3px #e0ebff;
}

.info-wrapper .card-type-warpper .card .top {
  display: flex;
  border-bottom: 1px solid #e6e9ed;
  padding-bottom: 36px;
}

.info-wrapper .card-type-warpper .card .wrapper-left {
  width: 36px;
  height: 42px;
  margin-right: 12px;
}

.info-wrapper .card-type-warpper .card .wrapper-left img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.info-wrapper .card-type-warpper .card .wrapper-right {
  height: auto;
}

.info-wrapper .card-type-warpper .card .wrapper-right p {
  font-size: 12px;
  letter-spacing: 0;
  line-height: 20px;
  color: #999;
  font-family: PingFangSC-Regular;
}

.info-wrapper .card-type-warpper .card .wrapper-right p.head {
  color: #111;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 22px;
  margin-bottom: 12px
}

.info-wrapper .card-type-warpper .card .wrapper-right p>span.value {
  color: #111;
}


.info-wrapper .card-type-warpper .card .bot {
  height: 46px;
  line-height: 46px;
}

.info-wrapper .card-type-warpper .card .bot .look {
  float: left;
  color: #4178ff;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  letter-spacing: 0;
  padding-left: 50px;
  cursor: pointer;
}

.info-wrapper .card-type-warpper .card .bot .btn {
  float: right;
}

.info-wrapper .card-type-warpper .card .bot .btn>p {
  width: 60px;
  height: 30px;
  background-color: #ebf3ff;
  display: inline-block;
  cursor: pointer;
}

.info-wrapper .card-type-warpper .card .bot .btn>p+p {
  margin-left: 8px;
}
</style>
<style>
.info-wrapper .tabs .el-tabs__item {
  padding: 0 25px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
}

.info-wrapper .tabs .el-tabs__item.is-active {
  color: #4178ff;
}

.add-wrapper {
  align-items: center;
  background: #fff;
  bottom: 0;
  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, .06);
  display: flex;
  height: 66px;
  justify-content: center;
  right: 0;
  position: fixed;
  width: 90%
}

.add-wrapper button {
  background: #3d7fff;
  background-color: #3d7fff;
  border-radius: 24px;
  height: 42px;
  width: 200px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border: 0 none;
  outline: 0 none;
}
</style>


