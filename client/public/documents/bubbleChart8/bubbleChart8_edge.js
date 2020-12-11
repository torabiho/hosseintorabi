/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Roboto': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.11.2.min.js",
            js+"jquery-ui.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'xAxis',
                            type: 'group',
                            rect: ['88px', '516px', '683', '14', 'auto', 'auto'],
                            c: [
                            {
                                id: 'xAxisValue1',
                                type: 'text',
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1985",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue2',
                                type: 'text',
                                rect: ['59px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1986",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue3',
                                type: 'text',
                                rect: ['136px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1987",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue4',
                                type: 'text',
                                rect: ['211px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1988",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue5',
                                type: 'text',
                                rect: ['288px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1989",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue6',
                                type: 'text',
                                rect: ['361px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1990",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue7',
                                type: 'text',
                                rect: ['438px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1991",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue8',
                                type: 'text',
                                rect: ['512px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1992",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue9',
                                type: 'text',
                                rect: ['589px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1993",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisValue10',
                                type: 'text',
                                rect: ['660px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "1994",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'xAxisTitle',
                                type: 'text',
                                rect: ['338px', '31px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Year",
                                align: "center",
                                font: ['Roboto', [16, "px"], "rgba(109,110,112,1.00)", "normal", "none", "", "break-word", "nowrap"]
                            }]
                        },
                        {
                            id: 'yAxis',
                            type: 'group',
                            rect: ['61px', '143', '22', '372', 'auto', 'auto'],
                            c: [
                            {
                                id: 'yAxisValue1',
                                type: 'text',
                                rect: ['-5px', '349px', 'auto', 'auto', 'auto', 'auto'],
                                text: "-2K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue2',
                                type: 'text',
                                rect: ['7px', '309px', 'auto', 'auto', 'auto', 'auto'],
                                text: "0",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue3',
                                type: 'text',
                                rect: ['-1px', '264px', 'auto', 'auto', 'auto', 'auto'],
                                text: "2K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue4',
                                type: 'text',
                                rect: ['-1px', '218px', 'auto', 'auto', 'auto', 'auto'],
                                text: "4K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue5',
                                type: 'text',
                                rect: ['-1px', '174px', 'auto', 'auto', 'auto', 'auto'],
                                text: "6K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue6',
                                type: 'text',
                                rect: ['-1px', '128px', 'auto', 'auto', 'auto', 'auto'],
                                text: "8K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue7',
                                type: 'text',
                                rect: ['-7px', '84px', 'auto', 'auto', 'auto', 'auto'],
                                text: "10K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue8',
                                type: 'text',
                                rect: ['-7px', '38px', 'auto', 'auto', 'auto', 'auto'],
                                text: "12K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisValue9',
                                type: 'text',
                                rect: ['-7px', '-5px', 'auto', 'auto', 'auto', 'auto'],
                                text: "14K",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'yAxisTitle',
                                type: 'text',
                                rect: ['-87px', '187px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Net Profit (Sum)",
                                align: "center",
                                font: ['Roboto', [16, "px"], "rgba(109,110,112,1.00)", "normal", "none", "", "break-word", "nowrap"],
                                transform: [[],['-90']]
                            }]
                        },
                        {
                            id: 'legend',
                            type: 'group',
                            rect: ['791px', '150px', '145', '265', 'auto', 'auto'],
                            userClass: "",
                            c: [
                            {
                                id: 'leg8',
                                type: 'group',
                                rect: ['0', '238', '102', '19', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText8',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "DreamWorks",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat8',
                                    type: 'rect',
                                    rect: ['2px', '2px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["100px", "100px", "100px", "100px 100px"],
                                    fill: ["rgba(36,163,153,1.00)"],
                                    stroke: [2,"rgba(36,163,153,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'leg7',
                                type: 'group',
                                rect: ['0', '208', '64', '19', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText7',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "Disney",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat7',
                                    type: 'rect',
                                    rect: ['2px', '2px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["100px", "100px", "100px", "100px 100px"],
                                    fill: ["rgba(20,197,158,1.00)"],
                                    stroke: [2,"rgba(20,197,158,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'leg6',
                                type: 'group',
                                rect: ['0', '178', '55', '19', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText6',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "Crest",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat6',
                                    type: 'rect',
                                    rect: ['2px', '2px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["100px", "100px", "100px", "100px 100px"],
                                    fill: ["rgba(78,50,135,1.00)"],
                                    stroke: [2,"rgba(78,50,135,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'leg5',
                                type: 'group',
                                rect: ['0', '148', '83', '19', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText5',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "Columbia",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat5',
                                    type: 'rect',
                                    rect: ['2px', '2px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["100px", "100px", "100px", "100px 100px"],
                                    fill: ["rgba(147,128,232,1.00)"],
                                    stroke: [2,"rgba(147,128,232,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'leg4',
                                type: 'group',
                                rect: ['0', '118', '49', '19', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText4',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "CBS",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat4',
                                    type: 'rect',
                                    rect: ['2px', '2px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["100px", "100px", "100px", "100px 100px"],
                                    fill: ["rgba(232,106,63,1.00)"],
                                    stroke: [2,"rgba(232,106,63,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'leg3',
                                type: 'group',
                                rect: ['0', '88', '98', '19', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText3',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "Buena Vista",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat3',
                                    type: 'rect',
                                    rect: ['2px', '2px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["100px", "100px", "100px", "100px 100px"],
                                    fill: ["rgba(245,206,34,1.00)"],
                                    stroke: [2,"rgba(245,206,34,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'leg2',
                                type: 'group',
                                rect: ['0', '56', '156', '20', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText2',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "Aardman Animations",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat2',
                                    type: 'rect',
                                    rect: ['2px', '4px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["100px", "100px", "100px", "100px 100px"],
                                    fill: ["rgba(134,196,59,1.00)"],
                                    stroke: [2,"rgba(134,196,59,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'leg1',
                                type: 'group',
                                rect: ['0', '28', '129', '19', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "legend",
                                c: [
                                {
                                    id: 'legendText1',
                                    type: 'text',
                                    rect: ['31px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "20th Century Fox",
                                    font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "300", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'legendCat1',
                                    type: 'rect',
                                    rect: ['2px', '2px', '16px', '16px', 'auto', 'auto'],
                                    borderRadius: ["60px", "60px", "60px", "60px 60px"],
                                    fill: ["rgba(49,155,212,1.00)"],
                                    stroke: [2,"rgba(49,155,212,1.00)","none"],
                                    userClass: "legCol"
                                }]
                            },
                            {
                                id: 'legendTitle',
                                type: 'text',
                                rect: ['0px', '-1px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Studios",
                                align: "left",
                                font: ['Roboto', [14, "px"], "rgba(109,110,112,1.00)", "400", "none solid rgb(152, 152, 152)", "normal", "break-word", "nowrap"]
                            }]
                        },
                        {
                            id: 'chartFrame',
                            type: 'rect',
                            rect: ['88px', '148px', '673px', '358px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(230,231,232,1.00)","solid"],
                            userClass: "chartFrame",
                            c: [
                            {
                                id: 'verticalLines',
                                type: 'group',
                                rect: ['41px', '-1px', '667px', '360px', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'vLine1',
                                    type: 'rect',
                                    rect: ['33px', '-1px', '75px', '360px', 'auto', 'auto'],
                                    opacity: '0.5',
                                    fill: ["rgba(210,210,210,0.00)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartVLines"
                                },
                                {
                                    id: 'vLine2',
                                    type: 'rect',
                                    rect: ['185px', '-1px', '75px', '360px', 'auto', 'auto'],
                                    opacity: '0.5',
                                    fill: ["rgba(210,210,210,0.00)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartVLines"
                                },
                                {
                                    id: 'vLine3',
                                    type: 'rect',
                                    rect: ['335px', '-1px', '75px', '360px', 'auto', 'auto'],
                                    opacity: '0.5',
                                    fill: ["rgba(210,210,210,0.00)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartVLines"
                                },
                                {
                                    id: 'vLine4',
                                    type: 'rect',
                                    rect: ['486px', '-1px', '75px', '360px', 'auto', 'auto'],
                                    opacity: '0.5',
                                    fill: ["rgba(210,210,210,0.00)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartVLines"
                                }]
                            },
                            {
                                id: 'HorizontalLines',
                                type: 'group',
                                rect: ['-1px', '0px', '676', '317', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'hLine1',
                                    type: 'rect',
                                    rect: ['1px', '270px', '673px', '45px', 'auto', 'auto'],
                                    fill: ["rgba(210,210,210,0)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartHLines"
                                },
                                {
                                    id: 'hLine2',
                                    type: 'rect',
                                    rect: ['1px', '175px', '673px', '45px', 'auto', 'auto'],
                                    fill: ["rgba(210,210,210,0)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartHLines"
                                },
                                {
                                    id: 'hLine3',
                                    type: 'rect',
                                    rect: ['1px', '89px', '673px', '45px', 'auto', 'auto'],
                                    fill: ["rgba(210,210,210,0)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartHLines"
                                },
                                {
                                    id: 'hLine4',
                                    type: 'rect',
                                    rect: ['1px', '0px', '673px', '45px', 'auto', 'auto'],
                                    fill: ["rgba(210,210,210,0)"],
                                    stroke: [1,"rgba(230,231,232,1.00)","solid"],
                                    userClass: "chartHLines"
                                }]
                            },
                            {
                                id: 'bubble1',
                                type: 'ellipse',
                                rect: ['3px', '272px', '79px', '79px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(49,155,212,1.00)"],
                                stroke: [2,"rgba(56,156,208,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble2',
                                type: 'ellipse',
                                rect: ['11px', '58px', '90px', '90px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(134,196,59,1.00)"],
                                stroke: [2,"rgba(134,196,59,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble3',
                                type: 'ellipse',
                                rect: ['45px', '120px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble4',
                                type: 'ellipse',
                                rect: ['67px', '17px', '35px', '35px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(232,106,63,1.00)"],
                                stroke: [2,"rgba(232,106,63,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble5',
                                type: 'ellipse',
                                rect: ['47px', '165px', '75px', '75px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(147,128,232,1.00)"],
                                stroke: [2,"rgba(147,128,232,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble6',
                                type: 'ellipse',
                                rect: ['90px', '245px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble7',
                                type: 'ellipse',
                                rect: ['112px', '212px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(20,197,158,1.00)"],
                                stroke: [2,"rgba(20,197,158,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble8',
                                type: 'ellipse',
                                rect: ['112px', '72px', '65px', '65px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(36,163,153,1.00)"],
                                stroke: [2,"rgba(36,163,153,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble9',
                                type: 'ellipse',
                                rect: ['144px', '63px', '40px', '40px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble10',
                                type: 'ellipse',
                                rect: ['142px', '172px', '70px', '70px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble11',
                                type: 'ellipse',
                                rect: ['175px', '9px', '55px', '55px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(49,155,212,1.00)"],
                                stroke: [2,"rgba(56,156,208,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble12',
                                type: 'ellipse',
                                rect: ['185px', '235px', '50px', '50px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(134,196,59,1.00)"],
                                stroke: [2,"rgba(134,196,59,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble13',
                                type: 'ellipse',
                                rect: ['234px', '219px', '25px', '25px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble14',
                                type: 'ellipse',
                                rect: ['241px', '144px', '35px', '35px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(232,106,63,1.00)"],
                                stroke: [2,"rgba(232,106,63,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble15',
                                type: 'ellipse',
                                rect: ['233px', '94px', '75px', '75px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(147,128,232,1.00)"],
                                stroke: [2,"rgba(147,128,232,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble16',
                                type: 'ellipse',
                                rect: ['253px', '311px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble17',
                                type: 'ellipse',
                                rect: ['272px', '286px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(20,197,158,1.00)"],
                                stroke: [2,"rgba(20,197,158,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble18',
                                type: 'ellipse',
                                rect: ['257px', '30px', '65px', '65px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(36,163,153,1.00)"],
                                stroke: [2,"rgba(36,163,153,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble19',
                                type: 'ellipse',
                                rect: ['286px', '150px', '85px', '85px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble20',
                                type: 'ellipse',
                                rect: ['286px', '218px', '90px', '90px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble21',
                                type: 'ellipse',
                                rect: ['343px', '272px', '55px', '55px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(49,155,212,1.00)"],
                                stroke: [2,"rgba(56,156,208,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble22',
                                type: 'ellipse',
                                rect: ['355px', '58px', '90px', '90px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(134,196,59,1.00)"],
                                stroke: [2,"rgba(134,196,59,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble23',
                                type: 'ellipse',
                                rect: ['384px', '120px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble24',
                                type: 'ellipse',
                                rect: ['383px', '17px', '35px', '35px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(232,106,63,1.00)"],
                                stroke: [2,"rgba(232,106,63,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble25',
                                type: 'ellipse',
                                rect: ['383px', '165px', '75px', '75px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(147,128,232,1.00)"],
                                stroke: [2,"rgba(147,128,232,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble26',
                                type: 'ellipse',
                                rect: ['399px', '245px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble27',
                                type: 'ellipse',
                                rect: ['428px', '306px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(20,197,158,1.00)"],
                                stroke: [2,"rgba(20,197,158,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble28',
                                type: 'ellipse',
                                rect: ['424px', '94px', '65px', '65px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(36,163,153,1.00)"],
                                stroke: [2,"rgba(36,163,153,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble29',
                                type: 'ellipse',
                                rect: ['433px', '63px', '40px', '40px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble30',
                                type: 'ellipse',
                                rect: ['410px', '172px', '70px', '70px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble31',
                                type: 'ellipse',
                                rect: ['429px', '9px', '55px', '55px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(49,155,212,1.00)"],
                                stroke: [2,"rgba(56,156,208,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble32',
                                type: 'ellipse',
                                rect: ['421px', '235px', '50px', '50px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(134,196,59,1.00)"],
                                stroke: [2,"rgba(134,196,59,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble33',
                                type: 'ellipse',
                                rect: ['452px', '219px', '25px', '25px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble34',
                                type: 'ellipse',
                                rect: ['460px', '144px', '35px', '35px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(232,106,63,1.00)"],
                                stroke: [2,"rgba(232,106,63,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble35',
                                type: 'ellipse',
                                rect: ['457px', '94px', '46px', '46px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(147,128,232,1.00)"],
                                stroke: [2,"rgba(147,128,232,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble36',
                                type: 'ellipse',
                                rect: ['483px', '311px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble37',
                                type: 'ellipse',
                                rect: ['510px', '286px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(20,197,158,1.00)"],
                                stroke: [2,"rgba(20,197,158,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble38',
                                type: 'ellipse',
                                rect: ['493px', '30px', '65px', '65px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(36,163,153,1.00)"],
                                stroke: [2,"rgba(36,163,153,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble39',
                                type: 'ellipse',
                                rect: ['509px', '150px', '70px', '70px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble40',
                                type: 'ellipse',
                                rect: ['533px', '218px', '58px', '58px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble41',
                                type: 'ellipse',
                                rect: ['549px', '95px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble42',
                                type: 'ellipse',
                                rect: ['569px', '319px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(20,197,158,1.00)"],
                                stroke: [2,"rgba(20,197,158,1.00)","none"],
                                userClass: "bubbles bubbles10",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble43',
                                type: 'ellipse',
                                rect: ['561px', '136px', '65px', '65px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(36,163,153,1.00)"],
                                stroke: [2,"rgba(36,163,153,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble44',
                                type: 'ellipse',
                                rect: ['572px', '34px', '70px', '70px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble45',
                                type: 'ellipse',
                                rect: ['610px', '218px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble46',
                                type: 'ellipse',
                                rect: ['609px', '71px', '45px', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble47',
                                type: 'ellipse',
                                rect: ['607px', '304px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(20,197,158,1.00)"],
                                stroke: [2,"rgba(20,197,158,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble48',
                                type: 'ellipse',
                                rect: ['595px', '245px', '65px', '65px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(36,163,153,1.00)"],
                                stroke: [2,"rgba(36,163,153,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble49',
                                type: 'ellipse',
                                rect: ['624px', '171px', '39px', '39px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(245,206,34,1.00)"],
                                stroke: [2,"rgba(245,206,34,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'bubble50',
                                type: 'ellipse',
                                rect: ['638px', '141px', '30px', '30px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(78,50,135,1.00)"],
                                stroke: [2,"rgba(78,50,135,1.00)","none"],
                                userClass: "bubbles",
                                transform: [[],[],[],['0','0']]
                            }]
                        },
                        {
                            id: 'vDottedLine',
                            type: 'rect',
                            rect: ['129px', '149px', '0px', '357px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(179,179,180,0.00)"],
                            stroke: [1,"rgba(56,152,204,0.99)","dashed"],
                            userClass: "vDottedLine"
                        },
                        {
                            id: 'hDottedLine',
                            type: 'rect',
                            rect: ['90px', '211px', '673px', '0px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(179,179,180,0.00)"],
                            stroke: [1,"rgba(56,152,204,0.99)","dashed"],
                            userClass: "hDottedLine"
                        },
                        {
                            id: 'verticalLabel',
                            type: 'group',
                            rect: ['6px', '465px', '85px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            userClass: "vLabelHov",
                            c: [
                            {
                                id: 'vValBox',
                                type: 'image',
                                rect: ['-1px', '8px', '81px', '32px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"yAxis.svg",'0px','0px'],
                                userClass: "vValBox"
                            },
                            {
                                id: 'vValHov',
                                type: 'text',
                                rect: ['7px', '14px', '51px', '21px', 'auto', 'auto'],
                                opacity: '1',
                                text: "YY",
                                align: "center",
                                userClass: "vValHov",
                                font: ['Roboto', [14, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'horizontalLabel',
                            type: 'group',
                            rect: ['45', '502px', '66px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            userClass: "hLabelHov",
                            c: [
                            {
                                id: 'hValBox',
                                type: 'image',
                                rect: ['0px', '0px', '67px', '47px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"xAxis.svg",'0px','0px'],
                                userClass: "hValBox"
                            },
                            {
                                id: 'hValHov',
                                type: 'text',
                                rect: ['12px', '17px', '42px', '21px', 'auto', 'auto'],
                                text: "YY",
                                align: "center",
                                userClass: "hValHov",
                                font: ['Roboto', [14, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'exitB',
                            type: 'group',
                            rect: ['796px', '483px', '61', '27', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'exitBtn',
                                type: 'rect',
                                rect: ['0px', '0px', '61px', '27px', 'auto', 'auto'],
                                borderRadius: ["2px", "2px", "2px", "2px 2px"],
                                fill: ["rgba(49,155,212,1)"],
                                stroke: [1,"rgb(210, 210, 210)","none"]
                            },
                            {
                                id: 'exitText',
                                type: 'text',
                                rect: ['18px', '3px', '26px', '21px', 'auto', 'auto'],
                                text: "Exit",
                                font: ['Roboto', [14, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '656px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("bubbleChart8_edgeActions.js");
})("EDGE-351439758");
