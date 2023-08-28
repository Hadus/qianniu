export const first = [
    {
      icon: 'Odometer',
      index: '/dashboard',
      title: '系统首页',
      permiss: '1',
    },
    {
      icon: 'Calendar',
      index: '1',
      title: '表格相关',
      permiss: '2',
      subs: [
        {
          index: '/table',
          title: '常用表格',
          permiss: '2',
        },
        {
          index: '/import',
          title: '导入Excel',
          permiss: '2',
        },
        {
          index: '/export',
          title: '导出Excel',
          permiss: '2',
        },
      ],
    },
    {
      icon: 'DocumentCopy',
      index: '/tabs',
      title: 'tab选项卡',
      permiss: '3',
    },
    {
      icon: 'Edit',
      index: '3',
      title: '表单相关',
      permiss: '4',
      subs: [
        {
          index: '/form',
          title: '基本表单',
          permiss: '5',
        },
        {
          index: '/upload',
          title: '文件上传',
          permiss: '6',
        },
        {
          index: '4',
          title: '三级菜单',
          permiss: '7',
          subs: [
            {
              index: '/editor',
              title: '富文本编辑器',
              permiss: '8',
            },
            {
              index: '/markdown',
              title: 'markdown编辑器',
              permiss: '9',
            },
          ],
        },
      ],
    },
    {
      icon: 'Setting',
      index: '/icon',
      title: '自定义图标',
      permiss: '10',
    },
    {
      icon: 'PieChart',
      index: '/charts',
      title: 'schart图表',
      permiss: '11',
    },
    {
      icon: 'Warning',
      index: '/permission',
      title: '权限管理',
      permiss: '13',
    },
    {
      icon: 'CoffeeCup',
      index: '/donate',
      title: '支持作者',
      permiss: '14',
    },
  ];