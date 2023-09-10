import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Index from '../views/Index.vue';
// 导入子路由
import routes_tradePlatform from './tradePlatform.js';
import routes_shopManage from './shopManage.js';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/qnworkbenchHome',
  },
  {
    path: '/',
    name: 'Home',
    component: Index,
    children: [
      {
        path: '/qnworkbenchHome',
        name: 'qnworkbenchHome',
        meta: {
          title: '千牛商家工作台',
          permiss: '1',
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/qnworkbenchHome/index.vue'),
      },
    ],
  },
  {
    path: '/wuliu',
    name: 'wuliu',
    meta: {
      title: '物流',
    },
    component: () => import(/* webpackChunkName: "403" */ '../views/wuliu/index.vue'),
  },
  {
    path: '/data',
    name: 'data',
    meta: {
      title: '生意参谋，阿里巴巴生意参谋，市场行情，数据作战室，大数据分析，生意经，电商运营，零售电商',
      permiss: '7',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/data/index.vue'),
  },
  {
    path: '/dataScreen',
    name: 'dataScreen',
    meta: {
      title: '实时数据大屏',
    },
    component: () => import(/* webpackChunkName: "charts" */ '../views/dataScreen/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '没有权限',
    },
    component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test',
    },
    component: () => import(/* webpackChunkName: "403" */ '../views/test/index.vue'),
  },
];

// 导入子路由
routes[1].children = routes[1].children?.concat(routes_tradePlatform)
  .concat(routes_shopManage);


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
