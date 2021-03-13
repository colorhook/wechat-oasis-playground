Page({
  goto(event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.url,
    })
  },
  onLoad() {
  }
})
