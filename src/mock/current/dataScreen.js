// 数据大屏
const getRandom = function(n = 0, m = 10){
  return Math.floor(Math.random() * (m - n)) + n;
}
export function dealData(mock_live_detail) {
  var list = {
      liuLiangHuDong: [  //流量互动
          {
              img: "https://img.alicdn.com/imgextra/i2/O1CN01WmOxCq20qhwLNYwmx_!!6000000006901-55-tps-14-15.svg",
              name1: "观看次数",
              zhuanhualv1: parseInt(mock_live_detail.lookPv) + getRandom(1, 100),
              name2: "非粉丝观看次数占比",
              zhuanhualv2: getRandom(1, 50)+"%"
          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01qkxo2W1c7mJBQKOaC_!!6000000003554-55-tps-14-14.svg",
              name1: "观看人数",
              zhuanhualv1: parseInt(mock_live_detail.lookUv) + getRandom(1, 100),
              name2: "非粉丝观看次数占比",
              zhuanhualv2: getRandom(1, 50) + "%"
          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01a8elIu1YBCqFAxMX4_!!6000000003020-55-tps-18-18.svg",
              name1: "观看时长(秒)",
              zhuanhualv1:mock_live_detail.lookTimePu + getRandom(1, 100),
              name2: "非粉丝观看次数占比",
              zhuanhualv2: getRandom(1, 50) + "%"
          },{
              img: "https://img.alicdn.com/imgextra/i2/O1CN010Oc8PO1blKwEAeqFp_!!6000000003505-55-tps-16-16.svg",
              name1: "封面图点击率",
              zhuanhualv1: parseFloat(mock_live_detail.pctr).toFixed(4)*100 + getRandom(1, 10) + "%"
          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01HleMf01Qyee0BPebr_!!6000000002045-55-tps-14-14.svg",
              name1: "新增粉丝",
              zhuanhualv1: parseInt(mock_live_detail.atnUv) + getRandom(1, 100),
          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01fPifbq1Oh8G28Qcdx_!!6000000001736-55-tps-12-14.svg",
              name1: "流量券消耗(PV)",
              zhuanhualv1: (mock_live_detail.lookPvFlowcontrol == '-'? 0 : parseInt(mock_live_detail.lookPvFlowcontrol))  + getRandom(1, 100),
          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN019HsP1q1NodAkaUGeV_!!6000000001617-2-tps-15-18.png",
              name1: "活动奖励流量",
              zhuanhualv1: parseInt(mock_live_detail.lookUv) + getRandom(1, 1000),
          }
      ],
      zhuanHuaChengJiao: [
          {
              img: "https://img.alicdn.com/imgextra/i4/O1CN01zuCVW424qUFFzKDhY_!!6000000007442-55-tps-18-18.svg",
              name1: "商品点击率",
              zhuanhualv1: parseFloat(mock_live_detail.ipvUvRate).toFixed(4)*100 + getRandom(1, 20)+"%",
              name2: "非粉丝商品点击率",
              zhuanhualv2: getRandom(1, 50)+"%"
          },
          {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01ihenLZ1jaMMvk0dZI_!!6000000004564-55-tps-18-18.svg",
              name1: "成交转化率",
              zhuanhualv1:  parseFloat(mock_live_detail.payByrRate * 100 ).toFixed(4)*100 + getRandom(1, 50)+"%",
              name2: "非粉丝成交转化率",
              zhuanhualv2: getRandom(1, 50)+"%",
          },
          {
              img: "https://img.alicdn.com/imgextra/i2/O1CN01S7hxZv1eprf42pYuw_!!6000000003921-55-tps-14-14.svg",
              name1: "成交人数",
              zhuanhualv1: parseInt(mock_live_detail.payBuyerCnt) + getRandom(1, 100),
              name2: "非粉丝成交人数占比",
              zhuanhualv2: getRandom(1, 50)+"%",
          },
          {
              img: "https://img.alicdn.com/imgextra/i1/O1CN01bdyyMF1Td4pdQdEVC_!!6000000002404-55-tps-12-15.svg",
              name1: "成交件数",
              zhuanhualv1: parseInt(mock_live_detail.payBuyerCnt) + getRandom(1, 100),
              name2: "非粉丝观看次数占比",
              zhuanhualv2:  getRandom(1, 50)+"%",
          },
      ],
      zuiGaoNum: parseInt(mock_live_detail.lookUv) +  1000,
      zuiGaoJiner: parseInt(mock_live_detail.payAmt) + 100,
      fenSiZhanBi: getRandom(1, 100)+"%",
      tableData: [{
          img: mock_live_detail.itemPictUrl,
          productInfo:mock_live_detail.itemTitle ,
          peopleNum: getRandom(100, 10000),
          peopleClickNum: parseInt(mock_live_detail.ipvUv) + getRandom(1, 100),
          clickNum: parseInt(mock_live_detail.ipv) + getRandom(1, 100),
          buyNum: parseInt(mock_live_detail.payBuyerCnt) + getRandom(1, 100),
          mony: parseInt(mock_live_detail.payAmt) + getRandom(1, 10000),

      }],
      zhiBoYu: [{
          name: "观看人数",
          Number: parseInt(mock_live_detail.lookPv) + getRandom(1, 100),
      },
      {
          name: "人数占比",
          Number: getRandom(1, 50)+"%"
      },
      {
          name: "人均时长",
          Number: parseInt(mock_live_detail.lookTimePu) +  getRandom(1, 100),
      },
      {
          name: "成交金额",
          Number: parseInt(mock_live_detail.payAmt) +  getRandom(1, 1000),
      }],
      dianpuyu: [{
          name: "观看人数",
          Number: parseInt(mock_live_detail.lookPv) +  getRandom(1, 1000),
      },
      {
          name: "人数占比",
          Number: getRandom(1, 50)+"%",
      },
      {
          name: "人均时长",
          Number: parseInt(mock_live_detail.lookTimePu) +  getRandom(1, 1000),
      },
      {
          name: "成交金额",
          Number: parseInt(mock_live_detail.payAmt) + getRandom(1, 1000),
      }]
  }
  return list;
}