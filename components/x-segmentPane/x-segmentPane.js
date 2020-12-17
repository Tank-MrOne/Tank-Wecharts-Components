// components/x-segmentPane/x-segmentPane.js
Component({
  options: {
    multipleSlots: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {
    segmentPaneTtems: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerSelectChange: function (e) {
      this.setData({
        currentIndex: parseInt(e.detail.currentId)
      })
    },
    _handlerChangeBar: function (e) {
      let segBar = this.selectComponent('#x-sg-bar')
      segBar._handleChangeIndex(e.detail.current)
    }
  }
})