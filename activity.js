
const msg_select_btn = () => {
    let x = document.getElementById("msg_selector");
    const id = x.value;
    console.log(id);
    const displayText = document.getElementById("msg_selector").options[x.selectedIndex].text + " with id = " + id;
    document.getElementById("selected_msg").innerHTML = displayText;
    return { id, displayText };
};

define(["postmonger"], function (Postmonger) {

    const connection = new Postmonger.Session();

    let payload = null;

    connection.trigger('ready');

    connection.on('initActivity', (data) => {
        console.log("Custom activity Initializing...");
        console.log("-------", data);
        payload = data;
        document.getElementById('contact_list').value = JSON.stringify(payload);
    });

    connection.on("clickedNext", () => {
        console.log("Custom activity Clicked...");
        const message = [
            {
                id: 1,
                message: {
                    "type": "flex",
                    "contents": {
                        "type": "carousel",
                        "contents": [
                            {
                                "type": "bubble",
                                "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "image",
                                            "url": "*******************{{Contact.Attribute.linepocuser.Name}}**********************",
                                            "size": "full",
                                            "aspectMode": "cover",
                                            "aspectRatio": "2:3",
                                            "gravity": "top"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "Brown's T-shirts",
                                                            "size": "xl",
                                                            "color": "#ffffff",
                                                            "weight": "bold"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "baseline",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "¥35,800",
                                                            "color": "#ebebeb",
                                                            "size": "sm",
                                                            "flex": 0
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "¥75,000",
                                                            "color": "#ffffffcc",
                                                            "decoration": "line-through",
                                                            "gravity": "bottom",
                                                            "flex": 0,
                                                            "size": "sm"
                                                        }
                                                    ],
                                                    "spacing": "lg"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "filler"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "baseline",
                                                            "contents": [
                                                                {
                                                                    "type": "filler"
                                                                },
                                                                {
                                                                    "type": "icon",
                                                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png"
                                                                },
                                                                {
                                                                    "type": "text",
                                                                    "text": "Add to cart",
                                                                    "color": "#ffffff",
                                                                    "flex": 0,
                                                                    "offsetTop": "-2px"
                                                                },
                                                                {
                                                                    "type": "filler"
                                                                }
                                                            ],
                                                            "spacing": "sm"
                                                        },
                                                        {
                                                            "type": "filler"
                                                        }
                                                    ],
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "spacing": "sm",
                                                    "borderColor": "#ffffff",
                                                    "margin": "xxl",
                                                    "height": "40px"
                                                }
                                            ],
                                            "position": "absolute",
                                            "offsetBottom": "0px",
                                            "offsetStart": "0px",
                                            "offsetEnd": "0px",
                                            "backgroundColor": "#03303Acc",
                                            "paddingAll": "20px",
                                            "paddingTop": "18px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "SALE",
                                                    "color": "#ffffff",
                                                    "align": "center",
                                                    "size": "xs",
                                                    "offsetTop": "3px"
                                                }
                                            ],
                                            "position": "absolute",
                                            "cornerRadius": "20px",
                                            "offsetTop": "18px",
                                            "backgroundColor": "#ff334b",
                                            "offsetStart": "18px",
                                            "height": "25px",
                                            "width": "53px"
                                        }
                                    ],
                                    "paddingAll": "0px"
                                }
                            },
                            {
                                "type": "bubble",
                                "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "image",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg",
                                            "size": "full",
                                            "aspectMode": "cover",
                                            "aspectRatio": "2:3",
                                            "gravity": "top"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "Cony's T-shirts",
                                                            "size": "xl",
                                                            "color": "#ffffff",
                                                            "weight": "bold"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "baseline",
                                                    "contents": [
                                                        {
                                                            "type": "text",
                                                            "text": "¥35,800",
                                                            "color": "#ebebeb",
                                                            "size": "sm",
                                                            "flex": 0
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "¥75,000",
                                                            "color": "#ffffffcc",
                                                            "decoration": "line-through",
                                                            "gravity": "bottom",
                                                            "flex": 0,
                                                            "size": "sm"
                                                        }
                                                    ],
                                                    "spacing": "lg"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [
                                                        {
                                                            "type": "filler"
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "baseline",
                                                            "contents": [
                                                                {
                                                                    "type": "filler"
                                                                },
                                                                {
                                                                    "type": "icon",
                                                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png"
                                                                },
                                                                {
                                                                    "type": "text",
                                                                    "text": "Add to cart",
                                                                    "color": "#ffffff",
                                                                    "flex": 0,
                                                                    "offsetTop": "-2px"
                                                                },
                                                                {
                                                                    "type": "filler"
                                                                }
                                                            ],
                                                            "spacing": "sm"
                                                        },
                                                        {
                                                            "type": "filler"
                                                        }
                                                    ],
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "spacing": "sm",
                                                    "borderColor": "#ffffff",
                                                    "margin": "xxl",
                                                    "height": "40px"
                                                }
                                            ],
                                            "position": "absolute",
                                            "offsetBottom": "0px",
                                            "offsetStart": "0px",
                                            "offsetEnd": "0px",
                                            "backgroundColor": "#9C8E7Ecc",
                                            "paddingAll": "20px",
                                            "paddingTop": "18px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "SALE",
                                                    "color": "#ffffff",
                                                    "align": "center",
                                                    "size": "xs",
                                                    "offsetTop": "3px"
                                                }
                                            ],
                                            "position": "absolute",
                                            "cornerRadius": "20px",
                                            "offsetTop": "18px",
                                            "backgroundColor": "#ff334b",
                                            "offsetStart": "18px",
                                            "height": "25px",
                                            "width": "53px"
                                        }
                                    ],
                                    "paddingAll": "0px"
                                }
                            }
                        ]
                    }
                }
            },
            {
                id: 2,
                message: {
                    type: "flex",
                    altText: "this is a flex message",
                    contents: {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover",
                            "action": {
                                "type": "uri",
                                "uri": "http://linecorp.com/"
                            }
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Brown Cafe",
                                    "weight": "bold",
                                    "size": "xl"
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "margin": "md",
                                    "contents": [
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "size": "sm",
                                            "color": "#999999",
                                            "margin": "md",
                                            "flex": 0
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "margin": "lg",
                                    "spacing": "sm",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Place",
                                                    "color": "#aaaaaa",
                                                    "size": "sm",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                                                    "wrap": true,
                                                    "color": "#666666",
                                                    "size": "sm",
                                                    "flex": 5
                                                }
                                            ]
                                        },
                                        {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Time",
                                                    "color": "#aaaaaa",
                                                    "size": "sm",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "10:00 - 23:00",
                                                    "wrap": true,
                                                    "color": "#666666",
                                                    "size": "sm",
                                                    "flex": 5
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "footer": {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "button",
                                    "style": "link",
                                    "height": "sm",
                                    "action": {
                                        "type": "uri",
                                        "label": "CALL",
                                        "uri": "https://linecorp.com"
                                    }
                                },
                                {
                                    "type": "button",
                                    "style": "link",
                                    "height": "sm",
                                    "action": {
                                        "type": "uri",
                                        "label": "WEBSITE",
                                        "uri": "https://linecorp.com"
                                    }
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [],
                                    "margin": "sm"
                                }
                            ],
                            "flex": 0
                        }
                    },
                }
            }, ,
            {
                id: 3,
                message: {
                    type: "flex",
                    altText: "this is a flex message",
                    contents: {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "hello, world"
                                }
                            ]
                        }
                    },
                }
            },
        ];
        const { id, displayText } = msg_select_btn();
        let contents = message.find(x => x.id === Number(id)).message.contents;

        payload.name = displayText;
        payload["arguments"].execute.inArguments = [{
            // "to": "{{Contact.Attribute.UID}}",
            "to1": "{{Contact.Attribute.linepocuser.UID}}",
            "to2": "{{Contact.Attribute.linepocuser.Name}}",
            // "to3": "{{Contact.Name}}",
            "contact": "{{Contact.Key}}",
            "testData": "sample",
            "messages": JSON.stringify([
                {
                    "type": "flex",
                    "contents": contents
                }
            ])
        }];
        payload["metaData"].isConfigured = true;
        connection.trigger("updateActivity", payload);
    });

});
