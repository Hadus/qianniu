// 数据大屏
const dataScreen = {
  living_flag: false, // 是否正在直播
  left: {
    coreData: { // 核心数据
      interaction: { // 流量互动
        times: 40,
        times_per_notFans: 50,
        person: 100,
        person_per_notFans: 30,
        time: 60,
        time_per_notFans: 40,
        click_per: 50,
        addFans: 40,
        liulaingquan: 50,
        reward: 20
      },
      turns:{
        click_per: 30,
        click_per_notFans: 40,
        turns_per: 49,
        turns_per_notFans: 30,
        person: 40,
        person_per_notFans: 49,
        number: 3,
        watch_per_notFans: 49,
      }
    }
  },
  center: {
    liveInfo:{
      startTime: '',
      duration: '',
      statTime: '',
      maxPerson: 60,
      dealMoney: 20,
      dealMoney_per_notFans: 60
    },
    table:[],
  },
  right:{
    liulangSource: { // 流量来源
      liveArea: {
        person: 11,
        person_per: 33,
        avarage: 49,
        dealMoney: 40,
      },
      shopArea: {
        person: 11,
        person_per: 33,
        avarage: 49,
        dealMoney: 40,
      },
    },
    trend: { // 实时趋势
      personChart: {},
      liuliangSource: {} 
    }
  }
};