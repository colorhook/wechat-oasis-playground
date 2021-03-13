import { OrbitControl } from "@oasis-engine/controls";
import {
  SystemInfo,
  Animation,
  Camera,
  DirectLight,
  EnvironmentMapLight,
  Vector3,
  WebGLEngine,
} from "oasis-engine";

Page({

  engine: null,
  /**
   * 页面的初始数据
   */
  data: {

  },

  start: function(canvas) {
    const engine = this.engine = new WebGLEngine(canvas);
    engine.canvas.width = engine.canvas.width * SystemInfo.devicePixelRatio;
    engine.canvas.height = engine.canvas.height * SystemInfo.devicePixelRatio;
    const scene = engine.sceneManager.activeScene;
    const rootEntity = scene.createRootEntity();

    // camera
    const cameraEntity = rootEntity.createChild("camera_node");
    cameraEntity.transform.position = new Vector3(0, 1, 5);
    cameraEntity.addComponent(Camera);
    this.control = cameraEntity.addComponent(OrbitControl);
    this.control.target = new Vector3(0, 1, 0);

    const lightNode = rootEntity.createChild("light_node");
    rootEntity.addComponent(EnvironmentMapLight);
    lightNode.addComponent(DirectLight).intensity = 0.6;
    lightNode.transform.lookAt(new Vector3(0, 0, 1));
    lightNode.transform.rotate(new Vector3(0, 90, 0));

    engine.resourceManager
      .load("https://gw.alipayobjects.com/os/basement_prod/aa318303-d7c9-4cb8-8c5a-9cf3855fd1e6.gltf")
      .then((asset) => {
        wx.hideLoading()
        const { animations, defaultSceneRoot } = asset;
        rootEntity.addChild(defaultSceneRoot);
        const animator = defaultSceneRoot.getComponent(Animation);
        animator.playAnimationClip(animations[0].name);
      });

    wx.showLoading({ title: '正在加载模型' })
    engine.run();
  },
  onTouchStart(event) {
    this.control.onTouchStart(event)
  },
  onTouchMove(event) {
    this.control.onTouchMove(event)
  },
  onTouchEnd() {
    this.control.onTouchEnd();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const query = wx.createSelectorQuery()
    query.select('#canvas').node().exec((res) => {
      const canvas = res[0].node;
      this.start(canvas)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.engine.destroy()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})