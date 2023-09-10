// 交易
const trade_orderList_obj  = require('@/assets/data/current/tableData/trade_order_list.json');
/* 订单页 */
// 根据页码获取列表数组
export const getTrade_orderList = function (page) {
  return trade_orderList_obj['mainOrders_' + page];
}

/* 订单详情页 */
// 获取订单其他相关信息-地址&物流在wuliu.js
const orderDetailList = require('@/assets/data/current/tableData/trade_detail_list.json');

export const getTrade_orderDetailIndex = function () {
  const orderDetailIndex = parseInt(Math.random() * (10 - 0) + 0);
  return orderDetailIndex;
}

export const getOrder_detail_plus = function (createTimeStr) {
  let randomStr = '';
  for(let i = 0; i < 20; i++) {
    randomStr+= parseInt(Math.random() * (10 - 0) + 0);
  }
  const tbTradeId = createTimeStr.replaceAll('-','').slice(0,8) + randomStr;

  let orderDate = new Date(createTimeStr);
  orderDate.setSeconds(orderDate.getSeconds() + 5);
  const payTime = orderDate.toLocaleString().replaceAll('/', '-');

  return {
    tbTradeId,
    createTime: createTimeStr,
    payTime,
    orderDetailList
  }
}

const trade = {
  orderNumber: 13,
  orderTimeoutNumber: 1,
  page: {...trade_orderList_obj.page}
};
export default trade;