export default [
  {
    path: '/SellManage/all',
    name: 'all',
    meta: {
      title: '全部宝贝',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/sellManage/all.vue'),
  },
  {
    path: '/SellManage/decoration',
    name: 'decoration',
    meta: {
      title: '描述',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/sellManage/decoration.vue'),
  },
]