const rawData = [{
  date: '11.03',
  cases: 1,
  losses: 0,
  tests: 0,
  positive: 1,
  dailyLoss: 0
}, {
  date: '12.03',
  cases: 1,
  losses: 0,
  tests: 0,
  positive: 0,
  dailyLoss: 0
}, {
  date: '13.03',
  cases: 5,
  losses: 0,
  tests: 0,
  positive: 4,
  dailyLoss: 0
}, {
  date: '14.03',
  cases: 6,
  losses: 0,
  tests: 0,
  positive: 1,
  dailyLoss: 0
}, {
  date: '15.03',
  cases: 18,
  losses: 0,
  tests: 0,
  positive: 12,
  dailyLoss: 0
}, {
  date: '16.03',
  cases: 47,
  losses: 0,
  tests: 0,
  positive: 29,
  dailyLoss: 0
}, {
  date: '17.03',
  cases: 98,
  losses: 1,
  tests: 0,
  positive: 51,
  dailyLoss: 1
}, {
  date: '18.03',
  cases: 191,
  losses: 2,
  tests: 3656,
  positive: 93,
  dailyLoss: 1
}, {
  date: '19.03',
  cases: 359,
  losses: 4,
  tests: 1981,
  positive: 168,
  dailyLoss: 2
}, {
  date: '20.03',
  cases: 670,
  losses: 9,
  tests: 3656,
  positive: 311,
  dailyLoss: 5
}, {
  date: '21.03',
  cases: 947,
  losses: 21,
  tests: 2953,
  positive: 277,
  dailyLoss: 12
}, {
  date: '22.03',
  cases: 1236,
  losses: 30,
  tests: 0,
  positive: 289,
  dailyLoss: 9
}, {
  date: '23.03',
  cases: 1529,
  losses: 37,
  tests: 3672,
  positive: 293,
  dailyLoss: 7
}, {
  date: '24.03',
  cases: 1872,
  losses: 44,
  tests: 3952,
  positive: 343,
  dailyLoss: 7
}, {
  date: '25.03',
  cases: 2433,
  losses: 59,
  tests: 5035,
  positive: 561,
  dailyLoss: 15
}, {
  date: '26.03',
  cases: 3629,
  losses: 75,
  tests: 7286,
  positive: 1196,
  dailyLoss: 16
}, {
  date: '27.03',
  cases: 5698,
  losses: 92,
  tests: 7533,
  positive: 2069,
  dailyLoss: 17
}, {
  date: '28.03',
  cases: 7402,
  losses: 108,
  tests: 7641,
  positive: 1704,
  dailyLoss: 16
}, {
  date: '29.03',
  cases: 9217,
  losses: 131,
  tests: 9982,
  positive: 1815,
  dailyLoss: 23
}, {
  date: '30.03',
  cases: 10827,
  losses: 168,
  tests: 11535,
  positive: 1610,
  dailyLoss: 37
}, {
  date: '31.03',
  cases: 13531,
  losses: 214,
  tests: 15422,
  positive: 2704,
  dailyLoss: 46
}, {
  date: '01.04',
  cases: 15679,
  losses: 277,
  tests: 14396,
  positive: 2148,
  dailyLoss: 63
}, {
  date: '02.04',
  cases: 18135,
  losses: 356,
  tests: 18757,
  positive: 2456,
  dailyLoss: 79
}, {
  date: '03.04',
  cases: 20921,
  losses: 425,
  tests: 16160,
  positive: 2786,
  dailyLoss: 69
}, {
  date: '04.04',
  cases: 23934,
  losses: 501,
  tests: 19664,
  positive: 3013,
  dailyLoss: 76,
  recovery: 786,
  dailyRecovery: 302
}, {
  date: '05.04',
  cases: 27069,
  losses: 574,
  tests: 20065,
  positive: 3135,
  dailyLoss: 73,
  recovery: 1042,
  dailyRecovery: 256
}, {
  date: '06.04',
  cases: 30217,
  losses: 649,
  tests: 21400,
  positive: 3148,
  dailyLoss: 75,
  recovery: 1326,
  dailyRecovery: 284
}, {
  date: '07.04',
  cases: 34109,
  losses: 725,
  tests: 20023,
  positive: 3892,
  dailyLoss: 76,
  recovery: 1582,
  dailyRecovery: 256
}, {
  date: '08.04',
  cases: 38226,
  losses: 812,
  tests: 24900,
  positive: 4117,
  dailyLoss: 87,
  recovery: 1846,
  dailyRecovery: 264
}, {
  date: '09.04',
  cases: 42282,
  losses: 908,
  tests: 28578,
  positive: 4056,
  dailyLoss: 96,
  recovery: 2142,
  dailyRecovery: 296
}, {
  date: '10.04',
  cases: 47029,
  losses: 1006,
  tests: 30864,
  positive: 4747,
  dailyLoss: 98,
  recovery: 2423,
  dailyRecovery: 281
}, {
  date: '11.04',
  cases: 52167,
  losses: 1101,
  tests: 33170,
  positive: 5138,
  dailyLoss: 95,
  recovery: 2965,
  dailyRecovery: 542
}, {
  date: '12.04',
  cases: 56956,
  losses: 1198,
  tests: 35720,
  positive: 4789,
  dailyLoss: 97,
  recovery: 3446,
  dailyRecovery: 481
}, {
  date: '13.04',
  cases: 61049,
  losses: 1296,
  tests: 34456,
  positive: 4093,
  dailyLoss: 98,
  recovery: 3957,
  dailyRecovery: 511
}, {
  date: '14.04',
  cases: 65111,
  losses: 1403,
  tests: 33070,
  positive: 4062,
  dailyLoss: 107,
  recovery: 4799,
  dailyRecovery: 842
}, {
  date: '15.04',
  cases: 69392,
  losses: 1518,
  tests: 34090,
  positive: 4281,
  dailyLoss: 115,
  recovery: 5674,
  dailyRecovery: 875
}, {
  date: '16.04',
  cases: 74193,
  losses: 1643,
  tests: 40427,
  positive: 4801,
  dailyLoss: 125,
  recovery: 7089,
  dailyRecovery: 1415
}, {
  date: '17.04',
  cases: 78546,
  losses: 1769,
  tests: 40270,
  positive: 4353,
  dailyLoss: 126,
  recovery: 8631,
  dailyRecovery: 1542
}, {
  date: '18.04',
  cases: 82329,
  losses: 1890,
  tests: 40520,
  positive: 3783,
  dailyLoss: 121,
  recovery: 10453,
  dailyRecovery: 1822
}, {
  date: '19.04',
  cases: 86306,
  losses: 2017,
  tests: 35344,
  positive: 3977,
  dailyLoss: 127,
  recovery: 11976,
  dailyRecovery: 1523
}, {
  date: '20.04',
  cases: 90980,
  losses: 2140,
  tests: 39703,
  positive: 4674,
  dailyLoss: 123,
  recovery: 13430,
  dailyRecovery: 1454
}, {
  date: '21.04',
  cases: 95591,
  losses: 2259,
  tests: 39429,
  positive: 4611,
  dailyLoss: 119,
  recovery: 14918,
  dailyRecovery: 1488
}, {
  date: '22.04',
  cases: 98674,
  losses: 2376,
  tests: 37535,
  positive: 3083,
  dailyLoss: 117,
  recovery: 16477,
  dailyRecovery: 1559
}, {
  date: '23.04',
  cases: 101790,
  losses: 2491,
  tests: 40962,
  positive: 3116,
  dailyLoss: 115,
  recovery: 18491,
  dailyRecovery: 2014
}, {
  date: '24.04',
  cases: 104912,
  losses: 2600,
  tests: 38351,
  positive: 3122,
  dailyLoss: 109,
  recovery: 21737,
  dailyRecovery: 3246
}, {
  date: '25.04',
  cases: 107773,
  losses: 2706,
  tests: 38308,
  positive: 2861,
  dailyLoss: 106,
  recovery: 25582,
  dailyRecovery: 3845
}, {
  date: '26.04',
  cases: 110130,
  losses: 2805,
  tests: 30177,
  positive: 2357,
  dailyLoss: 99,
  recovery: 29140,
  dailyRecovery: 3558
}, {
  date: '27.04',
  cases: 112261,
  losses: 2900,
  tests: 20143,
  positive: 2131,
  dailyLoss: 95,
  recovery: 33791,
  dailyRecovery: 4651
}, {
  date: '28.04',
  cases: 114653,
  losses: 2992,
  tests: 29230,
  positive: 2392,
  dailyLoss: 92,
  recovery: 38809,
  dailyRecovery: 5018
}, {
  date: '29.04',
  cases: 117589,
  losses: 3081,
  tests: 43498,
  positive: 2936,
  dailyLoss: 89,
  recovery: 44040,
  dailyRecovery: 5231
}, {
  date: '30.04',
  cases: 120204,
  losses: 3174,
  tests: 42004,
  positive: 2615,
  dailyLoss: 93,
  recovery: 48886,
  dailyRecovery: 4846
}, {
  date: '01.05',
  cases: 122392,
  losses: 3258,
  tests: 41431,
  positive: 2188,
  dailyLoss: 84,
  recovery: 53808,
  dailyRecovery: 4922
}, {
  date: '02.05',
  cases: 124375,
  losses: 3336,
  tests: 36318,
  positive: 1983,
  dailyLoss: 78,
  recovery: 58259,
  dailyRecovery: 4451
}, {
  date: '03.05',
  cases: 126045,
  losses: 3397,
  tests: 24001,
  positive: 1670,
  dailyLoss: 61,
  recovery: 63151,
  dailyRecovery: 4892
}, {
  date: '04.05',
  cases: 127659,
  losses: 3461,
  tests: 35771,
  positive: 1614,
  dailyLoss: 64,
  recovery: 68166,
  dailyRecovery: 5015
}, {
  date: '05.05',
  cases: 129491,
  losses: 3520,
  tests: 33283,
  positive: 1832,
  dailyLoss: 59,
  recovery: 73285,
  dailyRecovery: 5119
}, {
  date: '06.05',
  cases: 131744,
  losses: 3584,
  tests: 30303,
  positive: 2253,
  dailyLoss: 64,
  recovery: 78202,
  dailyRecovery: 4917
}, {
  date: '07.05',
  cases: 133721,
  losses: 3641,
  tests: 30395,
  positive: 1977,
  dailyLoss: 57,
  recovery: 82984,
  dailyRecovery: 4782
}, {
  date: '08.05',
  cases: 135569,
  losses: 3689,
  tests: 33687,
  positive: 1848,
  dailyLoss: 48,
  recovery: 86396,
  dailyRecovery: 3412
}, {
  date: '09.05',
  cases: 137115,
  losses: 3739,
  tests: 35605,
  positive: 1546,
  dailyLoss: 50,
  recovery: 89480,
  dailyRecovery: 3084
}];

const data = rawData.map(entry => ({
  ...entry,
  caseToTestRatio: entry.tests ? entry.positive / entry.tests : null,
  lossToCaseRatio: entry.cases ? entry.losses / entry.cases : null
}));

export default data;
