//NCCP全球云商云节点分布城市
var gcbNodes = [
    "上海",
    "南京",
    "苏州",
    "天津",
    "北京",
    "成都",
    "武汉",
    "西安",
    "南宁",
    "拉萨",
    "南昌",
    "长春",
    "哈尔滨",
    "沈阳",
    "乌鲁木齐",
    "太原",
    "西宁",
    "兰州",
    "郑州",
    "长沙重庆",
    "青岛",
    "廊坊",
    "石家庄",
    "张家口",
    "呼和浩特",
    "乌兰察布",
    "杭州河源广州",
    "深圳贵阳",
    "福州",
    "昆明",
    "海口",
    "宿迁",
    "芜湖",
    "中卫",
    "高雄",
    "台北",
    "香港",
    "迪拜",
    "都柏林",
    "悉尼",
    "堪培拉",
    "墨尔本",
    "珀斯",
    "麦纳麦",
    "圣保罗",
    "里约热内卢",
    "巴西圣保罗互联区",
    "法兰克福",
    "汉堡",
    "慕尼黑",
    "柏林",
    "UAE North（奥厄）",
    "莫斯科",
    "马赛",
    "巴黎",
    "赫尔辛基",
    "釜山",
    "春川",
    "首尔",
    "阿姆斯特丹",
    "多伦多",
    "魁北克市",
    "蒙特利尔",
    "温哥华",
    "吉隆坡",
    "马尼拉",
    "哥伦布",
    "波特兰",
    "雷斯顿",
    "阿什本",
    "纽瓦克",
    "拉斯维加斯",
    "堪萨斯城",
    "达拉斯",
    "圣安东尼奥",
    "休斯顿",
    "芝加哥",
    "康瑟尔布拉夫斯",
    "明尼阿波利斯",
    "西雅图",
    "盐湖城",
    "华盛顿",
    "洛杉矶",
    "圣克拉拉",
    "米尔皮塔斯",
    "埃尔塞贡多",
    "奥克兰",
    "湾区（Bay Area）",
    "圣荷西",
    "旧金山（硅谷）",
    "纽约圣地亚哥",
    "丹佛",
    "菲尼克斯",
    "亚特兰大",
    "艾奥瓦",
    "昆西",
    "波士顿费城",
    "迈阿密",
    "克雷塔罗市",
    "墨西哥城",
    "约翰内斯堡",
    "开普敦",
    "拉各斯",
    "斯塔万格",
    "奥斯陆大阪",
    "东京",
    "斯德哥尔摩",
    "苏黎世",
    "日内瓦",
    "曼谷",
    "新加坡",
    "米兰",
    "孟买",
    "金奈",
    "班加罗尔",
    "德里",
    "海德拉巴",
    "雅加达",
    "伦敦",
    "曼彻斯特",
    "纽波特",
    "胡志明市",
    "布拉格",
    "华沙",
    "哥本哈根",
    "马德里",
    "维也纳",
    "海法",
    "布宜诺斯艾利斯",
    "波哥大",
    "吉达",
]

var cityList = {
    北京: { name: "北京", longitude: 116.3, latitude: 39.9 },
    上海: { name: "上海", longitude: 121.0, latitude: 31.0 },
    西安: { name: "西安", longitude: 108.0, latitude: 34.0 },
    成都: { name: "成都", longitude: 103.0, latitude: 31.0 },
    乌鲁木齐: { name: "乌鲁木齐", longitude: 87.0, latitude: 43.0 },
    拉萨: { name: "拉萨", longitude: 91.06, latitude: 29.36 },
    广州: { name: "广州", longitude: 113.0, latitude: 23.06 },
    哈尔滨: { name: "哈尔滨", longitude: 127.0, latitude: 45.5 },
    沈阳: { name: "沈阳", longitude: 123.43, latitude: 41.8 },
    武汉: { name: "武汉", longitude: 114.0, latitude: 30.0 },
    海口: { name: "海口", longitude: 110.0, latitude: 20.03 },
    纽约: { name: "纽约", longitude: -74.5, latitude: 40.5 },
    伦敦: { name: "伦敦", longitude: 0.1, latitude: 51.3 },
    巴黎: { name: "巴黎", longitude: 2.2, latitude: 48.5 },
    开普敦: { name: "开普敦", longitude: 18.25, latitude: -33.5 },
    悉尼: { name: "悉尼", longitude: 151.1, latitude: -33.51 },
    东京: { name: "东京", longitude: 139.69, latitude: 35.69 },
    里约热内卢: { name: "里约热内卢", longitude: -43.11, latitude: -22.54 },
};

//城市之间的连线，可以定义颜色（数据来自业务系统）
var bizLines = [
    {
        from: "北京",
        to: [
            "上海",
            "西安",
            "成都",
            "乌鲁木齐",
            "拉萨",
            "广州",
            "哈尔滨",
            "沈阳",
            "武汉",
            "海口",
            "纽约",
            "伦敦",
            "巴黎",
            "开普敦",
            "悉尼",
            "东京",
            "里约热内卢",
        ],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "上海",
        to: [
            "北京",
            "上海",
            "西安",
            "成都",
            "乌鲁木齐",
            "拉萨",
            "广州",
            "哈尔滨",
            "沈阳",
            "武汉",
            "海口",
            "纽约",
            "伦敦",
            "巴黎",
            "开普敦",
            "悉尼",
            "东京",
            "里约热内卢",
        ],
        color: `rgba(255, 216, 0, 1)`,
    },
    {
        from: "西安",
        to: ["北京", "上海", "成都", "广州", "乌鲁木齐", "海口"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "成都",
        to: ["北京", "上海", "广州", "武汉", "海口", "纽约", "悉尼"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "乌鲁木齐",
        to: ["北京", "上海", "西安"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "广州",
        to: [
            "北京",
            "上海",
            "成都",
            "拉萨",
            "武汉",
            "海口",
            "纽约",
            "伦敦",
            "巴黎",
            "悉尼",
            "东京",
            "里约热内卢",
        ],
        color: `rgba(255, 147, 0, 1)`,
    },
    { from: "哈尔滨", to: ["北京", "沈阳"], color: `rgba(255, 147, 0, 1)` },
    { from: "沈阳", to: ["北京", "哈尔滨"], color: `rgba(255, 147, 0, 1)` },
    {
        from: "海口",
        to: ["北京", "上海", "成都", "广州"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "纽约",
        to: ["北京", "上海", "成都", "广州"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "伦敦",
        to: ["北京", "上海", "广州"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "巴黎",
        to: ["北京", "上海", "广州"],
        color: `rgba(255, 147, 0, 1)`,
    },
    { from: "开普敦", to: ["北京", "上海"], color: `rgba(255, 147, 0, 1)` },
    {
        from: "悉尼",
        to: ["北京", "上海", "成都", "广州"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "东京",
        to: ["北京", "上海", "广州"],
        color: `rgba(255, 147, 0, 1)`,
    },
    {
        from: "里约热内卢",
        to: ["北京", "上海", "广州"],
        color: `rgba(255, 147, 0, 1)`,
    },
];

export {
    cityList,
    bizLines
}
