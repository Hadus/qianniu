let routes = [
    {
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/8bfa5513e74e46f58186f0b61482d27d.png',
      index: '/qnworkbenchHome',
      title: '首页',
      permiss: '1',
    },
    { // test
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/07eb3fb6cb4b4f65a92c50e09a911172.png',
      index: '',
      title: '商品',
      permiss: '1',
    },
    {
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/2b918aae069442b08e81c5517c6ed621.png',
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
            {
              index: '',
              title: '评价管理',
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
              title: '打单工具',
              permiss: '1',
            },
            {
              index: '',
              title: '打单',
              permiss: '1',
            },
            {
              index: '',
              title: '物流服务',
              permiss: '1',
            },
            {
              index: '',
              title: '包裹监控',
              permiss: '1',
            },
          ]
        },
        {
          index: 'sub-13-sub',
          title: '投诉与申诉',
          permiss: '1',
          subs: [
            {
              index: '',
              title: '我要投诉',
              permiss: '1',
            },
            {
              index: '',
              title: '我被投诉',
              permiss: '1',
            },
            {
              index: '',
              title: '我要申诉',
              permiss: '1',
            },
            {
              index: '',
              title: '我要报备',
              permiss: '1',
            },
          ]
        },
        {
          index: 'sub-14-sub',
          title: '更多',
          permiss: '1',
          subs:[]
        },
      ],
    },
    {
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/39f6931cfe9d4b33af2243eb8c3b8c0f.png',
      index: '',
      title: '私域',
      permiss: '1',
    },
    {
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/e164c1bf13344092983926953648a71b.png',
      index: '',
      title: '内容',
      permiss: '1',
    },
    {
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/073ac4a541cc4beb9b3741edd4b6f0e1.png',
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
            {
              index: '',
              title: '店铺体检',
              permiss: '1',
            },
            {
              index: '',
              title: '子账号管理',
              permiss: '1',
            },
            {
              index: '',
              title: '店铺素材',
              permiss: '1',
            },
            {
              index: '',
              title: '隐私保护',
              permiss: '1',
            },
            {
              index: '',
              title: '层级及权益',
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
            {
              index: '',
              title: '装修管理',
              permiss: '1',
            },
          ]
        },
        {
          index: 'sub-23-sub',
          title: '更多',
          permiss: '1',
          subs:[]
        },
      ],
    },
    {
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/14810e18da8b43e7bf3ccee28fb16f0c.png',
      index: '',
      title: '营销',
      permiss: '1',
    },
    { // test
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/cc7c862dd877457fbfea08bbb5dd3ea7.png',
      index: '',
      title: '推广',
      permiss: '1',
    },
    { // test
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/19dead6ec15e44a99a2ffe29f9b5a302.png',
      index: '',
      title: '客服',
      permiss: '1',
    },
    { // test
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/ff8a14cf1da845ee86bdda2f37823ac9.png',
      index: '',
      title: '财务',
      permiss: '10',
    },
    {
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/d90d70c6abef4db8bbbee49aca355f8a.png',
      index: '',
      title: '数据',
      permiss: '11',
      link: '/#/data'
    },
    { // test
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/5a14bc566c3b44f983cd0cc9e8b25777.png',
      index: '',
      title: '服务',
      permiss: '12',
    },
    { // test
      icon: 'https://openworkbench.oss-cn-hangzhou.aliyuncs.com/fa3473822f274ccea2225674cab0b72a.png',
      index: '',
      title: '应用',
      permiss: '13',
    },
];

export default routes;