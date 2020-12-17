// components/x-segmentBar/x-segmentBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    segmentBarItems: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handleTap: function (e) {
      this.setData({
        currentIndex: e.currentTarget.id
      })
      this.triggerEvent('selectChange', {
        currentId: e.currentTarget.id
      }, {})
    },
    _handleChangeIndex: function (num) {
      this.setData({
        currentIndex: num
      })
    }
  }
})