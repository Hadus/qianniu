export default [
  {
    path: '/shop-manage/shop-center',
    name: 'shopCenter',
    meta: {
      title: '店铺信息',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/shopManage/shopCenter.vue'),
  },
]