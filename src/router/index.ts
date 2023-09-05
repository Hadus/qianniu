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
          title: '首页',
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
      title: '数据',
      permiss: '7',
    },
    component: () => import(/* webpackChunkName: "import" */ '../views/data/index.vue'),
  },
  {
    path: '/dataScreen',
    name: 'dataScreen',
    meta: {
      title: '淘宝数据大屏',
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
    path: '/live-list',
    name: 'liveList',
    meta: {
      title: 'live-list',
    },
    component: () => import(/* webpackChunkName: "403" */ '../views/liveList/index.vue'),
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
  document.title = `${to.meta.title} | vue-manage-system`;
  const role = localStorage.getItem('ms_username');
  const permiss = usePermissStore();
  if (!role && to.path !== '/login') {
    next('/login');
  } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    // 如果没有权限，则进入403
    next('/403');
  } else {
    next();
  }
});

export default router;
