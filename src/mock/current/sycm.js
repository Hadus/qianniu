// 数据(生意参谋)
/* 首页 */
const home = { 
  overall: { // 实时概况
    money: {
      today: 10,
      yesterday: 13,
      livePercentage: "5.12%",
      rank: "100+",
    },
    vistor: {
      today: 7,
      yesterday: 13,
      rank: "100+",
    },
    payBuyer: {
      today: 5,
      yesterday: 11,
      livePercentage: "5%",
      rank: "80",
    },
    view: {
      today: 26,
      yesterday: 21,
    },
    paySubOrder: {
      today: 15,
      livePer: "12.1%",
      yesterday: 8,
    },
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
      my: {
        cur: 600,
        change: 51,
        direction: "down",
      },
      all: {
        cur: 6496,
        change: 370,
        direction: "down",
      },
      bigPan:{ // 直播间大盘

      },
      orderListTable: [ // 直播间订单明细
  
      ],
      presaleListTable: [ // 直播间预售数据
  
      ]
    },
  },
  myLiveList: { // 我的直播列表
    realtime: [],
    playback: []
  }
};
export {home, live};

const sycm = {};
export default sycm;
