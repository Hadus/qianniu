// 数据(生意参谋)
/* 首页 */
const home = { 
  overall: { // 实时概况
    zhifuMoney: {
      money: '100.2',
      yestoday: '200,1',
      index: 100,
      per: '51.3%',
      yestodayAll: 20
    },
    guest: { // 访客数
      number: 7,
      yestodayAll: 20,
      index: 100
    },
    payBuyer: { // 支付买家数
      number: 7,
      per: '51.3%',
      index: 100,
      yestodayAll: 20
    },
    lookOrder: { // 浏览量
      number: 7,
      yestodayAll: 20
    },
    payOrder: { // 支付子订单数
      number: 7,
      per: '51.3%',
      yestodayAll: 20
    }
  },
  shopGrowLevel: {
    level: 3,
    per: 61,
    improve: 1.05
  },
  board:{},
  chart:{}
};

/* 直播页 */
const live = {
  overview: { // 直播概况
    
  },
  performance: { // 直播间业绩
    overall: {
      totalIndex: 600,
      toPrevWeek_total: 20,
      allIndex: 4532,
      toPrevWeek_all: 340
    },
    bigPan:{ // 直播间大盘

    },
    orderListTable: [ // 直播间订单明细

    ],
    presaleListTable: [ // 直播间预售数据

    ]
  },
  myLiveList: { // 我的直播列表
    realtime: [],
    playback: []
  }
};
const sycm = {};