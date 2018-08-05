// pages/cart/cart.js
const app = getApp();
const data = require("../../data/mockData.js");
const user = wx.getStorageSync("user");
const order = wx.getStorageSync("order");
const goods = wx.getStorageSync("goods");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carts: wx.getStorageSync("order"),
    goods:goods,
    user:user,
    count: 0,
    number: 0,
    total_fee:null,
    price:null,
    selectedAllStatus:false,
    isAllChecked:false,
    isAllCheckeds:-1,
    isActive:false,
  },
 onLoad:function(){
   this.setData({ carts: wx.getStorageSync("order")});
 },
  reduceHandler: function (e) {
    console.log(e);
    const id = e.currentTarget.dataset.index;
    const price = e.currentTarget.dataset.price;
    const count = e.currentTarget.dataset.count;
    const carts=this.data.carts;
    for (var i = 0; i < carts.length; i++) {
      if (id === i && carts[i].count!==1) {
        carts[i].count = --carts[i].count;
        carts[i].total_fee = (carts[i].count * price).toFixed(2);
      }
      this.setData({
        carts,
      });
    }
  },
  addHandler: function (e) {
    console.log(e);
    const id = e.currentTarget.dataset.index;
    const price = e.currentTarget.dataset.price;
    const count = e.currentTarget.dataset.count;
    const carts = this.data.carts;
    console.log(id, price, count);
    for (var i = 0; i < carts.length; i++) {
      if (id === i) {
        carts[i].count = ++carts[i].count;
        carts[i].total_fee = (carts[i].count * price).toFixed(2);
      }
      console.log(carts[i].selected);
      this.setData({
        carts,
      });
    }
  },
  bindCheckbox: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var carts = this.data.carts;
    var isChecked=-1;
    var isActiveed=this.data.carts.length;
    // change selected status
    console.log("old isChecked",isChecked);
    for (var i = 0; i < carts.length; i++) {
      if (index===i){
        carts[i].selected = !carts[i].selected;
      }
      this.setData({
        carts,
      });
    }
    // selected status
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].selected){
        ++isChecked;
        this.setData({ isActive:true});
      }else{
        this.setData({ selectedAllStatus: false});
        // return;
      }
      console.log("change isChecked", isChecked); 
    }
    console.log("new isChecked", isChecked);
    if (isChecked===this.data.carts.length-1){
      this.setData({ selectedAllStatus: true});
    }
    if (isChecked===-1){
      this.setData({ isActive: false });
    }
  },
  bindSelectAll: function () {
    var selectedAllStatus = this.data.selectedAllStatus;
    selectedAllStatus = !selectedAllStatus;
    var carts = this.data.carts;
      for (var i = 0; i < carts.length; i++) {
        carts[i].selected = selectedAllStatus;
        var num = parseInt(this.data.carts[i].num);
        var price = parseInt(this.data.carts[i].price);
        this.setData({
          selectedAllStatus,
          carts,
          isActive: false
        });
      }
  },
  removeHandler:function(){
    const carts=this.data.carts;
    let isChecked = -1;
    let that=this;
    let cart = [];
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        ++isChecked;
      } else {
        cart[cart.length] = carts[i];
      }
    }
    if (cart.length === this.data.carts.length) {
      console.log(isChecked);
      wx.showModal({
        title: '购物车',
        content: '请选择订单',
      })
    } else {
        wx.showModal({
        title: '购物车',
        content: '是否删除购物车',
        success:function(params){
          if (params.confirm) {
            that.setData({ carts: cart});
          }
        }
      })
    }   
  },
  finishOrderHandler:function(){
    const carts=this.data.carts;
    let isChecked=-1;
    let cart = [];
    for (var i = 0; i < carts.length; i++) {
      if (!carts[i].selected) {
        console.log(1);
        ++isChecked;
      } else {
        cart[cart.length]=carts[i];
      }
    }
    if (isChecked===this.data.carts.length-1){
      wx.showModal({
        title: '支付订单',
        content: '请选择商品',
      })
    }else{
      wx.showToast({
        title: '订单完成',
        icon:"success"
      });
    }   
  },
  onShow:function(){
    this.setData({ carts: wx.getStorageSync("order") });
  }
})