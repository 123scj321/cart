// pages/cart/cart.js
const app = getApp();
const data = require("../../data/mockData.js");
const user=wx.getStorageSync("user");
const order=wx.getStorageSync("order");
const goods=wx.getStorageSync("goods");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    is_dots: true,
    swiper_data_num: 0,
    swiperCurrent: 0,
    total_fee: null,
    peopleNumber: 2,
    count: 1,
    detailInformation: "",
    goods_id:null,
    isShowCart:"none",
    checked:"未选",
    color_id:-1,
    nav: ["商品", "评价","详情"],
    navActived:0,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(goods[options.goods_id].detaiImage[0]);
    this.setData({ 
      goods_id: options.goods_id,
      detailInformation: goods[options.goods_id], 
      imgUrls: [{
          link: '',
          url: goods[options.goods_id].images[0].md
        },
        {
          link: '',
          url: goods[options.goods_id].images[0].md
        },
        {
          link: '',
          url: goods[options.goods_id].detaiImage[0]
        },],
      total_fee: goods[options.goods_id].price,
    });
    this.setData({ swiper_data_num: this.data.imgUrls.length });
    // console.log(this.data.detailInformation);
    // console.log(this.data.detailInformation.value);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // swiperChange
  swiperChange: function (e) {
    this.setData({ swiperCurrent: e.detail.current });
  },
  reduceHandler:function(){
    const total = this.data.total_fee;
    var count=this.data.count;
    const price = this.data.detailInformation.price;
    console.log(total, count, price);
    if (count>1){
      count = --count;
      this.setData({
        count: count,
        total_fee: (price * count).toFixed(2),
      });
    }
  },
  addHandler:function(){
    const total = this.data.total_fee;
    var count = this.data.count;
    const price = this.data.detailInformation.price;
    console.log(total,count, price);
    count=count++;
    this.setData({
      count: ++count,
      total_fee: (price * count).toFixed(2),
      });
  },
  addCartHandler:function(){
    let order=wx.getStorageSync("order");
    order[order.length] = { user_id: 1, goods_id: this.data.goods_id, color_id:this.data.color_id, count: this.data.count, total_fee: this.data.total_fee };
    console.log(order);
    wx.setStorageSync("order", order);
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  showCartHander:function(){
    this.setData({ isShowCart:"block"});
  },
  // chooseColorHandler
  chooseColorHandler:function(e){
    console.log(e.currentTarget.dataset.colorid);
    this.setData({
      checked: this.data.detailInformation.color[e.currentTarget.dataset.colorid],
      color_id: e.currentTarget.dataset.colorid
    });
    console.log(this.data.checked,this.data.color_id);
  },
  // closeCartHandler
  closeCartHandler:function(){
    this.setData({ isShowCart:"none"});
  },
  // addCartHander
  addCartHander:function(){
    if(this.data.checked==="未选"){
      wx.showModal({
        title: "购物车",
        content: '请选择颜色',
      })
    }else{
      let order = wx.getStorageSync("order");
      order[order.length] = { user_id: 1, goods_id: parseInt(this.data.goods_id), color_id: this.data.color_id, count: this.data.count, total_fee: this.data.total_fee, selected: false };
      console.log(order);
      wx.setStorageSync("order", order);
      wx.showModal({
        title: "购物车",
        content: '已添加购物车',
      })
      this.setData({ isShowCart: "none" });
      wx.navigateTo({
        url: '../cart/cart',
      })
    }
  },
  // navChangeHandler
  navChangeHandler:function(e){
    console.log(e);
    console.log(e.currentTarget.dataset.navactive);
    this.setData({ navActived: e.currentTarget.dataset.navactive});
    e.currentTarget.dataset.navactive===0&&wx.pageScrollTo({
      scrollTop: 0
    });
    e.currentTarget.dataset.navactive === 1 && wx.pageScrollTo({
      scrollTop: 410
    });
    e.currentTarget.dataset.navactive === 2 && wx.pageScrollTo({
      scrollTop: 1000
    });
  }
})