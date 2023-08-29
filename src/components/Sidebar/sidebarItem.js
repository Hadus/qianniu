let routes = [
    {
      icon: 'Odometer',
      index: '/qnworkbenchHome',
      title: '首页',
      permiss: '1',
    },
    { // test
      icon: 'Odometer',
      index: 'sub-1',
      title: '商品--',
      permiss: '1',
      subs: [
        {
          index: 'sub-1-sub',
          title: '商品管理',
          permiss: '1',
          subs: [
            {
              index: '/SellManage/all',
              title: '全部宝贝',
              permiss: '1',
            },
            {
              index: '/SellManage/decoration',
              title: '描述',
              permiss: '2',
            },
          ]
        },
        // {
        //   index: '2',
        //   title: '商品运营',
        //   permiss: '1',
        //   subs: [
        //     {
        //       index: '/SellManage/all',
        //       title: '全部宝贝',
        //       permiss: '1',
        //     },
        //     {
        //       index: '/SellManage/decoration',
        //       title: '描述',
        //       permiss: '2',
        //     },
        //   ]
        // },
      ],
    },
    {
      icon: 'Odometer',
      index: '/tradePlatform',
      title: '交易',
      permiss: '1',
    },
    {
      icon: 'Odometer',
      index: '/privateDomainWorkbench',
      title: '私域',
      permiss: '1',
    },
    {
      icon: 'Odometer',
      index: '/contentCenter',
      title: '内容',
      permiss: '1',
    },
    {
      icon: 'Odometer',
      index: '/shopManage',
      title: '店铺',
      permiss: '1',
    },
    {
      icon: 'Odometer',
      index: '/qnTmcSeller',
      title: '营销',
      permiss: '1',
    },
    { // test
      icon: 'Odometer',
      index: '',
      title: '推广--',
      permiss: '1',
    },
    { // test
      icon: 'Odometer',
      index: '',
      title: '客服--',
      permiss: '1',
    },
    { // test
      icon: 'Odometer',
      index: '',
      title: '财务--',
      permiss: '10',
    },
    {
      icon: 'Odometer',
      index: '/data',
      title: '数据',
      permiss: '11',
    },
    { // test
      icon: 'Odometer',
      index: '',
      title: '服务--',
      permiss: '12',
    },
    { // test
      icon: 'Odometer',
      index: '',
      title: '应用--',
      permiss: '13',
    },
];

export default routes;