export default [
  {
    path: '/trade-platform/tp/sold',
    name: 'sold',
    meta: {
      title: '交易',
      permiss: '1',
    },
    component: () => import('../views/tradePlatform/sold.vue'),
  },
  {
    path: '/trade-platform/tp/orderDetail',
    name: 'orderDetail',
    meta: {
      title: '订单详情',
      permiss: '1',
    },
    component: () => import('../views/tradePlatform/orderDetail.vue'),
  },
]