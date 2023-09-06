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
  {
    path: '/shop-manage/shop-qa',
    name: 'shopQA',
    meta: {
      title: '店铺资质管理',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/shopManage/shopQA.vue'),
  },
  {
    path: '/shop-manage/shop-qa-info',
    name: 'shopQAInfo',
    meta: {
      title: '营业执照',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/shopManage/shopQAInfo.vue'),
  },
  {
    path: '/shop-manage/serverReport',
    name: 'serverReport',
    meta: {
      title: '综合体验分',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/shopManage/serverReport.vue'),
  },
]