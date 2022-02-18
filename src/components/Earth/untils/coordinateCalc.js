// 全球云商云节点分布城市
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
    "长沙",
    "重庆",
    "青岛",
    "廊坊",
    "石家庄",
    "张家口",
    "呼和浩特",
    "乌兰察布",
    "杭州",
    "河源",
    "广州",
    "深圳",
    "贵阳",
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

/*@
* 用于计算全球云商云节点分布城市的经纬度
*在线经纬度查询网站 https://map.jiqrxx.com/jingweidu/
* */

var chinaProvince = {
    "北京": {
        "name": "北京",
        "longitude": 116.405285,
        "latitude": 39.904989
    },
    "天津": {
        "name": "天津",
        "longitude": 117.190182,
        "latitude": 39.125596
    },
    "河北": {
        "name": "河北",
        "longitude": 114.502461,
        "latitude": 38.045474
    },
    "山西": {
        "name": "山西",
        "longitude": 112.549248,
        "latitude": 37.857014
    },
    "内蒙古": {
        "name": "内蒙古",
        "longitude": 111.670801,
        "latitude": 40.818311
    },
    "辽宁": {
        "name": "辽宁",
        "longitude": 123.429096,
        "latitude": 41.796767
    },
    "吉林": {
        "name": "吉林",
        "longitude": 125.3245,
        "latitude": 43.886841
    },
    "黑龙江": {
        "name": "黑龙江",
        "longitude": 126.642464,
        "latitude": 45.756967
    },
    "上海": {
        "name": "上海",
        "longitude": 121.472644,
        "latitude": 31.231706
    },
    "江苏": {
        "name": "江苏",
        "longitude": 118.767413,
        "latitude": 32.041544
    },
    "浙江": {
        "name": "浙江",
        "longitude": 120.153576,
        "latitude": 30.287459
    },
    "安徽": {
        "name": "安徽",
        "longitude": 117.283042,
        "latitude": 31.86119
    },
    "福建": {
        "name": "福建",
        "longitude": 119.306239,
        "latitude": 26.075302
    },
    "江西": {
        "name": "江西",
        "longitude": 115.892151,
        "latitude": 28.676493
    },
    "山东": {
        "name": "山东",
        "longitude": 117.000923,
        "latitude": 36.675807
    },
    "河南": {
        "name": "河南",
        "longitude": 113.665412,
        "latitude": 34.757975
    },
    "湖北": {
        "name": "湖北",
        "longitude": 114.298572,
        "latitude": 30.584355
    },
    "湖南": {
        "name": "湖南",
        "longitude": 112.982279,
        "latitude": 28.19409
    },
    "广东": {
        "name": "广东",
        "longitude": 113.280637,
        "latitude": 23.125178
    },
    "广西": {
        "name": "广西",
        "longitude": 108.320004,
        "latitude": 22.82402
    },
    "海南": {
        "name": "海南",
        "longitude": 110.33119,
        "latitude": 20.031971
    },
    "重庆": {
        "name": "重庆",
        "longitude": 106.504962,
        "latitude": 29.533155
    },
    "四川": {
        "name": "四川",
        "longitude": 104.065735,
        "latitude": 30.659462
    },
    "贵州": {
        "name": "贵州",
        "longitude": 106.713478,
        "latitude": 26.578343
    },
    "云南": {
        "name": "云南",
        "longitude": 102.712251,
        "latitude": 25.040609
    },
    "西藏": {
        "name": "西藏",
        "longitude": 91.132212,
        "latitude": 29.660361
    },
    "陕西": {
        "name": "陕西",
        "longitude": 108.948024,
        "latitude": 34.263161
    },
    "甘肃": {
        "name": "甘肃",
        "longitude": 103.823557,
        "latitude": 36.058039
    },
    "青海": {
        "name": "青海",
        "longitude": 101.778916,
        "latitude": 36.623178
    },
    "宁夏": {
        "name": "宁夏",
        "longitude": 106.278179,
        "latitude": 38.46637
    },
    "新疆": {
        "name": "新疆",
        "longitude": 87.617733,
        "latitude": 43.792818
    },
    "台湾": {
        "name": "台湾",
        "longitude": 121.509062,
        "latitude": 25.044332
    },
    "香港": {
        "name": "香港",
        "longitude": 114.173355,
        "latitude": 22.320048
    },
    "澳门": {
        "name": "澳门",
        "longitude": 113.54909,
        "latitude": 22.198951
    },
    "南海诸岛": {
        "name": "南海诸岛"
    }
}
var globelMajorCity = {
    "阿比让": {
        "name": "阿比让",
        "longitude": "4.01",
        "latitude": "5.19"
    },
    "阿布扎比": {
        "name": "阿布扎比",
        "longitude": "54.23",
        "latitude": "24.27"
    },
    "阿布贾": {
        "name": "阿布贾",
        "longitude": "7.11",
        "latitude": "9.12"
    },
    "阿卡普尔科": {
        "name": "阿卡普尔科",
        "longitude": "-99.56",
        "latitude": "16.51"
    },
    "阿克拉": {
        "name": "阿克拉",
        "longitude": "0.15",
        "latitude": "5.33"
    },
    "艾达克岛": {
        "name": "艾达克岛",
        "longitude": "176.39",
        "latitude": "51.52"
    },
    "亚当斯敦": {
        "name": "亚当斯敦",
        "longitude": "-130.05",
        "latitude": "-25.04"
    },
    "亚的斯亚贝巴": {
        "name": "亚的斯亚贝巴",
        "longitude": "38.42",
        "latitude": "9.03"
    },
    "阿得莱德": {
        "name": "阿得莱德",
        "longitude": "138.36",
        "latitude": "-34.56"
    },
    "亚丁": {
        "name": "亚丁",
        "longitude": "45.",
        "latitude": "12.5"
    },
    "阿格拉": {
        "name": "阿格拉",
        "longitude": "78.",
        "latitude": "27.09"
    },
    "阿瓜斯卡连特斯": {
        "name": "阿瓜斯卡连特斯",
        "longitude": "-102.18",
        "latitude": "21.51"
    },
    "艾哈迈达巴德": {
        "name": "艾哈迈达巴德",
        "longitude": "72.4",
        "latitude": "23.03"
    },
    "阿科隆": {
        "name": "阿科隆",
        "longitude": "-81.31",
        "latitude": "41.04"
    },
    "吉萨": {
        "name": "吉萨",
        "longitude": "31.12",
        "latitude": "30.01"
    },
    "奥尔巴尼": {
        "name": "奥尔巴尼",
        "longitude": "-73.47",
        "latitude": "42.4"
    },
    "阿尔布开克": {
        "name": "阿尔布开克",
        "longitude": "-106.4",
        "latitude": "35.07"
    },
    "亚历山大": {
        "name": "亚历山大",
        "longitude": "29.55",
        "latitude": "31.13"
    },
    "阿尔及尔": {
        "name": "阿尔及尔",
        "longitude": "3.13",
        "latitude": "36.42"
    },
    "阿拉木图": {
        "name": "阿拉木图",
        "longitude": "76.55",
        "latitude": "43.19"
    },
    "阿洛菲": {
        "name": "阿洛菲",
        "longitude": "-169.55",
        "latitude": "-19.03"
    },
    "安汶": {
        "name": "安汶",
        "longitude": "128.1",
        "latitude": "-4.5"
    },
    "安曼": {
        "name": "安曼",
        "longitude": "35.56",
        "latitude": "31.57"
    },
    "阿姆斯特丹": {
        "name": "阿姆斯特丹",
        "longitude": "4.52",
        "latitude": "52.21"
    },
    "阿纳德尔": {
        "name": "阿纳德尔",
        "longitude": "177.32",
        "latitude": "64.4"
    },
    "阿纳海姆": {
        "name": "阿纳海姆",
        "longitude": "-117.52",
        "latitude": "33.5"
    },
    "安克雷奇": {
        "name": "安克雷奇",
        "longitude": "-149.52",
        "latitude": "61.13"
    },
    "安道尔": {
        "name": "安道尔",
        "longitude": "1.31",
        "latitude": "42.3"
    },
    "安卡拉": {
        "name": "安卡拉",
        "longitude": "32.54",
        "latitude": "40.02"
    },
    "鞍山": {
        "name": "鞍山",
        "longitude": "122.58",
        "latitude": "41.05"
    },
    "塔那那利佛": {
        "name": "塔那那利佛",
        "longitude": "47.31",
        "latitude": "-18.55"
    },
    "阿皮亚": {
        "name": "阿皮亚",
        "longitude": "-171.45",
        "latitude": "-13.48"
    },
    "阿克陶": {
        "name": "阿克陶",
        "longitude": "50.16",
        "latitude": "44.31"
    },
    "阿克托贝": {
        "name": "阿克托贝",
        "longitude": "57.1",
        "latitude": "50.17"
    },
    "阿灵顿": {
        "name": "阿灵顿",
        "longitude": "-97.07",
        "latitude": "32.41"
    },
    "阿什哈巴德": {
        "name": "阿什哈巴德",
        "longitude": "-58.24",
        "latitude": "37.58"
    },
    "阿斯马拉": {
        "name": "阿斯马拉",
        "longitude": "-38.58",
        "latitude": "15.2"
    },
    "阿斯塔纳": {
        "name": "阿斯塔纳",
        "longitude": "71.3",
        "latitude": "51.1"
    },
    "亚松森": {
        "name": "亚松森",
        "longitude": "-57.4",
        "latitude": "-25.15"
    },
    "雅典": {
        "name": "雅典",
        "longitude": "23.44",
        "latitude": "38.02"
    },
    "亚特兰大": {
        "name": "亚特兰大",
        "longitude": "-84.25",
        "latitude": "33.46"
    },
    "奥克兰": {
        "name": "奥克兰",
        "longitude": "-122.13",
        "latitude": "37.47"
    },
    "奥克斯塔": {
        "name": "奥克斯塔",
        "longitude": "-69.46",
        "latitude": "44.19"
    },
    "奥罗拉": {
        "name": "奥罗拉",
        "longitude": "-104.43",
        "latitude": "39.42"
    },
    "奥斯丁": {
        "name": "奥斯丁",
        "longitude": "-97.44",
        "latitude": "30.17"
    },
    "亚速尔群岛": {
        "name": "亚速尔群岛",
        "longitude": "-28.",
        "latitude": "38.3"
    },
    "巴格达": {
        "name": "巴格达",
        "longitude": "44.22",
        "latitude": "33.14"
    },
    "巴库": {
        "name": "巴库",
        "longitude": "49.53",
        "latitude": "40.22"
    },
    "巴厘巴板": {
        "name": "巴厘巴板",
        "longitude": "116.5",
        "latitude": "-1.15"
    },
    "巴尔的摩": {
        "name": "巴尔的摩",
        "longitude": "-76.37",
        "latitude": "39.17"
    },
    "巴马科": {
        "name": "巴马科",
        "longitude": "-7.59",
        "latitude": "12.4"
    },
    "斯里巴加湾港": {
        "name": "斯里巴加湾港",
        "longitude": "114.58",
        "latitude": "4.56"
    },
    "万隆": {
        "name": "万隆",
        "longitude": "107.34",
        "latitude": "-6.57"
    },
    "班加罗尔": {
        "name": "班加罗尔",
        "longitude": "77.34",
        "latitude": "12.58"
    },
    "曼谷": {
        "name": "曼谷",
        "longitude": "100.29",
        "latitude": "13.5"
    },
    "班吉": {
        "name": "班吉",
        "longitude": "18.37",
        "latitude": "4.23"
    },
    "班珠尔": {
        "name": "班珠尔",
        "longitude": "-16.39",
        "latitude": "13.28"
    },
    "包头": {
        "name": "包头",
        "longitude": "109.59",
        "latitude": "40.38"
    },
    "巴塞罗那": {
        "name": "巴塞罗那",
        "longitude": "2.06",
        "latitude": "41.18"
    },
    "巴尔瑙尔": {
        "name": "巴尔瑙尔",
        "longitude": "83.47",
        "latitude": "53.21"
    },
    "巴塞尔": {
        "name": "巴塞尔",
        "longitude": "7.36",
        "latitude": "47.34"
    },
    "巴士拉": {
        "name": "巴士拉",
        "longitude": "47.49",
        "latitude": "30.3"
    },
    "巴斯特尔": {
        "name": "巴斯特尔",
        "longitude": "-62.43",
        "latitude": "17.18"
    },
    "巴斯蒂亚": {
        "name": "巴斯蒂亚",
        "longitude": "9.26",
        "latitude": "42.41"
    },
    "巴吞鲁日": {
        "name": "巴吞鲁日",
        "longitude": "-91.08",
        "latitude": "30.27"
    },
    "北京": {
        "name": "北京",
        "longitude": "116.23",
        "latitude": "39.55"
    },
    "贝鲁特": {
        "name": "贝鲁特",
        "longitude": "35.3",
        "latitude": "33.52"
    },
    "贝尔法斯特": {
        "name": "贝尔法斯特",
        "longitude": "-5.57",
        "latitude": "54.36"
    },
    "贝尔格莱德": {
        "name": "贝尔格莱德",
        "longitude": "20.28",
        "latitude": "44.49"
    },
    "贝尔莫潘": {
        "name": "贝尔莫潘",
        "longitude": "-88.46",
        "latitude": "17.25"
    },
    "柏林": {
        "name": "柏林",
        "longitude": "13.2",
        "latitude": "52.31"
    },
    "伯尔尼": {
        "name": "伯尔尼",
        "longitude": "7.26",
        "latitude": "46.57"
    },
    "伯利恒": {
        "name": "伯利恒",
        "longitude": "35.12",
        "latitude": "31.42"
    },
    "布巴内斯": {
        "name": "布巴内斯",
        "longitude": "85.5",
        "latitude": "20.15"
    },
    "比林斯": {
        "name": "比林斯",
        "longitude": "-108.27",
        "latitude": "45.47"
    },
    "伯明翰": {
        "name": "伯明翰",
        "longitude": "-86.55",
        "latitude": "33.3"
    },
    "比什凯克": {
        "name": "比什凯克",
        "longitude": "74.46",
        "latitude": "42.53"
    },
    "俾斯麦酒": {
        "name": "俾斯麦酒",
        "longitude": "-100.47",
        "latitude": "46.49"
    },
    "比绍": {
        "name": "比绍",
        "longitude": "-15.39",
        "latitude": "11.52"
    },
    "勃朗峰-萨伯隆": {
        "name": "勃朗峰-萨伯隆",
        "longitude": "-57.08",
        "latitude": "51.26"
    },
    "波哥大": {
        "name": "波哥大",
        "longitude": "-74.05",
        "latitude": "4.38"
    },
    "博伊西": {
        "name": "博伊西",
        "longitude": "-116.13",
        "latitude": "43.37"
    },
    "波士顿": {
        "name": "波士顿",
        "longitude": "-71.05",
        "latitude": "42.19"
    },
    "布雷德斯": {
        "name": "布雷德斯",
        "longitude": "-62.12",
        "latitude": "16.46"
    },
    "布兰普顿": {
        "name": "布兰普顿",
        "longitude": "-79.46",
        "latitude": "43.41"
    },
    "巴西利亚": {
        "name": "巴西利亚",
        "longitude": "-47.57",
        "latitude": "-15.45"
    },
    "布拉迪斯拉发": {
        "name": "布拉迪斯拉发",
        "longitude": "17.07",
        "latitude": "48.09"
    },
    "布拉柴维尔": {
        "name": "布拉柴维尔",
        "longitude": "15.14",
        "latitude": "-4.14"
    },
    "布里奇顿": {
        "name": "布里奇顿",
        "longitude": "-59.37",
        "latitude": "13.06"
    },
    "布里斯班": {
        "name": "布里斯班",
        "longitude": "153.02",
        "latitude": "-27.28"
    },
    "布鲁塞尔": {
        "name": "布鲁塞尔",
        "longitude": "4.21",
        "latitude": "50.51"
    },
    "布加勒斯特": {
        "name": "布加勒斯特",
        "longitude": "26.1",
        "latitude": "44.23"
    },
    "布达佩斯": {
        "name": "布达佩斯",
        "longitude": "19.15",
        "latitude": "47.26"
    },
    "布宜诺斯艾利斯": {
        "name": "布宜诺斯艾利斯",
        "longitude": "-58.3",
        "latitude": "-34.2"
    },
    "布法罗": {
        "name": "布法罗",
        "longitude": "-78.55",
        "latitude": "42.52"
    },
    "布琼布拉": {
        "name": "布琼布拉",
        "longitude": "29.21",
        "latitude": "-3.22"
    },
    "开罗": {
        "name": "开罗",
        "longitude": "31.17",
        "latitude": "30."
    },
    "卡尔加里": {
        "name": "卡尔加里",
        "longitude": "-114.05",
        "latitude": "51.05"
    },
    "卡利": {
        "name": "卡利",
        "longitude": "-76.3",
        "latitude": "3.24"
    },
    "堪培拉": {
        "name": "堪培拉",
        "longitude": "149.08",
        "latitude": "-35.18"
    },
    "坎昆": {
        "name": "坎昆",
        "longitude": "-86.51",
        "latitude": "21.1"
    },
    "广州": {
        "name": "广州",
        "longitude": "113.3",
        "latitude": "23.2"
    },
    "开普敦": {
        "name": "开普敦",
        "longitude": "18.27",
        "latitude": "-33.55"
    },
    "加拉加斯": {
        "name": "加拉加斯",
        "longitude": "-66.58",
        "latitude": "10.3"
    },
    "加地夫": {
        "name": "加地夫",
        "longitude": "-3.11",
        "latitude": "51.28"
    },
    "卡森城": {
        "name": "卡森城",
        "longitude": "-118.46",
        "latitude": "39.1"
    },
    "卡萨布兰卡": {
        "name": "卡萨布兰卡",
        "longitude": "-7.37",
        "latitude": "33.36"
    },
    "卡斯特里": {
        "name": "卡斯特里",
        "longitude": "-60.59",
        "latitude": "14.01"
    },
    "卡宴": {
        "name": "卡宴",
        "longitude": "-52.18",
        "latitude": "4.55"
    },
    "宿务岛": {
        "name": "宿务岛",
        "longitude": "123.54",
        "latitude": "10.17"
    },
    "长春": {
        "name": "长春",
        "longitude": "125.2",
        "latitude": "43.5"
    },
    "长沙": {
        "name": "长沙",
        "longitude": "112.98",
        "latitude": "28.25"
    },
    "查尔斯顿": {
        "name": "查尔斯顿",
        "longitude": "-81.4",
        "latitude": "38.23"
    },
    "夏洛特": {
        "name": "夏洛特",
        "longitude": "-80.5",
        "latitude": "35.05"
    },
    "夏洛特敦": {
        "name": "夏洛特敦",
        "longitude": "-63.09",
        "latitude": "46.14"
    },
    "查塔姆岛": {
        "name": "查塔姆岛",
        "longitude": "-176.35",
        "latitude": "-44."
    },
    "车里雅宾斯克": {
        "name": "车里雅宾斯克",
        "longitude": "61.25",
        "latitude": "55.1"
    },
    "成都": {
        "name": "成都",
        "longitude": "104.06",
        "latitude": "30.37"
    },
    "钦奈": {
        "name": "钦奈",
        "longitude": "80.18",
        "latitude": "13.05"
    },
    "夏延文": {
        "name": "夏延文",
        "longitude": "-104.49",
        "latitude": "41.08"
    },
    "芝加哥": {
        "name": "芝加哥",
        "longitude": "-87.41",
        "latitude": "41.51"
    },
    "奇瓦瓦": {
        "name": "奇瓦瓦",
        "longitude": "-106.05",
        "latitude": "28.38"
    },
    "基希讷乌": {
        "name": "基希讷乌",
        "longitude": "28.5",
        "latitude": "47."
    },
    "吉大港": {
        "name": "吉大港",
        "longitude": "91.48",
        "latitude": "22.2"
    },
    "乔巴山": {
        "name": "乔巴山",
        "longitude": "114.3",
        "latitude": "48.04"
    },
    "重庆": {
        "name": "重庆",
        "longitude": 106.54,
        "latitude": 29.40
    },
    "基督城": {
        "name": "基督城",
        "longitude": "172.37",
        "latitude": "-43.32"
    },
    "辛辛那提": {
        "name": "辛辛那提",
        "longitude": "-84.3",
        "latitude": "39.1"
    },
    "克利夫兰": {
        "name": "克利夫兰",
        "longitude": "-81.41",
        "latitude": "41.3"
    },
    "科伦坡": {
        "name": "科伦坡",
        "longitude": "79.52",
        "latitude": "6.55"
    },
    "哥伦比亚": {
        "name": "哥伦比亚",
        "longitude": "-81.",
        "latitude": "34.01"
    },
    "哥伦布": {
        "name": "哥伦布",
        "longitude": "-82.59",
        "latitude": "39.59"
    },
    "科纳克里": {
        "name": "科纳克里",
        "longitude": "-13.43",
        "latitude": "9.3"
    },
    "康科特": {
        "name": "康科特",
        "longitude": "-71.32",
        "latitude": "43.13"
    },
    "哥本哈根": {
        "name": "哥本哈根",
        "longitude": "12.34",
        "latitude": "55.43"
    },
    "科尔多瓦": {
        "name": "科尔多瓦",
        "longitude": "-4.46",
        "latitude": "37.53"
    },
    "达喀尔": {
        "name": "达喀尔",
        "longitude": "-17.27",
        "latitude": "14.38"
    },
    "大连": {
        "name": "大连",
        "longitude": "121.37",
        "latitude": "38.53"
    },
    "达拉斯": {
        "name": "达拉斯",
        "longitude": "-96.47",
        "latitude": "32.47"
    },
    "大马士革": {
        "name": "大马士革",
        "longitude": "36.19",
        "latitude": "33.3"
    },
    "达累斯萨拉姆": {
        "name": "达累斯萨拉姆",
        "longitude": "39.18",
        "latitude": "-6.51"
    },
    "达尔文": {
        "name": "达尔文",
        "longitude": "130.51",
        "latitude": "-12.28"
    },
    "德令哈": {
        "name": "德令哈",
        "longitude": "77.14",
        "latitude": "28.4"
    },
    "登巴萨": {
        "name": "登巴萨",
        "longitude": "115.14",
        "latitude": "-8.4"
    },
    "丹佛": {
        "name": "丹佛",
        "longitude": "-104.59",
        "latitude": "39.43"
    },
    "得梅因": {
        "name": "得梅因",
        "longitude": "-93.38",
        "latitude": "41.36"
    },
    "底特律": {
        "name": "底特律",
        "longitude": "-83.05",
        "latitude": "42.23"
    },
    "达卡": {
        "name": "达卡",
        "longitude": "90.24",
        "latitude": "23.51"
    },
    "帝力": {
        "name": "帝力",
        "longitude": "125.35",
        "latitude": "-8.35"
    },
    "吉布提": {
        "name": "吉布提",
        "longitude": "42.25",
        "latitude": "11.39"
    },
    "多多马": {
        "name": "多多马",
        "longitude": "35.4",
        "latitude": "-6.1"
    },
    "多哈": {
        "name": "多哈",
        "longitude": "51.34",
        "latitude": "25.15"
    },
    "多佛尔": {
        "name": "多佛尔",
        "longitude": "-75.32",
        "latitude": "39.1"
    },
    "迪拜": {
        "name": "迪拜",
        "longitude": "55.17",
        "latitude": "25.13"
    },
    "都柏林": {
        "name": "都柏林",
        "longitude": "-6.15",
        "latitude": "53.26"
    },
    "德班": {
        "name": "德班",
        "longitude": "31.03",
        "latitude": "-29.53"
    },
    "杜尚别": {
        "name": "杜尚别",
        "longitude": "68.51",
        "latitude": "38.38"
    },
    "杜塞尔多夫": {
        "name": "杜塞尔多夫",
        "longitude": "6.47",
        "latitude": "51.13"
    },
    "复活节岛": {
        "name": "复活节岛",
        "longitude": "-109.2",
        "latitude": "-27.05"
    },
    "爱丁堡": {
        "name": "爱丁堡",
        "longitude": "-3.13",
        "latitude": "55.57"
    },
    "埃德蒙顿": {
        "name": "埃德蒙顿",
        "longitude": "-113.25",
        "latitude": "53.34"
    },
    "阿尤恩": {
        "name": "阿尤恩",
        "longitude": "-13.12",
        "latitude": "27.09"
    },
    "埃尔帕索": {
        "name": "埃尔帕索",
        "longitude": "-106.29",
        "latitude": "31.45"
    },
    "英德": {
        "name": "英德",
        "longitude": "121.4",
        "latitude": "-8.51"
    },
    "伊斯法罕": {
        "name": "伊斯法罕",
        "longitude": "51.4",
        "latitude": "32.42"
    },
    "费尔班克斯": {
        "name": "费尔班克斯",
        "longitude": "-147.43",
        "latitude": "64.5"
    },
    "费萨拉巴德": {
        "name": "费萨拉巴德",
        "longitude": "73.09",
        "latitude": "31.25"
    },
    "费尔南多-迪诺罗尼亚": {
        "name": "费尔南多-迪诺罗尼亚",
        "longitude": "-32.25",
        "latitude": "-3.54"
    },
    "福州": {
        "name": "福州",
        "longitude": "119.2",
        "latitude": "26.01"
    },
    "法兰西堡": {
        "name": "法兰西堡",
        "longitude": "-61.05",
        "latitude": "14.36"
    },
    "福特沃斯": {
        "name": "福特沃斯",
        "longitude": "-97.2",
        "latitude": "32.45"
    },
    "法兰克福": {
        "name": "法兰克福",
        "longitude": "8.34",
        "latitude": "50.02"
    },
    "费里敦": {
        "name": "费里敦",
        "longitude": "-13.17",
        "latitude": "8.3"
    },
    "弗雷斯诺": {
        "name": "弗雷斯诺",
        "longitude": "-119.45",
        "latitude": "36.45"
    },
    "福冈": {
        "name": "福冈",
        "longitude": "130.21",
        "latitude": "33.39"
    },
    "福纳佛提": {
        "name": "福纳佛提",
        "longitude": "179.13",
        "latitude": "-8.31"
    },
    "丰沙尔": {
        "name": "丰沙尔",
        "longitude": "-16.54",
        "latitude": "32.38"
    },
    "抚顺": {
        "name": "抚顺",
        "longitude": "123.53",
        "latitude": "41.51"
    },
    "哈博罗内": {
        "name": "哈博罗内",
        "longitude": "25.55",
        "latitude": "-24.45"
    },
    "加拉帕戈斯群岛": {
        "name": "加拉帕戈斯群岛",
        "longitude": "-89.36",
        "latitude": "-0.54"
    },
    "甘比尔群岛": {
        "name": "甘比尔群岛",
        "longitude": "-134.57",
        "latitude": "-23.08"
    },
    "加蒂诺": {
        "name": "加蒂诺",
        "longitude": "-75.4",
        "latitude": "45.29"
    },
    "加沙": {
        "name": "加沙",
        "longitude": "34.28",
        "latitude": "31.3"
    },
    "格但斯克": {
        "name": "格但斯克",
        "longitude": "18.38",
        "latitude": "54.22"
    },
    "日内瓦": {
        "name": "日内瓦",
        "longitude": "6.04",
        "latitude": "46.14"
    },
    "乔治敦": {
        "name": "乔治敦",
        "longitude": "-81.23",
        "latitude": "19.2"
    },
    "直布罗陀": {
        "name": "直布罗陀",
        "longitude": "-5.22",
        "latitude": "36.07"
    },
    "格拉斯哥": {
        "name": "格拉斯哥",
        "longitude": "-4.15",
        "latitude": "55.52"
    },
    "瓜达拉哈拉": {
        "name": "瓜达拉哈拉",
        "longitude": "-103.21",
        "latitude": "20.4"
    },
    "关岛": {
        "name": "关岛",
        "longitude": "144.4",
        "latitude": "13.3"
    },
    "危地马拉": {
        "name": "危地马拉",
        "longitude": "-90.22",
        "latitude": "14.38"
    },
    "瓜亚基尔": {
        "name": "瓜亚基尔",
        "longitude": "-79.54",
        "latitude": "-2.13"
    },
    "桂阳": {
        "name": "桂阳",
        "longitude": "106.4",
        "latitude": "26.35"
    },
    "哈利法克斯": {
        "name": "哈利法克斯",
        "longitude": "-63.35",
        "latitude": "44.38"
    },
    "汉堡": {
        "name": "汉堡",
        "longitude": "10.",
        "latitude": "53.33"
    },
    "汉密尔顿": {
        "name": "汉密尔顿",
        "longitude": "-79.51",
        "latitude": "43.15"
    },
    "杭州": {
        "name": "杭州",
        "longitude": "120.07",
        "latitude": "30.1"
    },
    "河内": {
        "name": "河内",
        "longitude": "105.53",
        "latitude": "21.01"
    },
    "哈拉雷": {
        "name": "哈拉雷",
        "longitude": "31.04",
        "latitude": "-17.49"
    },
    "哈尔滨": {
        "name": "哈尔滨",
        "longitude": "126.41",
        "latitude": "45.45"
    },
    "哈里斯堡": {
        "name": "哈里斯堡",
        "longitude": "-76.53",
        "latitude": "40.16"
    },
    "哈特福德": {
        "name": "哈特福德",
        "longitude": "-72.41",
        "latitude": "41.46"
    },
    "哈瓦那": {
        "name": "哈瓦那",
        "longitude": "-82.23",
        "latitude": "23.08"
    },
    "赫勒拿": {
        "name": "赫勒拿",
        "longitude": "-112.02",
        "latitude": "46.35"
    },
    "赫尔辛基": {
        "name": "赫尔辛基",
        "longitude": "24.53",
        "latitude": "60.1"
    },
    "广岛": {
        "name": "广岛",
        "longitude": "132.27",
        "latitude": "34.23"
    },
    "胡志明": {
        "name": "胡志明",
        "longitude": "106.43",
        "latitude": "10.46"
    },
    "荷伯特": {
        "name": "荷伯特",
        "longitude": "147.18",
        "latitude": "-42.54"
    },
    "香港": {
        "name": "香港",
        "longitude": "114.08",
        "latitude": "22.17"
    },
    "霍尼亚拉": {
        "name": "霍尼亚拉",
        "longitude": "160.12",
        "latitude": "-9.32"
    },
    "檀香山": {
        "name": "檀香山",
        "longitude": "-157.5",
        "latitude": "21.19"
    },
    "休斯顿": {
        "name": "休斯顿",
        "longitude": "-95.23",
        "latitude": "29.45"
    },
    "科布多": {
        "name": "科布多",
        "longitude": "90.45",
        "latitude": "46.4"
    },
    "海得拉巴": {
        "name": "海得拉巴",
        "longitude": "78.26",
        "latitude": "17.22"
    },
    "仁川": {
        "name": "仁川",
        "longitude": "126.38",
        "latitude": "37.3"
    },
    "印第安纳波利斯": {
        "name": "印第安纳波利斯",
        "longitude": "-86.08",
        "latitude": "39.47"
    },
    "印多尔": {
        "name": "印多尔",
        "longitude": "75.54",
        "latitude": "22.42"
    },
    "伊卡瑞特": {
        "name": "伊卡瑞特",
        "longitude": "-68.3",
        "latitude": "63.45"
    },
    "伊斯兰堡": {
        "name": "伊斯兰堡",
        "longitude": "73.08",
        "latitude": "33.4"
    },
    "伊斯坦布尔": {
        "name": "伊斯坦布尔",
        "longitude": "28.58",
        "latitude": "41.02"
    },
    "伊兹密尔": {
        "name": "伊兹密尔",
        "longitude": "27.09",
        "latitude": "38.24"
    },
    "杰克逊": {
        "name": "杰克逊",
        "longitude": "-90.11",
        "latitude": "32.2"
    },
    "杰克逊维尔": {
        "name": "杰克逊维尔",
        "longitude": "-81.4",
        "latitude": "30.2"
    },
    "斋浦尔": {
        "name": "斋浦尔",
        "longitude": "75.5",
        "latitude": "26.53"
    },
    "雅加达": {
        "name": "雅加达",
        "longitude": "106.45",
        "latitude": "-6.08"
    },
    "查亚普拉": {
        "name": "查亚普拉",
        "longitude": "140.38",
        "latitude": "-2.28"
    },
    "吉达": {
        "name": "吉达",
        "longitude": "39.1",
        "latitude": "21.3"
    },
    "杰斐逊城": {
        "name": "杰斐逊城",
        "longitude": "-92.11",
        "latitude": "38.34"
    },
    "泽西城": {
        "name": "泽西城",
        "longitude": "-74.03",
        "latitude": "40.42"
    },
    "耶路撒冷": {
        "name": "耶路撒冷",
        "longitude": "35.13",
        "latitude": "31.47"
    },
    "吉林": {
        "name": "吉林",
        "longitude": "126.35",
        "latitude": "43.53"
    },
    "济南": {
        "name": "济南",
        "longitude": "117.",
        "latitude": "36.5"
    },
    "锦州": {
        "name": "锦州",
        "longitude": "121.06",
        "latitude": "41.07"
    },
    "约翰内斯堡": {
        "name": "约翰内斯堡",
        "longitude": "27.54",
        "latitude": "-26.08"
    },
    "朱诺": {
        "name": "朱诺",
        "longitude": "-134.25",
        "latitude": "58.18"
    },
    "喀布尔": {
        "name": "喀布尔",
        "longitude": "69.1",
        "latitude": "34.3"
    },
    "加里宁格勒": {
        "name": "加里宁格勒",
        "longitude": "20.3",
        "latitude": "54.43"
    },
    "堪察加": {
        "name": "堪察加",
        "longitude": "158.39",
        "latitude": "53.01"
    },
    "坎帕拉": {
        "name": "坎帕拉",
        "longitude": "32.35",
        "latitude": "0.19"
    },
    "尼日利亚卡诺": {
        "name": "尼日利亚卡诺",
        "longitude": "8.31",
        "latitude": "12."
    },
    "坎普尔": {
        "name": "坎普尔",
        "longitude": "80.14",
        "latitude": "26.27"
    },
    "堪萨斯城": {
        "name": "堪萨斯城",
        "longitude": "-94.33",
        "latitude": "39.02"
    },
    "高雄": {
        "name": "高雄",
        "longitude": "120.27",
        "latitude": "23.03"
    },
    "卡拉奇": {
        "name": "卡拉奇",
        "longitude": "67.02",
        "latitude": "24.51"
    },
    "加德满都餐厅": {
        "name": "加德满都餐厅",
        "longitude": "85.19",
        "latitude": "27.42"
    },
    "考纳斯": {
        "name": "考纳斯",
        "longitude": "23.54",
        "latitude": "54.54"
    },
    "川崎": {
        "name": "川崎",
        "longitude": "139.43",
        "latitude": "35.32"
    },
    "喀山": {
        "name": "喀山",
        "longitude": "49.1",
        "latitude": "55.45"
    },
    "喀士穆": {
        "name": "喀士穆",
        "longitude": "32.36",
        "latitude": "15.34"
    },
    "孔敬": {
        "name": "孔敬",
        "longitude": "102.5",
        "latitude": "16.25"
    },
    "库尔纳": {
        "name": "库尔纳",
        "longitude": "89.34",
        "latitude": "22.49"
    },
    "基加利": {
        "name": "基加利",
        "longitude": "30.05",
        "latitude": "-1.59"
    },
    "京斯敦": {
        "name": "京斯敦",
        "longitude": "-76.48",
        "latitude": "17.58"
    },
    "金斯敦": {
        "name": "金斯敦",
        "longitude": "-61.14",
        "latitude": "13.12"
    },
    "金沙萨": {
        "name": "金沙萨",
        "longitude": "15.18",
        "latitude": "-4.18"
    },
    "圣诞岛": {
        "name": "圣诞岛",
        "longitude": "-157.2",
        "latitude": "1.52"
    },
    "北九州": {
        "name": "北九州",
        "longitude": "130.49",
        "latitude": "33.52"
    },
    "诺克斯维尔": {
        "name": "诺克斯维尔",
        "longitude": "-83.56",
        "latitude": "35.58"
    },
    "神户": {
        "name": "神户",
        "longitude": "135.1",
        "latitude": "34.41"
    },
    "加尔各答": {
        "name": "加尔各答",
        "longitude": "88.2",
        "latitude": "22.34"
    },
    "科罗尔": {
        "name": "科罗尔",
        "longitude": "134.3",
        "latitude": "7.3"
    },
    "九龙": {
        "name": "九龙",
        "longitude": "114.15",
        "latitude": "22.2"
    },
    "克拉科夫": {
        "name": "克拉科夫",
        "longitude": "19.55",
        "latitude": "50.03"
    },
    "克拉斯诺亚尔斯克": {
        "name": "克拉斯诺亚尔斯克",
        "longitude": "92.46",
        "latitude": "56.05"
    },
    "吉隆坡": {
        "name": "吉隆坡",
        "longitude": "101.42",
        "latitude": "3.08"
    },
    "昆明": {
        "name": "昆明",
        "longitude": "102.41",
        "latitude": "25.04"
    },
    "古邦": {
        "name": "古邦",
        "longitude": "123.38",
        "latitude": "-10.23"
    },
    "科威特省": {
        "name": "科威特省",
        "longitude": "48.",
        "latitude": "29.2"
    },
    "基辅": {
        "name": "基辅",
        "longitude": "30.29",
        "latitude": "50.28"
    },
    "京都": {
        "name": "京都",
        "longitude": "135.45",
        "latitude": "35."
    },
    "拉柯鲁尼亚": {
        "name": "拉柯鲁尼亚",
        "longitude": "-8.24",
        "latitude": "43.22"
    },
    "拉巴斯": {
        "name": "拉巴斯",
        "longitude": "-68.09",
        "latitude": "-16.3"
    },
    "拉普拉塔": {
        "name": "拉普拉塔",
        "longitude": "-57.57",
        "latitude": "-34.55"
    },
    "拉各斯": {
        "name": "拉各斯",
        "longitude": "3.02",
        "latitude": "6.35"
    },
    "拉合尔": {
        "name": "拉合尔",
        "longitude": "74.22",
        "latitude": "31.34"
    },
    "兰州": {
        "name": "兰州",
        "longitude": "103.45",
        "latitude": "36.01"
    },
    "拉斯帕尔马斯": {
        "name": "拉斯帕尔马斯",
        "longitude": "-15.27",
        "latitude": "28.08"
    },
    "拉斯维加斯": {
        "name": "拉斯维加斯",
        "longitude": "-115.1",
        "latitude": "36.1"
    },
    "洛桑": {
        "name": "洛桑",
        "longitude": "6.39",
        "latitude": "46.32"
    },
    "拉瓦尔": {
        "name": "拉瓦尔",
        "longitude": "-73.45",
        "latitude": "45.35"
    },
    "莱昂": {
        "name": "莱昂",
        "longitude": "-101.42",
        "latitude": "21.1"
    },
    "法耶特": {
        "name": "法耶特",
        "longitude": "-84.27",
        "latitude": "38.02"
    },
    "拉萨": {
        "name": "拉萨",
        "longitude": "91.1",
        "latitude": "29.41"
    },
    "利伯维尔": {
        "name": "利伯维尔",
        "longitude": "9.25",
        "latitude": "0.3"
    },
    "利隆圭": {
        "name": "利隆圭",
        "longitude": "33.49",
        "latitude": "-13.58"
    },
    "利马": {
        "name": "利马",
        "longitude": "-76.55",
        "latitude": "-12.06"
    },
    "林肯": {
        "name": "林肯",
        "longitude": "-96.4",
        "latitude": "40.49"
    },
    "里斯本": {
        "name": "里斯本",
        "longitude": "-9.05",
        "latitude": "38.42"
    },
    "小石城": {
        "name": "小石城",
        "longitude": "-92.19",
        "latitude": "34.44"
    },
    "利物浦": {
        "name": "利物浦",
        "longitude": "-3.",
        "latitude": "53.25"
    },
    "卢布尔雅那": {
        "name": "卢布尔雅那",
        "longitude": "14.31",
        "latitude": "46.03"
    },
    "罗兹": {
        "name": "罗兹",
        "longitude": "19.28",
        "latitude": "51.49"
    },
    "洛美": {
        "name": "洛美",
        "longitude": "1.21",
        "latitude": "6.1"
    },
    "伦敦": {
        "name": "伦敦",
        "longitude": "-0.07",
        "latitude": "51.3"
    },
    "长滩": {
        "name": "长滩",
        "longitude": "-118.09",
        "latitude": "33.47"
    },
    "隆格伊": {
        "name": "隆格伊",
        "longitude": "-73.3",
        "latitude": "45.32"
    },
    "豪勋爵岛": {
        "name": "豪勋爵岛",
        "longitude": "159.",
        "latitude": "-33.3"
    },
    "洛杉矶": {
        "name": "洛杉矶",
        "longitude": "-118.22",
        "latitude": "34.05"
    },
    "路易斯维尔": {
        "name": "路易斯维尔",
        "longitude": "-85.48",
        "latitude": "38.13"
    },
    "罗安达": {
        "name": "罗安达",
        "longitude": "13.2",
        "latitude": "-8.5"
    },
    "卢本巴希": {
        "name": "卢本巴希",
        "longitude": "27.29",
        "latitude": "-11.44"
    },
    "勒克瑙": {
        "name": "勒克瑙",
        "longitude": "80.54",
        "latitude": "26.5"
    },
    "鲁得希阿那": {
        "name": "鲁得希阿那",
        "longitude": "75.52",
        "latitude": "30.56"
    },
    "洛阳": {
        "name": "洛阳",
        "longitude": "112.25",
        "latitude": "34.48"
    },
    "卢萨卡": {
        "name": "卢萨卡",
        "longitude": "28.14",
        "latitude": "-15.2"
    },
    "卢森堡": {
        "name": "卢森堡",
        "longitude": "6.08",
        "latitude": "49.37"
    },
    "澳门": {
        "name": "澳门",
        "longitude": "113.33",
        "latitude": "22.11"
    },
    "麦迪逊": {
        "name": "麦迪逊",
        "longitude": "-89.23",
        "latitude": "43.05"
    },
    "马德里": {
        "name": "马德里",
        "longitude": -3.42,
        "latitude": 40.26
    },
    "马杜赖": {
        "name": "马杜赖",
        "longitude": "78.07",
        "latitude": "9.55"
    },
    "马朱罗": {
        "name": "马朱罗",
        "longitude": "171.12",
        "latitude": "7.09"
    },
    "麦加": {
        "name": "麦加",
        "longitude": "39.49",
        "latitude": "21.26"
    },
    "马拉博": {
        "name": "马拉博",
        "longitude": "8.48",
        "latitude": "3.45"
    },
    "马朗": {
        "name": "马朗",
        "longitude": "112.45",
        "latitude": "-7.59"
    },
    "马累": {
        "name": "马累",
        "longitude": "73.28",
        "latitude": "4.1"
    },
    "马穆楚": {
        "name": "马穆楚",
        "longitude": "45.14",
        "latitude": "-12.47"
    },
    "美娜多": {
        "name": "美娜多",
        "longitude": "124.58",
        "latitude": "1.3"
    },
    "马那瓜": {
        "name": "马那瓜",
        "longitude": "-86.18",
        "latitude": "12.06"
    },
    "麦纳麦": {
        "name": "麦纳麦",
        "longitude": "50.36",
        "latitude": "26.12"
    },
    "马瑙斯": {
        "name": "马瑙斯",
        "longitude": "-60.",
        "latitude": "-3.06"
    },
    "马尼拉": {
        "name": "马尼拉",
        "longitude": "121.",
        "latitude": "14.37"
    },
    "马普托": {
        "name": "马普托",
        "longitude": "32.35",
        "latitude": "-25.58"
    },
    "马德普拉塔": {
        "name": "马德普拉塔",
        "longitude": "-57.32",
        "latitude": "-38."
    },
    "马卡姆": {
        "name": "马卡姆",
        "longitude": "-79.19",
        "latitude": "43.49"
    },
    "马塞卢": {
        "name": "马塞卢",
        "longitude": "27.28",
        "latitude": "-29.18"
    },
    "马塔兰": {
        "name": "马塔兰",
        "longitude": "116.07",
        "latitude": "-8.36"
    },
    "马萨特兰": {
        "name": "马萨特兰",
        "longitude": "-106.25",
        "latitude": "23.13"
    },
    "姆巴巴纳": {
        "name": "姆巴巴纳",
        "longitude": "31.08",
        "latitude": "-26.19"
    },
    "棉兰": {
        "name": "棉兰",
        "longitude": "98.39",
        "latitude": "3.35"
    },
    "麦德林": {
        "name": "麦德林",
        "longitude": "-75.36",
        "latitude": "6.15"
    },
    "墨尔本": {
        "name": "墨尔本",
        "longitude": "144.58",
        "latitude": "-37.49"
    },
    "孟菲斯": {
        "name": "孟菲斯",
        "longitude": "-90.",
        "latitude": "35.05"
    },
    "门多萨": {
        "name": "门多萨",
        "longitude": "-68.5",
        "latitude": "-32.54"
    },
    "梅里达": {
        "name": "梅里达",
        "longitude": "-89.37",
        "latitude": "20.58"
    },
    "梅萨": {
        "name": "梅萨",
        "longitude": "-111.44",
        "latitude": "33.25"
    },
    "墨西卡利": {
        "name": "墨西卡利",
        "longitude": "-115.27",
        "latitude": "32.38"
    },
    "墨西哥城": {
        "name": "墨西哥城",
        "longitude": "-99.09",
        "latitude": "19.28"
    },
    "迈阿密": {
        "name": "迈阿密",
        "longitude": "-80.13",
        "latitude": "25.47"
    },
    "米德兰": {
        "name": "米德兰",
        "longitude": "-102.05",
        "latitude": "32."
    },
    "中途岛": {
        "name": "中途岛",
        "longitude": "-177.22",
        "latitude": "28.13"
    },
    "米兰": {
        "name": "米兰",
        "longitude": "9.1",
        "latitude": "45.28"
    },
    "密尔沃基雄鹿": {
        "name": "密尔沃基雄鹿",
        "longitude": "-87.57",
        "latitude": "43.03"
    },
    "明尼阿波利斯": {
        "name": "明尼阿波利斯",
        "longitude": "-93.15",
        "latitude": "45"
    },
    "明斯克": {
        "name": "明斯克",
        "longitude": "27.3",
        "latitude": "53.51"
    },
    "米西索加": {
        "name": "米西索加",
        "longitude": "-79.36",
        "latitude": "43.41"
    },
    "莫比尔": {
        "name": "莫比尔",
        "longitude": "-88.05",
        "latitude": "30.4"
    },
    "摩加迪沙": {
        "name": "摩加迪沙",
        "longitude": "45.21",
        "latitude": "2.02"
    },
    "摩纳哥": {
        "name": "摩纳哥",
        "longitude": "7.25",
        "latitude": "43.4"
    },
    "蒙罗维亚": {
        "name": "蒙罗维亚",
        "longitude": "-10.46",
        "latitude": "6.2"
    },
    "蒙特雷": {
        "name": "蒙特雷",
        "longitude": "-100.2",
        "latitude": "25.4"
    },
    "蒙得维的亚": {
        "name": "蒙得维的亚",
        "longitude": "-56.11",
        "latitude": "-34.53"
    },
    "蒙哥马利": {
        "name": "蒙哥马利",
        "longitude": "-86.2",
        "latitude": "32.22"
    },
    "蒙彼利埃": {
        "name": "蒙彼利埃",
        "longitude": "-72.34",
        "latitude": "44.16"
    },
    "蒙特利尔": {
        "name": "蒙特利尔",
        "longitude": "-73.35",
        "latitude": "45.3"
    },
    "莫罗尼": {
        "name": "莫罗尼",
        "longitude": "43.19",
        "latitude": "-11.4"
    },
    "莫斯科": {
        "name": "莫斯科",
        "longitude": "37.37",
        "latitude": "55.45"
    },
    "孟买": {
        "name": "孟买",
        "longitude": "72.51",
        "latitude": "18.56"
    },
    "慕尼黑": {
        "name": "慕尼黑",
        "longitude": "11.35",
        "latitude": "48.08"
    },
    "摩尔曼斯克": {
        "name": "摩尔曼斯克",
        "longitude": "33.08",
        "latitude": "68.59"
    },
    "马斯喀特": {
        "name": "马斯喀特",
        "longitude": "58.37",
        "latitude": "23.36"
    },
    "名古屋": {
        "name": "名古屋",
        "longitude": "136.55",
        "latitude": "35.1"
    },
    "那格浦尔": {
        "name": "那格浦尔",
        "longitude": "79.12",
        "latitude": "21.1"
    },
    "内罗毕": {
        "name": "内罗毕",
        "longitude": "36.49",
        "latitude": "-1.17"
    },
    "南昌": {
        "name": "南昌",
        "longitude": "115.56",
        "latitude": "28.38"
    },
    "那不勒斯": {
        "name": "那不勒斯",
        "longitude": "14.14",
        "latitude": "40.5"
    },
    "纳什维尔": {
        "name": "纳什维尔",
        "longitude": "-86.46",
        "latitude": "36.1"
    },
    "拿骚": {
        "name": "拿骚",
        "longitude": "-77.2",
        "latitude": "25.03"
    },
    "恩贾梅纳": {
        "name": "恩贾梅纳",
        "longitude": "14.59",
        "latitude": "12.1"
    },
    "内乌肯": {
        "name": "内乌肯",
        "longitude": "-68.04",
        "latitude": "-38.57"
    },
    "新德里": {
        "name": "新德里",
        "longitude": "77.13",
        "latitude": "28.37"
    },
    "新奥尔良": {
        "name": "新奥尔良",
        "longitude": "-90.05",
        "latitude": "29.58"
    },
    "纽约": {
        "name": "纽约",
        "longitude": "-73.55",
        "latitude": "40.44"
    },
    "纽瓦克": {
        "name": "纽瓦克",
        "longitude": "-74.1",
        "latitude": "40.43"
    },
    "尼亚美": {
        "name": "尼亚美",
        "longitude": "2.05",
        "latitude": "13.32"
    },
    "尼斯": {
        "name": "尼斯",
        "longitude": "7.16",
        "latitude": "43.42"
    },
    "尼科西亚": {
        "name": "尼科西亚",
        "longitude": "33.23",
        "latitude": "35.11"
    },
    "下诺夫哥罗德": {
        "name": "下诺夫哥罗德",
        "longitude": "44.01",
        "latitude": "56.2"
    },
    "诺姆": {
        "name": "诺姆",
        "longitude": "-165.24",
        "latitude": "64.32"
    },
    "诺福克": {
        "name": "诺福克",
        "longitude": "-76.18",
        "latitude": "36.54"
    },
    "努瓦克肖特": {
        "name": "努瓦克肖特",
        "longitude": "-15.58",
        "latitude": "18.09"
    },
    "努美阿": {
        "name": "努美阿",
        "longitude": "166.27",
        "latitude": "-22.16"
    },
    "诺夫哥罗德": {
        "name": "诺夫哥罗德",
        "longitude": "31.2",
        "latitude": "58.3"
    },
    "新西伯利亚": {
        "name": "新西伯利亚",
        "longitude": "82.55",
        "latitude": "55.04"
    },
    "努库阿洛法": {
        "name": "努库阿洛法",
        "longitude": "-175.12",
        "latitude": "-21.07"
    },
    "努克": {
        "name": "努克",
        "longitude": "-51.4",
        "latitude": "64.1"
    },
    "敖德萨": {
        "name": "敖德萨",
        "longitude": "30.46",
        "latitude": "46.3"
    },
    "冈山": {
        "name": "冈山",
        "longitude": "133.54",
        "latitude": "34.4"
    },
    "俄克拉何马城": {
        "name": "俄克拉何马城",
        "longitude": "-97.32",
        "latitude": "35.29"
    },
    "鄂木斯克": {
        "name": "鄂木斯克",
        "longitude": "73.22",
        "latitude": "55."
    },
    "奥拉涅斯塔克": {
        "name": "奥拉涅斯塔克",
        "longitude": "-69.58",
        "latitude": "12.3"
    },
    "奥兰多": {
        "name": "奥兰多",
        "longitude": "-81.22",
        "latitude": "28.3"
    },
    "大阪": {
        "name": "大阪",
        "longitude": "135.3",
        "latitude": "34.4"
    },
    "奥斯陆": {
        "name": "奥斯陆",
        "longitude": "10.41",
        "latitude": "59.56"
    },
    "渥太华": {
        "name": "渥太华",
        "longitude": "-75.43",
        "latitude": "45.25"
    },
    "瓦加杜古": {
        "name": "瓦加杜古",
        "longitude": "-1.4",
        "latitude": "12.2"
    },
    "帕果帕果": {
        "name": "帕果帕果",
        "longitude": "-170.42",
        "latitude": "-14.16"
    },
    "巨港": {
        "name": "巨港",
        "longitude": "104.5",
        "latitude": "-2.59"
    },
    "波赫恩": {
        "name": "波赫恩",
        "longitude": "158.1",
        "latitude": "6.55"
    },
    "帕尔马": {
        "name": "帕尔马",
        "longitude": "2.39",
        "latitude": "39.26"
    },
    "巴拿马": {
        "name": "巴拿马",
        "longitude": "-79.3",
        "latitude": "8.57"
    },
    "帕皮提": {
        "name": "帕皮提",
        "longitude": "-149.34",
        "latitude": "-17.32"
    },
    "帕拉马里博": {
        "name": "帕拉马里博",
        "longitude": "-55.14",
        "latitude": "5.52"
    },
    "巴黎": {
        "name": "巴黎",
        "longitude": "2.2",
        "latitude": "48.51"
    },
    "巴特那": {
        "name": "巴特那",
        "longitude": "85.12",
        "latitude": "25.37"
    },
    "彭沙科拉": {
        "name": "彭沙科拉",
        "longitude": "87.12",
        "latitude": "30.3"
    },
    "彼尔姆": {
        "name": "彼尔姆",
        "longitude": "56.1",
        "latitude": "58.01"
    },
    "珀斯": {
        "name": "珀斯",
        "longitude": "115.49",
        "latitude": "-31.58"
    },
    "白沙瓦": {
        "name": "白沙瓦",
        "longitude": "71.4",
        "latitude": "34.01"
    },
    "费拉德尔菲亚": {
        "name": "费拉德尔菲亚",
        "longitude": "-75.09",
        "latitude": "40."
    },
    "金边": {
        "name": "金边",
        "longitude": "104.55",
        "latitude": "11.35"
    },
    "菲尼克斯": {
        "name": "菲尼克斯",
        "longitude": "-112.05",
        "latitude": "33.3"
    },
    "皮尔": {
        "name": "皮尔",
        "longitude": "-100.2",
        "latitude": "44.22"
    },
    "匹兹堡": {
        "name": "匹兹堡",
        "longitude": "-80",
        "latitude": "40.26"
    },
    "波德戈里察": {
        "name": "波德戈里察",
        "longitude": "19.28",
        "latitude": "42.27"
    },
    "太子港": {
        "name": "太子港",
        "longitude": "-72.2",
        "latitude": "18.32"
    },
    "法兰西港": {
        "name": "法兰西港",
        "longitude": "70.13",
        "latitude": "-49.21"
    },
    "伊丽莎白港": {
        "name": "伊丽莎白港",
        "longitude": "25.36",
        "latitude": "-33.57"
    },
    "路易港": {
        "name": "路易港",
        "longitude": "57.29",
        "latitude": "-20.09"
    },
    "莫尔兹比港": {
        "name": "莫尔兹比港",
        "longitude": "147.07",
        "latitude": "-9.3"
    },
    "西班牙港": {
        "name": "西班牙港",
        "longitude": "-61.31",
        "latitude": "10.38"
    },
    "维拉港": {
        "name": "维拉港",
        "longitude": "168.19",
        "latitude": "-17.44"
    },
    "波特兰": {
        "name": "波特兰",
        "longitude": "-122.39",
        "latitude": "45.31"
    },
    "波尔图": {
        "name": "波尔图",
        "longitude": "-8.37",
        "latitude": "41.09"
    },
    "阿雷格里港": {
        "name": "阿雷格里港",
        "longitude": "-51.14",
        "latitude": "-30.02"
    },
    "波多诺伏": {
        "name": "波多诺伏",
        "longitude": "2.47",
        "latitude": "6.3"
    },
    "波兹南": {
        "name": "波兹南",
        "longitude": "16.53",
        "latitude": "52.25"
    },
    "布拉格": {
        "name": "布拉格",
        "longitude": "14.25",
        "latitude": "50.05"
    },
    "普拉亚": {
        "name": "普拉亚",
        "longitude": "-23.31",
        "latitude": "14.55"
    },
    "比勒陀利亚": {
        "name": "比勒陀利亚",
        "longitude": "28.11",
        "latitude": "-25.43"
    },
    "普里什蒂纳": {
        "name": "普里什蒂纳",
        "longitude": "21.1",
        "latitude": "42.39"
    },
    "普罗维登斯": {
        "name": "普罗维登斯",
        "longitude": "-71.25",
        "latitude": "41.49"
    },
    "浦那": {
        "name": "浦那",
        "longitude": "73.58",
        "latitude": "18.34"
    },
    "釜山": {
        "name": "釜山",
        "longitude": "129.02",
        "latitude": "35.05"
    },
    "平壤": {
        "name": "平壤",
        "longitude": "125.47",
        "latitude": "39."
    },
    "齐齐哈尔": {
        "name": "齐齐哈尔",
        "longitude": "124",
        "latitude": "47.23"
    },
    "魁北克": {
        "name": "魁北克",
        "longitude": "-71.15",
        "latitude": "46.5"
    },
    "基多": {
        "name": "基多",
        "longitude": "-78.3",
        "latitude": "-0.14"
    },
    "拉巴": {
        "name": "拉巴",
        "longitude": "118.45",
        "latitude": "-8.27"
    },
    "拉巴特": {
        "name": "拉巴特",
        "longitude": "-6.51",
        "latitude": "34.02"
    },
    "瑞丽": {
        "name": "瑞丽",
        "longitude": "-78.39",
        "latitude": "35.47"
    },
    "拉皮德城": {
        "name": "拉皮德城",
        "longitude": "-103.13",
        "latitude": "44.05"
    },
    "拉罗汤加岛": {
        "name": "拉罗汤加岛",
        "longitude": "-160.16",
        "latitude": "-21.2"
    },
    "拉瓦基": {
        "name": "拉瓦基",
        "longitude": "-171.05",
        "latitude": "-3.08"
    },
    "累西腓": {
        "name": "累西腓",
        "longitude": "-34.53",
        "latitude": "-8.06"
    },
    "里贾那": {
        "name": "里贾那",
        "longitude": "-104.38",
        "latitude": "50.3"
    },
    "雷克雅未克": {
        "name": "雷克雅未克",
        "longitude": "-21.58",
        "latitude": "64.09"
    },
    "里士满": {
        "name": "里士满",
        "longitude": "-77.28",
        "latitude": "37.32"
    },
    "里加": {
        "name": "里加",
        "longitude": "24.05",
        "latitude": "56.53"
    },
    "里奥布兰科": {
        "name": "里奥布兰科",
        "longitude": "-67.49",
        "latitude": "-9.59"
    },
    "里约热内卢": {
        "name": "里约热内卢",
        "longitude": "-43.15",
        "latitude": "-22.54"
    },
    "河滨市": {
        "name": "河滨市",
        "longitude": "-117.23",
        "latitude": "33.56"
    },
    "利雅得": {
        "name": "利雅得",
        "longitude": "46.44",
        "latitude": "24.39"
    },
    "罗德城": {
        "name": "罗德城",
        "longitude": "-64.3",
        "latitude": "18.3"
    },
    "罗彻斯特": {
        "name": "罗彻斯特",
        "longitude": "-77.37",
        "latitude": "43.12"
    },
    "罗马": {
        "name": "罗马",
        "longitude": "12.37",
        "latitude": "41.52"
    },
    "罗萨里奥": {
        "name": "罗萨里奥",
        "longitude": "-60.4",
        "latitude": "-32.57"
    },
    "罗索": {
        "name": "罗索",
        "longitude": "-61.23",
        "latitude": "15.18"
    },
    "鹿特丹": {
        "name": "鹿特丹",
        "longitude": "4.29",
        "latitude": "51.55"
    },
    "梁赞": {
        "name": "梁赞",
        "longitude": "39.45",
        "latitude": "54.37"
    },
    "萨克拉门托": {
        "name": "萨克拉门托",
        "longitude": "-121.28",
        "latitude": "38.34"
    },
    "圣蒂尼斯": {
        "name": "圣蒂尼斯",
        "longitude": "55.28",
        "latitude": "-20.52"
    },
    "圣乔治": {
        "name": "圣乔治",
        "longitude": "-61.44",
        "latitude": "12.04"
    },
    "圣赫利尔": {
        "name": "圣赫利尔",
        "longitude": "-2.07",
        "latitude": "49.11"
    },
    "圣约翰": {
        "name": "圣约翰",
        "longitude": "-52.41",
        "latitude": "47.34"
    },
    "圣彼得堡": {
        "name": "圣彼得堡",
        "longitude": "-82.38",
        "latitude": "27.45"
    },
    "塞班岛": {
        "name": "塞班岛",
        "longitude": "145.45",
        "latitude": "15.12"
    },
    "塞伦": {
        "name": "塞伦",
        "longitude": "-123.02",
        "latitude": "44.56"
    },
    "盐湖城": {
        "name": "盐湖城",
        "longitude": "-111.52",
        "latitude": "40.46"
    },
    "萨尔塔": {
        "name": "萨尔塔",
        "longitude": "-65.24",
        "latitude": "-24.47"
    },
    "萨尔瓦多": {
        "name": "萨尔瓦多",
        "longitude": "-38.29",
        "latitude": "-12.58"
    },
    "萨尔茨保": {
        "name": "萨尔茨保",
        "longitude": "13.03",
        "latitude": "47.54"
    },
    "萨马拉": {
        "name": "萨马拉",
        "longitude": "50.15",
        "latitude": "53.1"
    },
    "圣安东尼奥": {
        "name": "圣安东尼奥",
        "longitude": "-98.3",
        "latitude": "29.25"
    },
    "圣博娜迪诺": {
        "name": "圣博娜迪诺",
        "longitude": "-117.17",
        "latitude": "34.06"
    },
    "圣地亚哥": {
        "name": "圣地亚哥",
        "longitude": "-70.4",
        "latitude": "-33.26"
    },
    "旧金山": {
        "name": "旧金山",
        "longitude": "-122.26",
        "latitude": "37.46"
    },
    "圣何塞": {
        "name": "圣何塞",
        "longitude": "-121.53",
        "latitude": "37.2"
    },
    "圣胡安": {
        "name": "圣胡安",
        "longitude": "-66.08",
        "latitude": "18.29"
    },
    "圣路易波托西": {
        "name": "圣路易波托西",
        "longitude": "-100.59",
        "latitude": "22.09"
    },
    "圣马力诺": {
        "name": "圣马力诺",
        "longitude": "12.28",
        "latitude": "43.55"
    },
    "圣萨尔瓦多": {
        "name": "圣萨尔瓦多",
        "longitude": "-89.1",
        "latitude": "13.4"
    },
    "萨那": {
        "name": "萨那",
        "longitude": "44.14",
        "latitude": "15.23"
    },
    "圣安那": {
        "name": "圣安那",
        "longitude": "-89.31",
        "latitude": "14."
    },
    "圣达菲": {
        "name": "圣达菲",
        "longitude": "-105.57",
        "latitude": "35.4"
    },
    "圣多明各": {
        "name": "圣多明各",
        "longitude": "-69.57",
        "latitude": "18.3"
    },
    "圣保罗": {
        "name": "圣保罗",
        "longitude": "-93.1",
        "latitude": "45."
    },
    "圣多美": {
        "name": "圣多美",
        "longitude": "6.44",
        "latitude": "0.2"
    },
    "扎幌": {
        "name": "扎幌",
        "longitude": "141.21",
        "latitude": "43.05"
    },
    "萨拉热窝": {
        "name": "萨拉热窝",
        "longitude": "18.26",
        "latitude": "43.52"
    },
    "萨斯卡通": {
        "name": "萨斯卡通",
        "longitude": "-106.4",
        "latitude": "52.1"
    },
    "西雅图": {
        "name": "西雅图",
        "longitude": "-122.2",
        "latitude": "47.38"
    },
    "三宝垄": {
        "name": "三宝垄",
        "longitude": "110.29",
        "latitude": "-6.58"
    },
    "仙台": {
        "name": "仙台",
        "longitude": "140.52",
        "latitude": "38.16"
    },
    "首尔": {
        "name": "首尔",
        "longitude": "127.03",
        "latitude": "37.35"
    },
    "上海": {
        "name": "上海",
        "longitude": "121.27",
        "latitude": "31.14"
    },
    "深圳": {
        "name": "深圳",
        "longitude": "114.13",
        "latitude": "22.39"
    },
    "石家庄": {
        "name": "石家庄",
        "longitude": "114.28",
        "latitude": "38.04"
    },
    "锡亚尔科特": {
        "name": "锡亚尔科特",
        "longitude": "74.35",
        "latitude": "32.29"
    },
    "西安": {
        "name": "西安",
        "longitude": "108.54",
        "latitude": "34.16"
    },
    "新加坡": {
        "name": "新加坡",
        "longitude": "103.45",
        "latitude": "1.22"
    },
    "新卡拉雅": {
        "name": "新卡拉雅",
        "longitude": "115.07",
        "latitude": "-8.06"
    },
    "苏福尔斯": {
        "name": "苏福尔斯",
        "longitude": "-96.42",
        "latitude": "43.34"
    },
    "斯科普里": {
        "name": "斯科普里",
        "longitude": "21.3",
        "latitude": "41.35"
    },
    "索非亚": {
        "name": "索非亚",
        "longitude": "23.2",
        "latitude": "42.43"
    },
    "圣路易斯": {
        "name": "圣路易斯",
        "longitude": "-90.15",
        "latitude": "38.4"
    },
    "斯坦利": {
        "name": "斯坦利",
        "longitude": "-57.52",
        "latitude": "-51.42"
    },
    "斯德哥尔摩": {
        "name": "斯德哥尔摩",
        "longitude": "18.",
        "latitude": "59.23"
    },
    "斯托克顿": {
        "name": "斯托克顿",
        "longitude": "-121.18",
        "latitude": "37.58"
    },
    "苏克雷": {
        "name": "苏克雷",
        "longitude": "-65.16",
        "latitude": "-19.02"
    },
    "苏腊巴亚": {
        "name": "苏腊巴亚",
        "longitude": "112.45",
        "latitude": "-7.14"
    },
    "苏腊卡尔塔": {
        "name": "苏腊卡尔塔",
        "longitude": "110.5",
        "latitude": "-7.32"
    },
    "苏拉特": {
        "name": "苏拉特",
        "longitude": "72.54",
        "latitude": "21.1"
    },
    "萨里": {
        "name": "萨里",
        "longitude": "-122.51",
        "latitude": "49.11"
    },
    "苏瓦": {
        "name": "苏瓦",
        "longitude": "178.25",
        "latitude": "-18.08"
    },
    "悉尼": {
        "name": "悉尼",
        "longitude": "151.17",
        "latitude": "-33.55"
    },
    "什切青": {
        "name": "什切青",
        "longitude": "14.32",
        "latitude": "53.25"
    },
    "大丘": {
        "name": "大丘",
        "longitude": "128.36",
        "latitude": "35.52"
    },
    "泰奥海伊": {
        "name": "泰奥海伊",
        "longitude": "-139.3",
        "latitude": "-9."
    },
    "台北": {
        "name": "台北",
        "longitude": "121.38",
        "latitude": "25.02"
    },
    "太原": {
        "name": "太原",
        "longitude": "112.3",
        "latitude": "37.5"
    },
    "塔林": {
        "name": "塔林",
        "longitude": "24.48",
        "latitude": "59.22"
    },
    "坦帕": {
        "name": "坦帕",
        "longitude": "-82.38",
        "latitude": "27.58"
    },
    "丹吉尔": {
        "name": "丹吉尔",
        "longitude": "-5.45",
        "latitude": "35.48"
    },
    "唐山": {
        "name": "唐山",
        "longitude": "118.05",
        "latitude": "39.37"
    },
    "塔拉瓦": {
        "name": "塔拉瓦",
        "longitude": "173.",
        "latitude": "1.25"
    },
    "塔什干": {
        "name": "塔什干",
        "longitude": "69.13",
        "latitude": "41.16"
    },
    "第比利斯": {
        "name": "第比利斯",
        "longitude": "44.48",
        "latitude": "41.43"
    },
    "特古西加尔巴": {
        "name": "特古西加尔巴",
        "longitude": "-87.14",
        "latitude": "14.05"
    },
    "德黑兰": {
        "name": "德黑兰",
        "longitude": "51.3",
        "latitude": "35.45"
    },
    "特拉维夫": {
        "name": "特拉维夫",
        "longitude": "34.46",
        "latitude": "32.05"
    },
    "特尔纳特": {
        "name": "特尔纳特",
        "longitude": "127.23",
        "latitude": "0.48"
    },
    "新村": {
        "name": "新村",
        "longitude": "105.4",
        "latitude": "-10.3"
    },
    "瓦利": {
        "name": "瓦利",
        "longitude": "-63.04",
        "latitude": "-18.13"
    },
    "廷布": {
        "name": "廷布",
        "longitude": "89.4",
        "latitude": "-27.29"
    },
    "特里凡得琅": {
        "name": "特里凡得琅",
        "longitude": "76.57",
        "latitude": "8.3"
    },
    "天津": {
        "name": "天津",
        "longitude": "117.12",
        "latitude": "39.08"
    },
    "提华纳": {
        "name": "提华纳",
        "longitude": "-117.01",
        "latitude": "32.32"
    },
    "地拉那": {
        "name": "地拉那",
        "longitude": "19.48",
        "latitude": "41.2"
    },
    "东京": {
        "name": "东京",
        "longitude": "139.44",
        "latitude": "35.41"
    },
    "托莱多": {
        "name": "托莱多",
        "longitude": "-83.35",
        "latitude": "41.4"
    },
    "托皮卡": {
        "name": "托皮卡",
        "longitude": "-95.41",
        "latitude": "39.02"
    },
    "多伦多": {
        "name": "多伦多",
        "longitude": "-79.22",
        "latitude": "43.4"
    },
    "托沙芬": {
        "name": "托沙芬",
        "longitude": "-6.46",
        "latitude": "62.01"
    },
    "特伦顿": {
        "name": "特伦顿",
        "longitude": "-74.46",
        "latitude": "40.13"
    },
    "的黎波里": {
        "name": "的黎波里",
        "longitude": "13.12",
        "latitude": "32.58"
    },
    "青岛": {
        "name": "青岛",
        "longitude": "120.22",
        "latitude": "36.04"
    },
    "图森": {
        "name": "图森",
        "longitude": "-110.58",
        "latitude": "32.13"
    },
    "图库曼": {
        "name": "图库曼",
        "longitude": "-65.2",
        "latitude": "-26.3"
    },
    "突尼斯": {
        "name": "突尼斯",
        "longitude": "10.1",
        "latitude": "36.47"
    },
    "都灵": {
        "name": "都灵",
        "longitude": "7.4",
        "latitude": "45.04"
    },
    "秋明": {
        "name": "秋明",
        "longitude": "65.32",
        "latitude": "57.09"
    },
    "乌法": {
        "name": "乌法",
        "longitude": "55.58",
        "latitude": "54.45"
    },
    "乌兰巴托": {
        "name": "乌兰巴托",
        "longitude": "106.53",
        "latitude": "47.55"
    },
    "安那拉斯加": {
        "name": "安那拉斯加",
        "longitude": "-166.43",
        "latitude": "53.51"
    },
    "巴罗达": {
        "name": "巴罗达",
        "longitude": "73.14",
        "latitude": "22.19"
    },
    "瓦杜兹": {
        "name": "瓦杜兹",
        "longitude": "9.31",
        "latitude": "47.09"
    },
    "瓦莱塔": {
        "name": "瓦莱塔",
        "longitude": "14.31",
        "latitude": "35.53"
    },
    "温哥华": {
        "name": "温哥华",
        "longitude": "-123.06",
        "latitude": "49.13"
    },
    "瓦腊纳西": {
        "name": "瓦腊纳西",
        "longitude": "83.",
        "latitude": "25.2"
    },
    "梵蒂冈城": {
        "name": "梵蒂冈城",
        "longitude": "12.27",
        "latitude": "41.54"
    },
    "威尼斯": {
        "name": "威尼斯",
        "longitude": "12.2",
        "latitude": "45.26"
    },
    "韦拉克鲁斯": {
        "name": "韦拉克鲁斯",
        "longitude": "-96.1",
        "latitude": "19.11"
    },
    "维多利亚": {
        "name": "维多利亚",
        "longitude": "55.28",
        "latitude": "-4.4"
    },
    "维也纳": {
        "name": "维也纳",
        "longitude": "16.22",
        "latitude": "48.13"
    },
    "万象": {
        "name": "万象",
        "longitude": "102.48",
        "latitude": "18.01"
    },
    "维尔纽斯": {
        "name": "维尔纽斯",
        "longitude": "25.19",
        "latitude": "54.4"
    },
    "弗吉尼亚海滨市": {
        "name": "弗吉尼亚海滨市",
        "longitude": "-76.02",
        "latitude": "36.44"
    },
    "维萨卡帕特南": {
        "name": "维萨卡帕特南",
        "longitude": "83.24",
        "latitude": "17.42"
    },
    "符拉迪沃斯托克": {
        "name": "符拉迪沃斯托克",
        "longitude": "131.53",
        "latitude": "43.09"
    },
    "华沙": {
        "name": "华沙",
        "longitude": "21.",
        "latitude": "52.15"
    },
    "华盛顿市": {
        "name": "华盛顿市",
        "longitude": "-77.02",
        "latitude": "38.53"
    },
    "惠灵顿": {
        "name": "惠灵顿",
        "longitude": "174.47",
        "latitude": "-41.17"
    },
    "怀特霍斯": {
        "name": "怀特霍斯",
        "longitude": "-135.08",
        "latitude": "60.41"
    },
    "卫奇塔": {
        "name": "卫奇塔",
        "longitude": "-97.2",
        "latitude": "37.43"
    },
    "威廉斯塔德": {
        "name": "威廉斯塔德",
        "longitude": "-68.56",
        "latitude": "12.12"
    },
    "温得和克": {
        "name": "温得和克",
        "longitude": "17.06",
        "latitude": "-22.34"
    },
    "温泽": {
        "name": "温泽",
        "longitude": "-83.01",
        "latitude": "42.18"
    },
    "温尼伯": {
        "name": "温尼伯",
        "longitude": "-97.1",
        "latitude": "49.53"
    },
    "弗罗茨瓦夫": {
        "name": "弗罗茨瓦夫",
        "longitude": "17.",
        "latitude": "51.05"
    },
    "武汉": {
        "name": "武汉",
        "longitude": "114.19",
        "latitude": "30.35"
    },
    "雅库茨克": {
        "name": "雅库茨克",
        "longitude": "129.51",
        "latitude": "62.1"
    },
    "亚穆苏克罗": {
        "name": "亚穆苏克罗",
        "longitude": "-5.18",
        "latitude": "6.51"
    },
    "仰光": {
        "name": "仰光",
        "longitude": "96.09",
        "latitude": "16.46"
    },
    "雅温得": {
        "name": "雅温得",
        "longitude": "11.31",
        "latitude": "3.51"
    },
    "亚伦": {
        "name": "亚伦",
        "longitude": "166.55",
        "latitude": "-0.32"
    },
    "叶卡捷琳堡": {
        "name": "叶卡捷琳堡",
        "longitude": "60.35",
        "latitude": "56.52"
    },
    "耶洛奈夫": {
        "name": "耶洛奈夫",
        "longitude": "-114.29",
        "latitude": "62.3"
    },
    "耶烈万": {
        "name": "耶烈万",
        "longitude": "44.31",
        "latitude": "40.1"
    },
    "横滨": {
        "name": "横滨",
        "longitude": "139.39",
        "latitude": "35.27"
    },
    "南萨哈林斯克": {
        "name": "南萨哈林斯克",
        "longitude": "142.44",
        "latitude": "46.58"
    },
    "萨格勒布": {
        "name": "萨格勒布",
        "longitude": "15.58",
        "latitude": "45.49"
    },
    "郑州": {
        "name": "郑州",
        "longitude": "113.38",
        "latitude": "34.35"
    },
    "淄博": {
        "name": "淄博",
        "longitude": "118.",
        "latitude": "36.5"
    },
    "苏黎世": {
        "name": "苏黎世",
        "longitude": "8.32",
        "latitude": "47.22"
    }
}

var cityCoypeList = {}
gcbNodes.forEach(node=>{
    if(chinaProvince[node] || globelMajorCity[node]){
        cityCoypeList[node] = {
            name: node, longitude: 116.3, latitude: 39.9
        }
    }else{
        cityCoypeList[node] = {
            name: node, longitude: '', latitude: ''
        }
    }
})
// console.log(cityCoypeList,'=====================cityCoypeList')
var gcbNodesList = {
    "上海": {
        "name": "上海",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "南京": {
        "name": "南京",
        "longitude": 118.89,
        "latitude": 31.32
    },
    "苏州": {
        "name": "苏州",
        "longitude": 120.63,
        "latitude": 31.30
    },
    "天津": {
        "name": "天津",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "北京": {
        "name": "北京",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "成都": {
        "name": "成都",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "武汉": {
        "name": "武汉",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "西安": {
        "name": "西安",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "南宁": {
        "name": "南宁",
        "longitude": 108.27,
        "latitude": 22.78
    },
    "拉萨": {
        "name": "拉萨",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "南昌": {
        "name": "南昌",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "长春": {
        "name": "长春",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "哈尔滨": {
        "name": "哈尔滨",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "沈阳": {
        "name": "沈阳",
        "longitude": 123.46,
        "latitude": 41.80
    },
    "乌鲁木齐": {
        "name": "乌鲁木齐",
        "longitude": 88.31,
        "latitude": 43.36
    },
    "太原": {
        "name": "太原",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "西宁": {
        "name": "西宁",
        "longitude": 101.76,
        "latitude": 36.65
    },
    "兰州": {
        "name": "兰州",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "郑州": {
        "name": "郑州",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "长沙": {
        "name": "长沙",
        "longitude": "112.98",
        "latitude": "28.25"
    },
    "重庆": {
        "name": "重庆",
        "longitude": 106.54,
        "latitude": 29.40
    },
    "青岛": {
        "name": "青岛",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "廊坊": {
        "name": "廊坊",
        "longitude": 116.68,
        "latitude": 39.5
    },
    "石家庄": {
        "name": "石家庄",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "张家口": {
        "name": "张家口",
        "longitude": 115.28,
        "latitude": 40.97
    },
    "呼和浩特": {
        "name": "呼和浩特",
        "longitude": 111.62,
        "latitude": 40.80
    },
    "乌兰察布": {
        "name": "乌兰察布",
        "longitude": 113.12,
        "latitude": 40.99
    },
    "杭州": {
        "name": "杭州",
        "longitude": 120.07,
        "latitude": 30.1
    },
    "河源": {
        "name": "河源",
        "longitude": 114.7,
        "latitude": 23.73
    },
    "广州": {
        "name": "广州",
        "longitude": 113.3,
        "latitude": 23.2
    },
    "深圳": {
        "name": "深圳",
        "longitude": 113.88,
        "latitude": 22.55
    },
    "贵阳": {
        "name": "贵阳",
        "longitude": 106.62,
        "latitude": 26.67
    },
    "福州": {
        "name": "福州",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "昆明": {
        "name": "昆明",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "海口": {
        "name": "海口",
        "longitude": 110.33,
        "latitude": 20.03
    },
    "宿迁": {
        "name": "宿迁",
        "longitude": 118.24,
        "latitude": 33.96
    },
    "芜湖": {
        "name": "芜湖",
        "longitude": 118.38,
        "latitude": 31.34
    },
    "中卫": {
        "name": "中卫",
        "longitude": 105.17,
        "latitude": 37.51
    },
    "高雄": {
        "name": "高雄",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "台北": {
        "name": "台北",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "香港": {
        "name": "香港",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "迪拜": {
        "name": "迪拜",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "都柏林": {
        "name": "都柏林",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "悉尼": {
        "name": "悉尼",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "堪培拉": {
        "name": "堪培拉",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "墨尔本": {
        "name": "墨尔本",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "珀斯": {
        "name": "珀斯",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "麦纳麦": {
        "name": "麦纳麦",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "圣保罗": {
        "name": "圣保罗",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "里约热内卢": {
        "name": "里约热内卢",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "巴西圣保罗互联区": {
        "name": "巴西圣保罗互联区",
        "longitude": -46.38,
        "latitude": -23.33
    },
    "法兰克福": {
        "name": "法兰克福",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "汉堡": {
        "name": "汉堡",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "慕尼黑": {
        "name": "慕尼黑",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "柏林": {
        "name": "柏林",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "UAE North（奥厄）": {
        "name": "UAE North（奥厄）",
        "longitude": 12.41,
        "latitude": 50.34
    },
    "莫斯科": {
        "name": "莫斯科",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "马赛": {
        "name": "马赛",
        "longitude": 5.22,
        "latitude": 43.18
    },
    "巴黎": {
        "name": "巴黎",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "赫尔辛基": {
        "name": "赫尔辛基",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "釜山": {
        "name": "釜山",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "春川": {
        "name": "春川",
        "longitude": 116.4,
        "latitude": 39.9
    },
    "首尔": {
        "name": "首尔",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "阿姆斯特丹": {
        "name": "阿姆斯特丹",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "多伦多": {
        "name": "多伦多",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "魁北克市": {
        "name": "魁北克市",
        "longitude": 71.15,
        "latitude": 46.5
    },
    "蒙特利尔": {
        "name": "蒙特利尔",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "温哥华": {
        "name": "温哥华",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "吉隆坡": {
        "name": "吉隆坡",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "马尼拉": {
        "name": "马尼拉",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "哥伦布": {
        "name": "哥伦布",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "波特兰": {
        "name": "波特兰",
        "longitude": 116.3,
        "latitude": 39.9
    },
    // "雷斯顿": {//hwx:查不到经纬度
    //     "name": "雷斯顿",
    //     "longitude": "",
    //     "latitude": 36.31
    // },
    // "阿什本": {
    //     "name": "阿什本",
    //     "longitude": "",
    //     "latitude": 36.31
    // },
    "纽瓦克": {
        "name": "纽瓦克",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "拉斯维加斯": {
        "name": "拉斯维加斯",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "堪萨斯城": {
        "name": "堪萨斯城",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "达拉斯": {
        "name": "达拉斯",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "圣安东尼奥": {
        "name": "圣安东尼奥",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "休斯顿": {
        "name": "休斯顿",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "芝加哥": {
        "name": "芝加哥",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "康瑟尔布拉夫斯": {
        "name": "康瑟尔布拉夫斯",
        "longitude": -80.13,
        "latitude": 25.47
    },
    "明尼阿波利斯": {
        "name": "明尼阿波利斯",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "西雅图": {
        "name": "西雅图",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "盐湖城": {
        "name": "盐湖城",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "华盛顿": {
        "name": "华盛顿",
        "longitude": -77.02,
        "latitude": 38.53
    },
    "洛杉矶": {
        "name": "洛杉矶",
        "longitude": -118.15,
        "latitude": 34.03
    },
    "圣克拉拉": {
        "name": "圣克拉拉",
        "longitude": -79.57,
        "latitude": 22.24
    },
    "米尔皮塔斯": {
        "name": "米尔皮塔斯",
        "longitude": -122.5,
        "latitude": 37.25
    },
    // "埃尔塞贡多": {
    //     "name": "埃尔塞贡多",
    //     "longitude": "",
    //     "latitude": ""
    // },
    "奥克兰": {
        "name": "奥克兰",
        "longitude": 116.3,
        "latitude": 39.9
    },
    // "湾区（Bay Area）": {
    //     "name": "湾区（Bay Area）",
    //     "longitude": "",
    //     "latitude": ""
    // },
    "圣荷西": {
        "name": "圣荷西",
        "longitude": -121.53,
        "latitude": 37.2
    },
    "旧金山（硅谷）": {
        "name": "旧金山（硅谷）",
        "longitude": -122.25,
        "latitude": 37.48
    },
    "纽约": {
        "name": "纽约",
        "longitude": -74.021,
        "latitude": 40.42
    },
    "圣地亚哥": {
        "name": "圣地亚哥",
        "longitude": -117.09,
        "latitude": 32.43
    },
    "丹佛": {
        "name": "丹佛",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "菲尼克斯": {
        "name": "菲尼克斯",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "亚特兰大": {
        "name": "亚特兰大",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "艾奥瓦": {
        "name": "艾奥瓦",
        "longitude": "",
        "latitude": ""
    },
    "昆西": {
        "name": "昆西",
        "longitude": "",
        "latitude": ""
    },
    "波士顿": {
        "name": "波士顿",
        "longitude": -0.01,
        "latitude": 52.59
    },
    "费城": {
        "name": "费城",
        "longitude": -75.10,
        "latitude": 39.57
    },
    "迈阿密": {
        "name": "迈阿密",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "克雷塔罗市": {
        "name": "克雷塔罗市",
        "longitude": -100.24,
        "latitude": 20.35
    },
    "墨西哥城": {
        "name": "墨西哥城",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "约翰内斯堡": {
        "name": "约翰内斯堡",
        "longitude": -116.3,
        "latitude": 39.9
    },
    "开普敦": {
        "name": "开普敦",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "拉各斯": {
        "name": "拉各斯",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "斯塔万格": {
        "name": "斯塔万格",
        "longitude": 5.45,
        "latitude": 58.58
    },
    "奥斯陆": {
        "name": "奥斯陆",
        "longitude": 10.45,
        "latitude": 59.55
    },
    "大阪": {
        "name": "大阪",
        "longitude": 135.30,
        "latitude": 34.40
    },
    "东京": {
        "name": "东京",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "斯德哥尔摩": {
        "name": "斯德哥尔摩",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "苏黎世": {
        "name": "苏黎世",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "日内瓦": {
        "name": "日内瓦",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "曼谷": {
        "name": "曼谷",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "新加坡": {
        "name": "新加坡",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "米兰": {
        "name": "米兰",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "孟买": {
        "name": "孟买",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "金奈": {
        "name": "金奈",
        "longitude": "",
        "latitude": ""
    },
    "班加罗尔": {
        "name": "班加罗尔",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "德里": {
        "name": "德里",
        "longitude": "",
        "latitude": ""
    },
    "海德拉巴": {
        "name": "海德拉巴",
        "longitude": "",
        "latitude": ""
    },
    "雅加达": {
        "name": "雅加达",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "伦敦": {
        "name": "伦敦",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "曼彻斯特": {
        "name": "曼彻斯特",
        "longitude": "",
        "latitude": ""
    },
    "纽波特": {
        "name": "纽波特",
        "longitude": -2.59,
        "latitude": 51.33
    },
    "胡志明市": {
        "name": "胡志明市",
        "longitude": 106.43,
        "latitude": 10.46
    },
    "布拉格": {
        "name": "布拉格",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "华沙": {
        "name": "华沙",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "哥本哈根": {
        "name": "哥本哈根",
        "longitude": "12.34",
        "latitude": "55.43"
    },
    "马德里": {
        "name": "马德里",
        "longitude": -3.42,
        "latitude": 40.26
    },
    "维也纳": {
        "name": "维也纳",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "海法": {
        "name": "海法",
        "longitude": -34.59,
        "latitude": 32.48
    },
    "布宜诺斯艾利斯": {
        "name": "布宜诺斯艾利斯",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "波哥大": {
        "name": "波哥大",
        "longitude": 116.3,
        "latitude": 39.9
    },
    "吉达": {
        "name": "吉达",
        "longitude": 116.3,
        "latitude": 39.9
    }
}
// gcbNodesList = cityCoypeList
export {
    gcbNodesList
}