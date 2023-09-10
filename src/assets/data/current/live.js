// 直播页
const  live_table_obj = require('@/assets/data/current/tableData/live_list.json');

const live_table_list={
  table_1: live_table_obj.table_1_2.table_1,
  table_2: live_table_obj.table_1_2.table_2,
  table_3: live_table_obj.table_3_4.table_3,
  table_4: live_table_obj.table_3_4.table_4,
};

/* 直播页 */
const live = {
  overview: {
    // 直播概况
  },
  performance: {
    // 直播间业绩
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
      bigPan: {
        // 直播间大盘
      },
      orderListTable: [
        // 直播间订单明细
      ],
      presaleListTable: [
        // 直播间预售数据
      ],
    },
  },
  live_table_list
};

export default live;
