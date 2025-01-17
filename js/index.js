// 柱状图1模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: [
                "中埠头",
                "西埠头",
                "申明亭",
                "南王里",
                "东埠头",
                "田柳园区",
                "崔家村",
                "常家庄",
                "崔家庄",
                "东中疃",
                "王高园区",
                "巨家",
                "西王高",
                "后疃",
                "孙家庄",
                "坡里"
            ],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                interval: 0,
                rotate: 40
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                        // width: 1,
                        // type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: "直接访问",
            type: "bar",
            barWidth: "40%",
            data: [23.1, 2, 2, 0, 3, 15, 9.7, 42, 0, 0, 8, 4, 0, 5, 0, 0],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

    // 数据变化
    var dataAll = [{
            year: "黄瓜",
            data: [23.1, 2, 2, 0, 3, 15, 9.7, 42, 0, 0, 8, 4, 0, 5, 0, 0]
        },
        {
            year: "西红柿",
            data: [5.5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 11, 0, 0]
        }
    ];

    document.querySelector(".bar h2").addEventListener("click", function(e) {
        var i = e.target == this.children[0] ? 0 : 1;
        option.series[0].data = dataAll[i].data;
        myChart.setOption(option);
    });
})();

// 折线图定制
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));

    // (1)准备数据
    var data = {
        year: [
            [16, 12, 8, 19, 2, 1, 5, 7, 3, 3],
            [1, 1, 2, 0, 1, 1, 0, 2, 0, 1, 2]
        ]
    };

    // 2. 指定配置和数据
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "新增会员",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "新增下单",
                type: "line",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// 饼形图定制
// 折线图定制
// (function() {
//     // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.querySelector(".pie .chart"));

//     option = {
//         tooltip: {
//             trigger: "item",
//             formatter: "{a} <br/>{b}: {c} ({d}%)",
//             position: function(p) {
//                 //其中p为当前鼠标的位置
//                 return [p[0] + 10, p[1] - 10];
//             }
//         },
//         legend: {
//             top: "90%",
//             itemWidth: 10,
//             itemHeight: 10,
//             data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "12"
//             }
//         },
//         series: [{
//             name: "年龄分布",
//             type: "pie",
//             center: ["50%", "42%"],
//             radius: ["40%", "60%"],
//             color: [
//                 "#065aab",
//                 "#066eab",
//                 "#0682ab",
//                 "#0696ab",
//                 "#06a0ab",
//                 "#06b4ab",
//                 "#06c8ab",
//                 "#06dcab",
//                 "#06f0ab"
//             ],
//             label: {
//                 show: false
//             },
//             labelLine: {
//                 show: false
//             },
//             data: [{
//                     value: 1,
//                     name: "0岁以下"
//                 },
//                 {
//                     value: 4,
//                     name: "20-29岁"
//                 },
//                 {
//                     value: 2,
//                     name: "30-39岁"
//                 },
//                 {
//                     value: 2,
//                     name: "40-49岁"
//                 },
//                 {
//                     value: 1,
//                     name: "50岁以上"
//                 }
//             ]
//         }]
//     };

//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
//     window.addEventListener("resize", function() {
//         myChart.resize();
//     });
// })();
// 学习进度柱状图模块
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    var data = [100, 100, 80, 100, 20];
    var titlename = ["第一天", "第二天", "第三天", "第四天", "第五天"];
    var valdata = ["10", "10", "10", "10", "10"];
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    option = {
        //图标位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",
                    rich: {
                        lg: {
                            backgroundColor: "#339911",
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 20
                        }
                    }
                }
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [{
                name: "条",
                type: "bar",
                yAxisIndex: 0,
                data: data,
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%"
                    }
                }
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 折线图 优秀作品
// (function() {
//     // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.querySelector(".line1 .chart"));

//     option = {
//         tooltip: {
//             trigger: "axis",
//             axisPointer: {
//                 lineStyle: {
//                     color: "#dddc6b"
//                 }
//             }
//         },
//         legend: {
//             top: "0%",
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "12"
//             }
//         },
//         grid: {
//             left: "10",
//             top: "30",
//             right: "10",
//             bottom: "10",
//             containLabel: true
//         },

//         xAxis: [{
//                 type: "category",
//                 boundaryGap: false,
//                 axisLabel: {
//                     textStyle: {
//                         color: "rgba(255,255,255,.6)",
//                         fontSize: 12
//                     }
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: "rgba(255,255,255,.2)"
//                     }
//                 },

//                 data: [
//                     "01",
//                     "02",
//                     "03",
//                     "04",
//                     "05",
//                     "06",
//                     "07",
//                     "08",
//                     "09",
//                     "11",
//                     "12",
//                     "13",
//                     "14",
//                     "15",
//                     "16",
//                     "17",
//                     "18",
//                     "19",
//                     "20",
//                     "21",
//                     "22",
//                     "23",
//                     "24",
//                     "25",
//                     "26",
//                     "27",
//                     "28",
//                     "29",
//                     "30"
//                 ]
//             },
//             {
//                 axisPointer: {
//                     show: false
//                 },
//                 axisLine: {
//                     show: false
//                 },
//                 position: "bottom",
//                 offset: 20
//             }
//         ],

//         yAxis: [{
//             type: "value",
//             axisTick: {
//                 show: false
//             },
//             axisLine: {
//                 lineStyle: {
//                     color: "rgba(255,255,255,.1)"
//                 }
//             },
//             axisLabel: {
//                 textStyle: {
//                     color: "rgba(255,255,255,.6)",
//                     fontSize: 12
//                 }
//             },

//             splitLine: {
//                 lineStyle: {
//                     color: "rgba(255,255,255,.1)"
//                 }
//             }
//         }],
//         series: [{
//                 name: "流入",
//                 type: "line",
//                 smooth: true,
//                 symbol: "circle",
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: "#0184d5",
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(
//                             0,
//                             0,
//                             0,
//                             1, [{
//                                     offset: 0,
//                                     color: "rgba(1, 132, 213, 0.4)"
//                                 },
//                                 {
//                                     offset: 0.8,
//                                     color: "rgba(1, 132, 213, 0.1)"
//                                 }
//                             ],
//                             false
//                         ),
//                         shadowColor: "rgba(0, 0, 0, 0.1)"
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: "#0184d5",
//                         borderColor: "rgba(221, 220, 107, .1)",
//                         borderWidth: 12
//                     }
//                 },
//                 data: [
//                     30,
//                     40,
//                     30,
//                     40,
//                     30,
//                     40,
//                     30,
//                     60,
//                     20,
//                     40,
//                     20,
//                     40,
//                     30,
//                     40,
//                     30,
//                     40,
//                     30,
//                     40,
//                     30,
//                     60,
//                     20,
//                     40,
//                     20,
//                     40,
//                     30,
//                     60,
//                     20,
//                     40,
//                     20,
//                     40
//                 ]
//             },
//             {
//                 name: "流出",
//                 type: "line",
//                 smooth: true,
//                 symbol: "circle",
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: "#00d887",
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(
//                             0,
//                             0,
//                             0,
//                             1, [{
//                                     offset: 0,
//                                     color: "rgba(0, 216, 135, 0.4)"
//                                 },
//                                 {
//                                     offset: 0.8,
//                                     color: "rgba(0, 216, 135, 0.1)"
//                                 }
//                             ],
//                             false
//                         ),
//                         shadowColor: "rgba(0, 0, 0, 0.1)"
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: "#00d887",
//                         borderColor: "rgba(221, 220, 107, .1)",
//                         borderWidth: 12
//                     }
//                 },
//                 data: [
//                     50,
//                     30,
//                     50,
//                     60,
//                     10,
//                     50,
//                     30,
//                     50,
//                     60,
//                     40,
//                     60,
//                     40,
//                     80,
//                     30,
//                     50,
//                     60,
//                     10,
//                     50,
//                     30,
//                     70,
//                     20,
//                     50,
//                     10,
//                     40,
//                     50,
//                     30,
//                     70,
//                     20,
//                     50,
//                     10,
//                     40
//                 ]
//             }
//         ]
//     };

//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
//     window.addEventListener("resize", function() {
//         myChart.resize();
//     });
// })();

// 点位分布统计模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1  .chart"));
    // 2. 指定配置项和数据
    var option = {
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "42%"],
            roseType: "radius",
            data: [{
                    value: 29.5,
                    name: "西红柿"
                },
                {
                    value: 113.5,
                    name: "黄瓜"
                },
                {
                    value: 28,
                    name: "小番茄"
                },
                {
                    value: 2.5,
                    name: "贝贝南瓜"
                },
                {
                    value: 5,
                    name: "小麦"
                },
                {
                    value: 20,
                    name: "大葱"
                }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 10,
                // 连接到文字的线长度
                length2: 10
            }
        }]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();