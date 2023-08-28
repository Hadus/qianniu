import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Index from '../views/Index.vue';

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
      {
        path: '/tradePlatform',
        name: 'tradePlatform',
        meta: {
          title: '交易',
          permiss: '2',
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/tradePlatform/index.vue'),
      },
      {
        path: '/privateDomainWorkbench',
        name: 'privateDomainWorkbench',
        meta: {
          title: '私域',
          permiss: '3',
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/privateDomainWorkbench/index.vue'),
      },
      {
        path: '/contentCenter',
        name: 'contentCenter',
        meta: {
          title: '内容',
          permiss: '4',
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/contentCenter/index.vue'),
      },
      {
        path: '/shopManage',
        name: 'shopManage',
        meta: {
          title: '店铺',
          permiss: '5',
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/shopManage/index.vue'),
      },
      {
        path: '/qnTmcSeller',
        name: 'qnTmcSeller',
        meta: {
          title: '营销',
          permiss: '6',
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/qnTmcSeller/index.vue'),
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
    ],
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
];

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
