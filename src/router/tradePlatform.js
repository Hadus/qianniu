export default [
  {
    path: '/trade-platform/tp/sold',
    name: 'sold',
    meta: {
      title: '交易',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/tradePlatform/sold.vue'),
  },
]