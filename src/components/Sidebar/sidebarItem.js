let routes = [
    {
      icon: 'Odometer',
      index: '/qnworkbenchHome',
      title: '首页',
      permiss: '1',
    },
    { // test
      icon: 'Odometer',
      index: '',
      title: '商品--',
      permiss: '1',
    },
    {
      icon: 'Odometer',
      index: 'sub-1',
      title: '交易',
      permiss: '1',
      subs: [
        {
          index: 'sub-11-sub',
          title: '订单管理',
          permiss: '1',
          subs: [
            {
              index: '/trade-platform/tp/sold',
              title: '已卖出的宝贝',
              permiss: '1',
            },
            {
              index: '',
              title: '退款管理',
              permiss: '1',
            },
          ]
        },
        {
          index: 'sub-12-sub',
          title: '物流管理',
          permiss: '1',
          subs: [
            {
              index: '',
              title: '寄快递',
              permiss: '1',
            },
            {
              index: '',
              title: '发货',
              permiss: '1',
            },
          ]
        },
      ],
    },
    {
      icon: 'Odometer',
      index: '',
      title: '私域--',
      permiss: '1',
    },
    {
      icon: 'Odometer',
      index: '',
      title: '内容--',
      permiss: '1',
    },
    {
      icon: 'Odometer',
      index: 'sub-2',
      title: '店铺',
      permiss: '1',
      subs: [
        {
          index: 'sub-21-sub',
          title: '店铺管理',
          permiss: '1',
          subs: [
            {
              index: '',
              title: '综合体验分',
              permiss: '1',
            },
            {
              index: '/shop-manage/shop-center',
              title: '店铺信息',
              permiss: '1',
            },
          ]
        },
        {
          index: 'sub-22-sub',
          title: '店铺装修',
          permiss: '1',
          subs: [
            {
              index: '',
              title: '手机店铺装修',
              permiss: '1',
            },
            {
              index: '',
              title: 'PC店铺装修',
              permiss: '1',
            },
          ]
        },
      ],
    },
    {
      icon: 'Odometer',
      index: '',
      title: '营销--',
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