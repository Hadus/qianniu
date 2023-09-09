// 数据(生意参谋)
/* 首页 */
const home = {
  overall: {
    // 实时概况
    money: {
      today: 67912,
      yesterday: 77657,
      livePercentage: "55.38%",
      rank: "100+",
    },
    vistor: {
      today: 26648,
      yesterday: 21985,
      rank: "100+",
    },
    payBuyer: {
      today: 91,
      yesterday: 198,
      livePercentage: "100.00%",
      rank: "100+",
    },
    view: {
      today: 66765,
      yesterday: 24827,
    },
    paySubOrder: {
      today: 107,
      livePer: "100.00%",
      yesterday: 227,
    },
  },
  shopGrowLevel: {
    level: 3,
    per: 61,
    improve: 1.05,
  },
  board: [
    {
      key: "money",
      desc: "支付金额",
      date: {
        cur: 43375.09,
        pre: "5.75%",
        compareLast: "-1.43%",
        chartData: {
          my: [
            29493.45, 61866.45, 36560.37, 52304.74, 55098.91, 35256.46,
            41982.49, 27164.03, 62492.53, 44689.2, 40432.85, 21912.64, 51802.58,
            43159.13, 38452.71, 28007.26, 64192.91, 64735.27, 48975.99,
            32600.08, 34868.2, 43421.31, 27526.42, 59680.34, 45917.18, 47416.15,
            46752.58, 58629.41, 52145.11, 32693.72, 43375.09,
          ],
          rivalAvg: [
            20763.69, 21566.82, 21586.28, 20998.27, 21379.72, 20421.55,
            21391.19, 21013.95, 21968.95, 21483.63, 20047.65, 21325.57, 21675.3,
            20195.17, 21550.83, 21132.96, 20207.54, 20903.51, 21962.17,
            20770.37, 21581.68, 20481.76, 21136.14, 20839.4, 20173.62, 21711.52,
            20967.76, 21397.89, 21306.01, 20635.94, 20981.37,
          ],
          rivalTop: [
            51671.35, 54749.15, 53258.49, 50356.05, 52345.05, 52493.6, 52598.47,
            50874.64, 53424.95, 50851.27, 53482.5, 50331.04, 52035.98, 52410.1,
            54273.34, 51946.98, 54529.99, 50658.71, 51632.41, 52200.88,
            53074.23, 54773.54, 51131.76, 53771.09, 53700.79, 54829.05,
            53758.66, 53714.37, 52274.01, 54983.47, 53114.84,
          ],
        },
      },
      week: {
        cur: 326095.21,
        pre: "-4.3%",
        compareLast: "6.1%",
        chartData: {
          my: [
            282643.8, 418284.99, 450556.36, 349012.8, 254855.07, 298127.64,
            216953.49, 329563.95, 285051.62, 420128.51, 314395.99, 326095.21,
          ],
          rivalAvg: [
            148275.39, 143150.25, 149500.11, 152408.02, 152188.36, 144176.2,
            148997.78, 150847.73, 141207.97, 151350.06, 141685.29, 144641.29,
          ],
          rivalTop: [
            352053.74, 378949.96, 380622.84, 351732.07, 381432.47, 377451.33,
            361790.93, 367006.43, 375327.7, 368392.37, 367037.06, 372462.46,
          ],
        },
      },
      month: {
        cur: 1304637.59,
        pre: "-15.75%",
        compareLast: "-2.83%",
        chartData: {
          my: [
            933482.04, 838611.36, 993387.87, 1115219.39, 1329143.98, 724910.41,
            1550466.15, 1738753.35, 1210049.44, 1518877.46, 1090458.63,
            1304637.59,
          ],
          rivalAvg: [
            658636.3, 612634.85, 617531.98, 655335.76, 620258.42, 618229.75,
            623109.77, 653891.34, 614677.54, 634573.17, 651061.96, 630272.85,
          ],
          rivalTop: [
            1425113.18, 1410905.2, 1465631.58, 1470512.76, 1530053.35,
            1520195.45, 1481369.38, 1421444.27, 1417189.79, 1411656.28,
            1508084.01, 1419383.1,
          ],
        },
      },
    },
    {
      key: "vistor",
      desc: "访客数",
      date: {
        cur: 14663,
        pre: "9.1%",
        compareLast: "-1.25%",
        chartData: {
          my: [
            7369, 16715, 20420, 15463, 10823, 21444, 18194, 19730, 14192, 14986,
            9001, 15294, 12062, 7638, 11486, 11188, 16257, 10778, 18476, 19785,
            8933, 20448, 14288, 18157, 21436, 10846, 13210, 10460, 13897, 18994,
            14663,
          ],
          rivalAvg: [
            7834, 8153, 7628, 8149, 7786, 7547, 7871, 7529, 7558, 8003, 8076,
            7794, 7624, 8069, 8225, 7622, 7861, 7516, 7578, 7833, 8017, 7916,
            7845, 7740, 8075, 8018, 8012, 7802, 7691, 8106, 7665,
          ],
          rivalTop: [
            14605, 13996, 14230, 14531, 14079, 15140, 15069, 14015, 14755,
            14046, 14051, 14595, 15077, 14867, 15082, 14196, 14283, 14040,
            14174, 14352, 15149, 14345, 14677, 14347, 14627, 14928, 14197,
            14947, 14230, 13920, 15111,
          ],
        },
      },
      week: {
        cur: 98796,
        pre: "6.3%",
        compareLast: "9.1%",
        chartData: {
          my: [
            94317, 76785, 118659, 128492, 82865, 86503, 77383, 59963, 73062,
            60806, 132711, 135809,
          ],
          rivalAvg: [
            57696, 55716, 55732, 55052, 52557, 56142, 53522, 56084, 57301,
            56283, 55740, 57415,
          ],
          rivalTop: [
            112494, 114832, 111149, 112543, 107655, 118177, 112451, 112524,
            115756, 108902, 114581, 114987,
          ],
        },
      },
      month: {
        cur: 383186,
        pre: "-9.55%",
        compareLast: "0.58%",
        chartData: {
          my: [
            366556, 488562, 392843, 538120, 535180, 293587, 259383, 473625,
            503593, 389666, 569546, 383186,
          ],
          rivalAvg: [
            227706, 229918, 211092, 211203, 210726, 210115, 221843, 229004,
            211470, 228647, 223906, 225394,
          ],
          rivalTop: [
            445141, 448774, 438107, 471160, 442324, 454605, 448052, 472100,
            460378, 471920, 461944, 437098,
          ],
        },
      },
    },
    {
      key: "payTransformRate",
      desc: "支付转化率",
      date: {
        cur: "10.63%",
        pre: "7.34%",
        compareLast: "-3.56%",
        chartData: {
          my: [
            6.11, 5.82, 15.6, 9.69, 14.46, 6.52, 15.38, 11.28, 9.77, 7.94,
            12.71, 7.53, 8.77, 7.72, 14.7, 14.89, 10.97, 6.78, 9.49, 8, 12.78,
            15.74, 9.53, 11.85, 13.87, 7.86, 14.53, 10.6, 8.9, 7.33, 14.99,
          ],
          rivalAvg: [
            5.84, 6.04, 5.54, 5.61, 5.6, 5.84, 5.64, 5.94, 5.66, 5.89, 5.61,
            5.68, 5.57, 5.64, 5.76, 5.64, 5.93, 5.72, 5.58, 6.03, 5.74, 5.83,
            5.54, 5.96, 5.79, 5.72, 5.78, 5.64, 5.62, 5.94, 5.79,
          ],
          rivalTop: [
            17.03, 16.27, 15.85, 16.94, 16.08, 15.8, 16.04, 15.52, 16.45, 15.56,
            16.3, 16.26, 16, 15.74, 15.91, 15.89, 16.26, 15.56, 17.04, 15.52,
            16.45, 15.73, 16.88, 15.78, 16.72, 16.53, 16.78, 15.82, 15.89,
            16.79, 16.92,
          ],
        },
      },
      week: {
        cur: "8.65%",
        pre: "-11.54%",
        compareLast: "1.21%",
        chartData: {
          my: [
            8.73, 10.69, 7.07, 6.88, 7.15, 6.21, 4.86, 6.24, 11.96, 5.43, 8.11,
            4.77,
          ],
          rivalAvg: [
            6.01, 5.89, 5.61, 5.58, 6.03, 5.86, 5.61, 6.02, 5.72, 5.7, 5.67,
            5.73,
          ],
          rivalTop: [
            16.77, 15.89, 15.94, 15.7, 15.84, 15.98, 15.68, 16.77, 16.71, 17,
            16.89, 16.72,
          ],
        },
      },
      month: {
        cur: "9.32%",
        pre: "1.65%",
        compareLast: "-23.1%",
        chartData: {
          my: [
            6.83, 6.23, 13.11, 10.98, 11.62, 12.16, 8.99, 10.14, 10.4, 8.83,
            6.29, 9.32,
          ],
          rivalAvg: [
            5.53, 5.59, 5.95, 5.57, 5.6, 5.71, 5.96, 5.94, 5.77, 5.99, 5.65,
            5.88,
          ],
          rivalTop: [
            15.68, 16.7, 16.76, 15.64, 16.13, 17.01, 16.59, 15.76, 15.86, 16.59,
            16.94, 16.7,
          ],
        },
      },
    },
    {
      key: "vistorPrice",
      desc: "客单价",
      date: {
        cur: 392.12,
        pre: "6.1%",
        compareLast: "-2.5%",
        chartData: {
          my: [
            223.57, 298.2, 518.05, 570.43, 329.17, 532.77, 485.25, 349.03,
            373.2, 270.28, 205.4, 258.67, 451.69, 509.19, 269.66, 226.94,
            522.88, 358.1, 232.37, 308.17, 446.38, 285.71, 455.09, 436.72,
            252.12, 471.03, 313.45, 363.9, 253.24, 425.89, 273.86,
          ],
          rivalAvg: [
            373.68, 351.65, 367.68, 359.28, 379.13, 365.35, 352.76, 351.13,
            368.21, 384.86, 353.39, 384.52, 358.07, 350.36, 358.71, 370.61,
            374.43, 384.65, 381.64, 362.68, 362.69, 366.45, 359.37, 381.39,
            383.12, 355.94, 365.47, 363.63, 374.01, 364.39, 362.84,
          ],
          rivalTop: [
            753.55, 738.81, 750.98, 718.16, 733.08, 754.46, 767.87, 724.2,
            744.83, 773.09, 710.64, 710.49, 714.3, 712.64, 757.19, 760.35,
            741.29, 737.36, 773.49, 763.67, 733.81, 740.41, 769.04, 743.68,
            750.53, 714.87, 772.66, 757.9, 710.77, 732.92, 718.23,
          ],
        },
      },
      week: {
        cur: 415.09,
        pre: "9.12%",
        compareLast: "6.81%",
        chartData: {
          my: [
            608.98, 485.41, 365.24, 363.76, 384.09, 281.93, 580.65, 461.37,
            492.3, 493.54, 239.86, 508.3,
          ],
          rivalAvg: [
            369.89, 372.99, 373.03, 362.35, 366.77, 356.41, 382.34, 384.78,
            372.64, 380.52, 370.53, 365.91,
          ],
          rivalTop: [
            754.64, 764.81, 720.59, 751.43, 752.4, 744.1, 711.82, 735.59,
            745.85, 744.77, 712.39, 780.53,
          ],
        },
      },
      month: {
        cur: 402.08,
        pre: "9.89%",
        compareLast: "4.51%",
        chartData: {
          my: [
            573.25, 528.48, 354.59, 588.69, 310.42, 213.2, 465.94, 273.63,
            488.41, 448.1, 259.69, 350.52,
          ],
          rivalAvg: [
            384.98, 356.62, 367.38, 368.51, 362.78, 353.36, 367.13, 380.25,
            363.27, 384.3, 376.53, 380.49,
          ],
          rivalTop: [
            713.1, 775.64, 753.21, 739.72, 715.91, 767.91, 715.82, 768.12,
            740.3, 761.74, 715.89, 759.89,
          ],
        },
      },
    },
    {
      key: "successRefund",
      desc: "成功退款金额",
      date: {
        cur: 12562.04,
        pre: "-2.34%",
        compareLast: "9.01%",
        chartData: {
          my: [
            11672.43, 7536.33, 6801.05, 18778.76, 7817.4, 13074.16, 12200.8,
            12329.02, 11609.21, 6551.34, 18363.68, 16336.2, 17610.49, 18078.29,
            18043.11, 10122.3, 9786.02, 12532.68, 6736.88, 7445.66, 16164.71,
            6847.07, 17198.49, 11007.94, 10378.12, 17546.03, 14950.28, 16543.34,
            7107.81, 17289.93, 11111.35,
          ],
          rivalAvg: [
            9602.8, 9610.59, 9007.31, 9597.22, 9131.69, 9095.73, 8901.05,
            9448.4, 8962.57, 8809.15, 8873.1, 8814.11, 8986.77, 9263.05, 9039.2,
            9359.2, 8835.84, 9610.16, 8901.98, 9578.09, 9361.24, 8801.9,
            9639.63, 9424.13, 9290.42, 9179.99, 9162.4, 9117.28, 9528.33,
            9456.34, 9412.93,
          ],
          rivalTop: [
            15082.32, 16190.16, 15147.25, 15021.64, 15170.66, 15697.5, 15113.32,
            15846.39, 15907.62, 15093.63, 15991.22, 15881.86, 15646.09,
            16172.38, 15751.02, 16140.74, 15632.88, 15587.72, 15096.73,
            16454.63, 16427.69, 16171.39, 15584.8, 16182.9, 15213.88, 16471.07,
            15761.9, 16112.33, 16438.05, 15727.37, 15730.5,
          ],
        },
      },
      week: {
        cur: 89763.25,
        pre: "12.1%",
        compareLast: "8.3%",
        chartData: {
          my: [
            93068.94, 132293.36, 91613.08, 50559.44, 78367.49, 45497.55,
            126348.88, 103069.54, 90870.71, 132879.71, 104188.05, 57663.71,
          ],
          rivalAvg: [
            63057.98, 67396.33, 66549.68, 67531.11, 65544.19, 67202.75,
            65124.29, 63288.56, 65378.46, 67437.68, 66265.17, 64350.06,
          ],
          rivalTop: [
            116047.11, 119457.95, 114371.8, 113850.73, 118114.39, 118165.42,
            118306.01, 122189.18, 119008.04, 115799.11, 122203.37, 114213.38,
          ],
        },
      },
      month: {
        cur: 346885,
        pre: "-3.12",
        compareLast: "8.62%",
        chartData: {
          my: [
            318702.7, 255621.2, 472095.35, 305683.08, 251421.96, 309041.59,
            372559.68, 201041.91, 267341.14, 177681.94, 215178.16, 513596.68,
          ],
          rivalAvg: [
            269071.25, 267173.35, 254956.12, 256681.66, 254687.94, 271954.63,
            258036.53, 254776.02, 254789.35, 270328.29, 254356.41, 255574.07,
          ],
          rivalTop: [
            450693.05, 473367.68, 481175.16, 461067.58, 476878.51, 483524.22,
            485785.12, 453918.13, 491553.57, 452092.95, 480677.71, 488937.57,
          ],
        },
      },
    },
    {
      key: "trainWorst",
      desc: "直通车花费",
      date: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
          ],
          rivalAvg: [
            10.0, 11.0, 11.0, 13.0, 15.0, 9.0, 10.0, 10.0, 13.0, 14.0, 16.0,
            13.0, 11.0, 9.0, 11.0, 11.0, 13.0, 13.0, 11.6, 11.0, 11.0, 11.0,
            10.0, 11.0, 12.0, 11.0, 10.0, 10.0, 11.0, 11.0,
          ],
          rivalTop: [
            58.9, 58.0, 61.8, 62.0, 85.0, 61.2, 67.2, 65.0, 71.6, 98.1, 99.5,
            100.0, 72.0, 73.5, 70.2, 66.0, 91.5, 99.0, 100.0, 80.2, 91.0, 87.0,
            63.0, 78.2, 91.5, 76.2, 72.2, 64.8, 77.0, 70.8,
          ],
        },
      },
      week: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            63.0, 62.4, 62.2, 72.2, 49.4, 62.0, 70.6, 61.2, 55.6, 54.0, 64.0,
            57.2,
          ],
          rivalTop: [
            332.0, 290.2, 346.4, 362.8, 400.0, 429.7, 356.2, 297.8, 280.4,
            362.9, 311.8, 357.3,
          ],
        },
      },
      month: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            189.6, 200.0, 172.0, 109.4, 103.2, 154.4, 176.6, 190.0, 197.0,
            199.0, 139.0, 100.0,
          ],
          rivalTop: [
            599.4, 717.0, 648.3, 407.4, 404.2, 595.6, 747.2, 927.0, 871.0,
            789.7, 738.5, 662.5,
          ],
        },
      },
    },
    {
      key: "magicCubeCost",
      desc: "引力魔方花费",
      date: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
          ],
          rivalAvg: [
            129.0, 98.2, 98.0, 98.6, 106.0, 97.4, 101.2, 91.4, 96.0, 95.2, 69.0,
            49.0, 50.8, 49.0, 52.0, 50.0, 48.6, 49.0, 49.0, 55.8, 68.2, 89.0,
            82.8, 67.8, 96.0, 95.0, 63.0, 87.8, 54.0, 51.0,
          ],
          rivalTop: [
            2246.0, 1486.8, 1870.0, 1828.4, 1851.2, 1199.6, 1390.8, 1410.0,
            1310.0, 1489.8, 1611.0, 1749.4, 1474.4, 1439.2, 1422.5, 1141.5,
            1316.9, 978.6, 1164.4, 1413.3, 1943.0, 1629.4, 1534.9, 1518.0,
            1256.1, 1446.2, 1234.0, 1445.8, 1353.0, 1460.0,
          ],
        },
      },
      week: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            146.0, 153.4, 300.0, 238.0, 264.2, 499.0, 382.4, 400.0, 328.6,
            327.0, 155.8, 248.6,
          ],
          rivalTop: [
            4469.0, 3770.9, 6327.5, 5763.0, 8134.1, 10084.0, 10588.4, 10093.5,
            9801.4, 8802.0, 7206.4, 9003.6,
          ],
        },
      },
      month: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            264.4, 338.8, 295.6, 208.0, 262.6, 230.0, 199.0, 311.4, 369.0,
            351.4, 388.2, 392.0,
          ],
          rivalTop: [
            2169.6, 2363.4, 5139.3, 9888.2, 6981.1, 9785.0, 4082.5, 4183.8,
            10664.0, 13399.0, 26945.0, 35705.8,
          ],
        },
      },
    },
    {
      key: "vistor",
      desc: "万相台花费",
      date: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
          ],
          rivalAvg: [
            896.0, 998.0, 848.0, 1345.6, 1100.0, 985.6, 1800.0, 1264.2, 1339.2,
            1379.0, 1412.0, 1691.2, 1484.0, 1581.6, 1375.6, 1401.4, 1188.0,
            1701.4, 1100.0, 1200.0, 440.0, 555.4, 536.0, 567.6, 644.0, 586.4,
            899.2, 359.6, 436.0, 438.8,
          ],
          rivalTop: [
            20193.8, 20606.0, 20006.0, 20846.5, 26925.0, 21303.0, 47598.0,
            36893.4, 26380.7, 39880.0, 39759.6, 36277.0, 41047.4, 35007.2,
            50915.4, 39672.1, 36942.8, 41515.6, 28001.6, 24316.6, 2968.8,
            3603.6, 5177.2, 7887.3, 6000.0, 7788.0, 9240.1, 2734.4, 2768.8,
            4620.0,
          ],
        },
      },
      week: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            896.0, 998.0, 848.0, 1345.6, 1100.0, 985.6, 1800.0, 1264.2, 1339.2,
            1379.0, 1412.0, 1691.2,
          ],
          rivalTop: [
            20193.8, 20606.0, 20006.0, 20846.5, 26925.0, 21303.0, 47598.0,
            36893.4, 26380.7, 39880.0, 39759.6, 36277.0,
          ],
        },
      },
      month: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            1100.0, 1200.0, 440.0, 555.4, 536.0, 567.6, 644.0, 586.4, 899.2,
            359.6, 436.0, 438.8,
          ],
          rivalTop: [
            2968.8, 3603.6, 5177.2, 7887.3, 6000.0, 7788.0, 9240.1, 2734.4,
            2768.8, 4620.0,
          ],
        },
      },
    },
    {
      key: "taobaoCharge",
      desc: "淘宝客佣金",
      date: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
          ],
          rivalAvg: [
            10.0, 11.0, 11.0, 13.0, 15.0, 9.0, 10.0, 10.0, 13.0, 14.0, 16.0,
            13.0, 11.0, 9.0, 11.0, 11.0, 13.0, 13.0, 11.6, 11.0, 11.0, 11.0,
            10.0, 11.0, 12.0, 11.0, 10.0, 10.0, 11.0, 11.0,
          ],
          rivalTop: [
            58.9, 58.0, 61.8, 62.0, 85.0, 61.2, 67.2, 65.0, 71.6, 98.1, 99.5,
            100.0, 72.0, 73.5, 70.2, 66.0, 91.5, 99.0, 100.0, 80.2, 91.0, 87.0,
            63.0, 78.2, 91.5, 76.2, 72.2, 64.8, 77.0, 70.8,
          ],
        },
      },
      week: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            63.0, 62.4, 62.2, 72.2, 49.4, 62.0, 70.6, 61.2, 55.6, 54.0, 64.0,
            57.2,
          ],
          rivalTop: [
            332.0, 290.2, 346.4, 362.8, 400.0, 429.7, 356.2, 297.8, 280.4,
            362.9, 311.8, 357.3,
          ],
        },
      },
      month: {
        cur: 0,
        pre: null,
        compareLast: null,
        chartData: {
          my: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          rivalAvg: [
            189.6, 200.0, 172.0, 109.4, 103.2, 154.4, 176.6, 190.0, 197.0,
            199.0, 139.0, 100.0,
          ],
          rivalTop: [
            599.4, 717.0, 648.3, 407.4, 404.2, 595.6, 747.2, 927.0, 871.0,
            789.7, 738.5, 662.5,
          ],
        },
      },
    },
    {
      key: "payBuyerCount",
      desc: "支付买家数",
      date: {
        cur: 7,
        pre: "6.1%",
        compareLast: "12.5%",
        chartData: {
          my: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 5, 10, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
          ],
          rivalAvg: [
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            2, 2, 2, 2, 2, 2, 2,
          ],
          rivalTop: [
            7, 7, 7, 7, 8, 6, 6, 6, 7, 7, 8, 7, 6, 6, 10, 11, 12, 13, 13, 7, 8,
            7, 8, 8, 7, 7, 7, 7, 7, 7,
          ],
        },
      },
      week: {
        cur: 20,
        pre: "100%",
        compareLast: "-98.5%",
        chartData: {
          my: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20],
          rivalAvg: [3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 4],
          rivalTop: [18, 17, 17, 17, 17, 17, 17, 19, 20, 18, 23, 19],
        },
      },
      month: {
        cur: 30,
        pre: null,
        compareLast: "-100%",
        chartData: {
          my: [2044, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
          rivalAvg: [4, 4, 4, 4, 3, 3, 4, 5, 4, 4, 4, 4],
          rivalTop: [27, 28, 24, 21, 16, 19, 26, 34, 29, 29, 31, 30],
        },
      },
    },
    {
      key: "regularCustomerRate",
      desc: "老客复购率",
      date: {
        cur: "-",
        pre: null,
        compareLast: null,
      },
      week: {
        cur: "-",
        pre: null,
        compareLast: null,
        chartData: {
          my: [2044, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
          rivalAvg: [4, 4, 4, 4, 3, 3, 4, 5, 4, 4, 4, 4],
          rivalTop: [27, 28, 24, 21, 16, 19, 26, 34, 29, 29, 31, 30],
        },
      },
      month: {
        cur: "-",
        pre: null,
        compareLast: null,
        chartData: {
          my: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          ],
          rivalAvg: [
            0.0286, 0.0417, 0.04, 0.0333, 0.0355, 0.0455, 0.0476, 0.0526,
            0.0435, 0.0417, 0.0476, 0.0435, 0.0588, 0.0526, 0.0455, 0.0625,
            0.0714, 0.0625, 0.0667, 0.0455, 0.0476, 0.04, 0.0435, 0.04, 0.0411,
            0.0339, 0.0313, 0.0323, 0.0375, 0.037,
          ],
          rivalTop: [
            0.1667, 0.1714, 0.1429, 0.125, 0.1429, 0.2, 0.2, 0.25, 0.1765,
            0.1667, 0.1818, 0.1667, 0.3333, 0.25, 0.2, 0.25, 0.2106, 0.2,
            0.1667, 0.2, 0.1667, 0.1794, 0.1429, 0.1667, 0.1429, 0.1429, 0.2,
            0.16, 0.1667, 0.1818,
          ],
        },
      },
    },
  ],
  chart: {},
};

export default home;
