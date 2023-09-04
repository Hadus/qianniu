export function dealData() {
  var list = {
      liuLiangHuDong: [  //流量互动
          {
              img: "https://img.alicdn.com/imgextra/i2/O1CN01WmOxCq20qhwLNYwmx_!!6000000006901-55-tps-14-15.svg",
              name1: "观看次数",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,
              name2: "非粉丝观看次数占比",
              zhuanhualv2: Math.floor(Math.random() * 100) + 1+"%"
          },
          {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01qkxo2W1c7mJBQKOaC_!!6000000003554-55-tps-14-14.svg",
              name1: "观看人数",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,
              name2: "非粉丝观看次数占比",
              zhuanhualv2: Math.floor(Math.random() * 100) + 1+"%"
          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01a8elIu1YBCqFAxMX4_!!6000000003020-55-tps-18-18.svg",
              name1: "观看时长(秒)",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,
              name2: "非粉丝观看次数占比",
              zhuanhualv2: Math.floor(Math.random() * 100) + 1+"%"

          },
          {
              img: "https://img.alicdn.com/imgextra/i2/O1CN010Oc8PO1blKwEAeqFp_!!6000000003505-55-tps-16-16.svg",
              name1: "封面图点击率",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1+"%"

          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01HleMf01Qyee0BPebr_!!6000000002045-55-tps-14-14.svg",
              name1: "新增粉丝",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,

          }, {
              img: "https://img.alicdn.com/imgextra/i2/O1CN010Oc8PO1blKwEAeqFp_!!6000000003505-55-tps-16-16.svg",
              name1: "封面图点击率",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1+"%"

          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01fPifbq1Oh8G28Qcdx_!!6000000001736-55-tps-12-14.svg",
              name1: "流量券消耗(PV)",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,

          }, {
              img: "https://img.alicdn.com/imgextra/i3/O1CN019HsP1q1NodAkaUGeV_!!6000000001617-2-tps-15-18.png",
              name1: "活动奖励流量",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,

          }
      ],
      zhuanHuaChengJiao: [
          {
              img: "https://img.alicdn.com/imgextra/i4/O1CN01zuCVW424qUFFzKDhY_!!6000000007442-55-tps-18-18.svg",
              name1: "商品点击率",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1+"%",
              name2: "非粉丝商品点击率",
              zhuanhualv2:  Math.floor(Math.random() * 100) + 1+"%"
          },
          {
              img: "https://img.alicdn.com/imgextra/i3/O1CN01ihenLZ1jaMMvk0dZI_!!6000000004564-55-tps-18-18.svg",
              name1: "成交转化率",
              zhuanhualv1:  Math.floor(Math.random() * 100) + 1+"%",
              name2: "非粉丝成交转化率",
              zhuanhualv2:  Math.floor(Math.random() * 100) + 1+"%",
          },
          {
              img: "https://img.alicdn.com/imgextra/i2/O1CN01S7hxZv1eprf42pYuw_!!6000000003921-55-tps-14-14.svg",
              name1: "成交人数",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,
              name2: "非粉丝成交人数占比",
              zhuanhualv2:  Math.floor(Math.random() * 100) + 1+"%",
          },
          {
              img: "https://img.alicdn.com/imgextra/i1/O1CN01bdyyMF1Td4pdQdEVC_!!6000000002404-55-tps-12-15.svg",
              name1: "成交件数",
              zhuanhualv1: Math.floor(Math.random() * 100) + 1,
              name2: "非粉丝观看次数占比",
              zhuanhualv2:  Math.floor(Math.random() * 100) + 1+"%",
          },
      ],
      zuiGaoNum:  Math.floor(Math.random() * 100) + 1,
      zuiGaoJiner:  Math.floor(Math.random() * 100) + 1,
      fenSiZhanBi:  Math.floor(Math.random() * 100) + 1+"%",
      tableData: [{
          img: "https://gw.alicdn.com/bao/uploaded/i3/2559988253/O1CN01z2Cvah2Apvb3JYp7Z_!!2559988253.jpg",
          productInfo: "保山南红手链手串佛珠满肉柿子红挂件吊坠川料南红手串真品",
          peopleNum: Math.floor(Math.random() * 100) + 1,
          clickNum: Math.floor(Math.random() * 100) + 1,
          buyNum: Math.floor(Math.random() * 100) + 1,
          order: Math.floor(Math.random() * 10) + 1,
          mony: Math.floor(Math.random() * 10000) + 1,

      }, {
          img: "https://gw.alicdn.com/bao/uploaded/i1/2559988253/O1CN01Cep9Bu2ApvbIa8TWX_!!2559988253.jpg",
          productInfo: "南红手镯四川凉山南红圆条手镯满色满肉南红玛瑙手镯纯天然",
          peopleNum: Math.floor(Math.random() * 100) + 1,
          clickNum: Math.floor(Math.random() * 100) + 1,
          buyNum: Math.floor(Math.random() * 100) + 1,
          order: Math.floor(Math.random() * 10) + 1,
          mony: Math.floor(Math.random() * 10000) + 1,

      }, {
          img: "https://gw.alicdn.com/bao/uploaded/i4/2559988253/O1CN01nH0sxy2Apvb7zEc72_!!2559988253.jpg",
          productInfo: "南红玛瑙手链保山南红回纹珠圆珠手串手链男女同款",
          peopleNum: Math.floor(Math.random() * 100) + 1,
          clickNum: Math.floor(Math.random() * 100) + 1,
          buyNum: Math.floor(Math.random() * 100) + 1,
          order: Math.floor(Math.random() * 10) + 1,
          mony: Math.floor(Math.random() * 10000) + 1,

      }, {
          img: "https://gw.alicdn.com/bao/uploaded/i2/2559988253/O1CN01Z3jrCQ2ApvbBmni1z_!!2559988253.jpg",
          productInfo: "【国红珠宝】四川盐源玛瑙手链手串圆珠佛珠满肉盐源挂件吊坠",
          peopleNum: Math.floor(Math.random() * 100) + 1,
          clickNum: Math.floor(Math.random() * 100) + 1,
          buyNum: Math.floor(Math.random() * 100) + 1,
          order: Math.floor(Math.random() * 10) + 1,
          mony: Math.floor(Math.random() * 10000) + 1,

      },
      {
          img: "https://gw.alicdn.com/bao/uploaded/i1/2559988253/O1CN012Xkbfk2ApvbD3ECCI_!!2559988253.jpg",
          productInfo: "保山南红手链手串佛珠满肉柿子红挂件吊坠川料南红手串真品",
          peopleNum: Math.floor(Math.random() * 100) + 1,
          clickNum: Math.floor(Math.random() * 100) + 1,
          buyNum: Math.floor(Math.random() * 100) + 1,
          order: Math.floor(Math.random() * 10) + 1,
          mony: Math.floor(Math.random() * 10000) + 1,

      },
      {
          img: "	https://gw.alicdn.com/bao/uploaded/i3/2559988253/O1CN01nwTUso2Apvb3J5Ptt_!!2559988253.jpg",
          productInfo: "南红玛瑙手串川料南红手链手串佛珠凉山南红手链男女款",
          peopleNum: Math.floor(Math.random() * 100) + 1,
          clickNum: Math.floor(Math.random() * 100) + 1,
          buyNum: Math.floor(Math.random() * 100) + 1,
          order: Math.floor(Math.random() * 10) + 1,
          mony: Math.floor(Math.random() * 10000) + 1,

      }
      ],
      zhiBoYu: [{
          name: "观看人数",
          Number: Math.floor(Math.random() * 100) + 1,
      },
      {
          name: " 人数占比",
          Number: Math.floor(Math.random() * 100) + 1+"%"
      },
      {
          name: "人均时长",
          Number: Math.floor(Math.random() * 100) + 1,
      },
      {
          name: "成交金额",
          Number:Math.floor(Math.random() * 1000) + 1,
      }],
      dianpuyu: [{
          name: "观看人数",
          Number: Math.floor(Math.random() * 1000) + 1,
      },
      {
          name: " 人数占比",
          Number: Math.floor(Math.random() * 100) + 1+"%",
      },
      {
          name: "人均时长",
          Number: Math.floor(Math.random() * 1000) + 1,
      },
      {
          name: "成交金额",
          Number: Math.floor(Math.random() * 1000) + 1,
      }]
  }
  return list
}
