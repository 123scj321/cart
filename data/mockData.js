const list={
  nav:[{
    title:"粮油",
    url:""
  },
  {
    title: "香油",
    url: ""
  },
  {
    title: "酱油",
    url: ""
  },
  {
    title: "粮油",
    url: ""
  },
  {
    title: "粮油",
    url: ""
  },
  {
    title: "粮油",
    url: ""
  },
  {
    title: "粮油",
    url: ""
  },
  {
    title: "粮油",
    url: ""
  },
  ],
  goods:[
    {
      images: [{ md: "../../images/1.png", lg: "../../images/1.png", sm:"../../images/1.png"}],
      detail:"九阳DJ13E-Q9女神紫志能破壁豆浆机...",
      price:999.00,
      oldPrice:1000.00,
      save:100,
      sale:100,
      color: ["白色双色款（一刀两款）", "白色标准款（一杯一刀）", "黑色标准款（一杯一刀）"],
      value:[{
        userAvatar:"../../images/3.png",
        nickName:"社区老大",
        time:"2018-12-1",
        color: "白色双色款（一刀两款）",
        context:"社区老大很满意，推荐购买！"
      },
      
      ],
      detaiImage: ["../../images/1.png"],
    }, 
    {
      images: [{ md: "../../images/1.png", lg: "../../images/1.png", sm: "../../images/1.png" }],
      detail: "九阳DJ13E-Q9女神紫志能破壁豆浆机...",
      price: 999.00,
      oldPrice: 1000.00,
      save: 100,
      sale: 100,
      color: ["白色双色款（一刀两款）", "白色标准款（一杯一刀）", "黑色标准款（一杯一刀）"],
      value: [{
        userAvatar: "../../images/3.png",
        nickName: "社区老大",
        time: "2018-12-1",
        color: "白色双色款（一刀两款）",
        context: "社区老大很满意，推荐购买！"
      },

      ],
      detaiImage: ["../../images/1.png"],
    }, 
    {
      images: [{ md: "../../images/2.png", lg: "../../images/2.png", sm: "../../images/2.png" }],
      detail: "味多美，选用全球优质原料，全国300多家味多美",
      price: 98.21,
      oldPrice: 110.00,
      save: 100,
      sale: 100,
      color: ["白色双色款（一刀两款）", "白色标准款（一杯一刀）", "黑色标准款（一杯一刀）"],
      value: [{
        userAvatar: "../../images/3.png",
        nickName: "社区老大",
        time: "2018-12-1",
        color: "白色双色款（一刀两款）",
        context: "社区老大很满意，推荐购买！"
      },
        {
          userAvatar: "../../images/3.png",
          nickName: "社区老大",
          time: "2018-12-1",
          color: "白色双色款（一刀两款）",
          context: "社区老大很满意，推荐购买！"
        },

      ],
      detaiImage: ["../../images/4.png"],
    }, 
    {
      images: [{ md: "../../images/2.png", lg: "../../images/2.png", sm: "../../images/2.png" }],
      detail: "味多美，选用全球优质原料，全国300多家味多美",
      price:89.21,
      oldPrice: 110.00,
      save: 100,
      sale: 100,
      color: ["白色双色款（一刀两款）", "白色标准款（一杯一刀）", "黑色标准款（一杯一刀）"],
      value: [{
        userAvatar: "../../images/3.png",
        nickName: "社区老大",
        time: "2018-12-1",
        color: "白色双色款（一刀两款）",
        context: "社区老大很满意，推荐购买！"
      },
        {
          userAvatar: "../../images/3.png",
          nickName: "社区老大",
          time: "2018-12-1",
          color: "白色双色款（一刀两款）",
          context: "社区老大很满意，推荐购买！"
        },
      ],
      detaiImage: ["../../images/4.png"],
    }, 
  ],
  user: [
      {
        userAvatar: "../../images/3.png",
        nickName: "社区老大",
        context: "社区老大很满意，推荐购买！",
        order_id:[1]
      }
    ],
  order: [
    { user_id: 1, goods_id: 1, color_id: 0, count: 1, total_fee: "999", selected:false},
    { user_id: 1, goods_id: 3, color_id: 2, count: 4, total_fee: "98.21",selected: false}
    ]
}
module.exports = {
  data: list
};