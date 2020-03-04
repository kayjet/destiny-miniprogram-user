// pages/component/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    select: function (e) {
      this.setData({
        selectVal: e.detail
      })
    },
    toAppoint:function(){
      wx.navigateTo({
        url: '/pages/appoint/appoint',
      })
    }
  }
})
