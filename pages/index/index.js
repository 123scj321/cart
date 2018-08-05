const app=getApp();
const data=require("../../data/mockData.js");
wx.setStorageSync("goods", data.data.goods);
wx.setStorageSync("user", data.data.user);
wx.setStorageSync("order", data.data.order);
Page({
  data: {
    scrollTop: 100,
    goods:wx.getStorageSync("goods"),
    nav:data.data.nav,
    active:0,
    paid:999.00
  },
 onLoad:function(){
 },
 addCartHandler:function(e){
   console.log(e);
   console.log(e.currentTarget.dataset.orderid);
   wx.navigateTo({
     url: '../detail/detail?goods_id=' + e.currentTarget.dataset.orderid,
   })
 }
})
