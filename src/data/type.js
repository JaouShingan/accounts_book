const outType = [{
        id: 1,
        name: "餐饮",
        sub: [{
                id: 1,
                name: "早餐"
            },
            {
                id: 2,
                name: "午餐"
            },
            {
                id: 3,
                name: "晚餐"
            },
            {
                id: 4,
                name: "宵夜"
            },
            {
                id: 5,
                name: "零食"
            },
            {
                id: 6,
                name: "饮料"
            },
            {
                id: 7,
                name: "酒类"
            },
            {
                id: 8,
                name: "水果"
            }
        ]
    },
    {
        id: 2,
        name: "交通",
        sub: [{
                id: 1,
                name: "公交"
            },
            {
                id: 2,
                name: "地铁"
            },
            {
                id: 3,
                name: "客车"
            },
            {
                id: 4,
                name: "打的"
            },
            {
                id: 5,
                name: "飞机"
            },
            {
                id: 6,
                name: "火车"
            },
            {
                id: 7,
                name: "轮船"
            }
        ]
    },
    {
        id: 3,
        name: "游戏",
        sub: [{
            id: 1,
            name: "充值"
        }, {
            id: 2,
            name: "购买"
        }]
    },
    {
        id: 4,
        name: "购物",
        sub: [{
                id: 1,
                name: "服装"
            },
            {
                id: 2,
                name: "饰品"
            },
            {
                id: 3,
                name: "鞋类"
            },
            {
                id: 4,
                name: "3C电子"
            },
            {
                id: 5,
                name: "家用电器"
            }
        ]
    },
    {
        id: 5,
        name: "日常用品",
        sub: [{
                id: 1,
                name: "牙刷牙膏"
            },
            {
                id: 2,
                name: "毛巾"
            },
            {
                id: 3,
                name: "香皂/沐浴露"
            },
            {
                id: 4,
                name: "洗发液"
            },
            {
                id: 5,
                name: "床上用品"
            },
            {
                id: 6,
                name: "水杯酒具"
            }
        ]
    },
    {
        id: 6,
        name: "五金",
        sub: [{
            id: 1,
            name: "家用工具"
        }, {
            id: 2,
            name: "灯饰"
        }]
    },
    {
        id: 7,
        name: "住房网络",
        sub: [{
            id: 1,
            name: "房租"
        }, {
            id: 2,
            name: "水电气物业"
        }]
    },
    {
        id: 8,
        name: "定期支出",
        sub: [{
                id: 1,
                name: "网费"
            },
            {
                id: 2,
                name: "电话费"
            },
            {
                id: 3,
                name: "会员充值"
            }
        ]
    },
    {
        id: 9,
        name: "娱乐休闲",
        sub: [{
                id: 1,
                name: "约会"
            },
            {
                id: 2,
                name: "游玩"
            },
            {
                id: 3,
                name: "运动健身"
            },
            {
                id: 4,
                name: "聚餐"
            }
        ]
    },
    {
        id: 10,
        name: "人情往来",
        sub: [{
                id: 1,
                name: "请客送礼"
            },
            {
                id: 2,
                name: "孝敬家长"
            },
            {
                id: 3,
                name: "红白喜事"
            }
        ]
    },
    {
        id: 11,
        name: "医疗保险",
        sub: [{
            id: 1,
            name: "药品费"
        }, {
            id: 2,
            name: "诊疗费"
        }]
    },
    {
        id: 12,
        name: "金融保险",
        sub: [{
                id: 1,
                name: "基金"
            },
            {
                id: 2,
                name: "股票"
            },
            {
                id: 3,
                name: "定期"
            }
        ]
    },
    {
        id: 13,
        name: "学习",
        sub: [{
            id: 1,
            name: "学习资料"
        }, {
            id: 2,
            name: "培训"
        }]
    },
    {
        id: 14,
        name: "其他",
        sub: [{
            id: 1,
            name: "丢失钱物"
        }]
    }
];
const inType = [{
        id: 1,
        name: '工资薪水',
        sub: [{
                id: 1,
                name: '工资'
            },
            {
                id: 2,
                name: '兼职'
            }
        ]
    },
    {
        id: 2,
        name: '金融投资',
        sub: [{
                id: 1,
                name: '基金'
            },
            {
                id: 2,
                name: '股票'
            },
            {
                id: 3,
                name: '定期'
            }
        ]
    },
    {
        id: 3,
        name: '其他',
        sub: [{
                id: 1,
                name: '礼金'
            },
            {
                id: 2,
                name: '其他'
            }
        ]
    }
];
export {
    outType,
    inType
}