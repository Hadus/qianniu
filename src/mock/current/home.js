// 首页
import {trade_orderNumber} from './trade.js';
const home = {
    left_banner: { // 左边-banner
      fukuan: 21, 
      fahuo: trade_orderNumber, 
      shouhou: 311,
      pingjia: 172, 
      tousu: 0, 
      weigui: 1, 
    },
    shop_data:{ // 店铺数据
      zhifu: 4132, 
      zhifu_prev: 2981,
      fangke: 87, 
      fangke_prev: 32, 
      zhidingdan: 16, 
      zhidingdan_prev: 7, 
      zhuanhualv: 72, 
      zhuanhualv_prev: 32, 
      liulaniang: 92, 
      liulaniang_prev: 98, 
      jiagou: 18, 
      jiagou_prev: 6, 
      kedan: 42, 
      kedan_prev: 41.2, 
      maijiashu: 18, 
      maijiashu_prev: 12, 
    },
    shop_advise: {
      quality: '93.0', // 店铺质量
      per: '89' // 优于
    },
    right_info: { // 右侧-info
      desc: '5.0',
      server: '5.0',
      wuliu: '4.9',
      level: '5',
      tiyanfen: '5.0',
    },
    follow: { // 关注
      fans: 203, // 粉丝数
    },
};

export default home;