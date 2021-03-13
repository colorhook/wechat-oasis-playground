import { OrbitControl } from "@oasis-engine/controls";
import {
  SystemInfo,
  AmbientLight,
  AssetType,
  Camera,
  Color,
  DirectLight,
  EnvironmentMapLight,
  SkyBox,
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
    let scene = engine.sceneManager.activeScene;
    const rootEntity = scene.createRootEntity();

    const color2glColor = (color) => new Color(color[0] / 255, color[1] / 255, color[2] / 255);
    const glColor2Color = (color) => new Color(color[0] * 255, color[1] * 255, color[2] * 255);

    let envLightNode = rootEntity.createChild("env_light");
    let envLight = envLightNode.addComponent(EnvironmentMapLight);


    let directLightColor = { color: [255, 255, 255] };
    let directLightNode = rootEntity.createChild("dir_light");
    let directLight = directLightNode.addComponent(DirectLight);
    directLight.color = new Color(1, 1, 1);


    const ambient = rootEntity.addComponent(AmbientLight);
    ambient.color = new Color(0.2, 0.2, 0.2, 1);

    //-- create camera
    let cameraNode = rootEntity.createChild("camera_node");
    cameraNode.transform.position = new Vector3(0, 0, 5);
    cameraNode.addComponent(Camera);
    this.control = cameraNode.addComponent(OrbitControl);

    Promise.all([
      engine.resourceManager
        .load("https://gw.alipayobjects.com/os/bmw-prod/83219f61-7d20-4704-890a-60eb92aa6159.gltf")
        .then((gltf) => {
          rootEntity.addChild(gltf.defaultSceneRoot);
        }),
      engine.resourceManager
        .load({
          urls: [
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*Bk5FQKGOir4AAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*_cPhR7JMDjkAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*trqjQp1nOMQAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*_RXwRqwMK3EAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*q4Q6TroyuXcAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*DP5QTbTSAYgAAAAAAAAAAAAAARQnAQ"
          ],
          type: AssetType.TextureCube
        })
        .then((cubeMap) => {
          envLight.diffuseTexture = cubeMap;
        }),
      engine.resourceManager
        .load({
          urls: [
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*5w6_Rr6ML6IAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*TiT2TbN5cG4AAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*8GF6Q4LZefUAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*D5pdRqUHC3IAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*_FooTIp6pNIAAAAAAAAAAAAAARQnAQ",
            "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*CYGZR7ogZfoAAAAAAAAAAAAAARQnAQ"
          ],
          type: AssetType.TextureCube
        })
        .then((cubeMap) => {
          envLight.specularTexture = cubeMap;
          let skybox = rootEntity.addComponent(SkyBox);
          skybox.skyBoxMap = cubeMap;
        })
    ]).then(() => {
      wx.hideLoading();
      engine.run();
    });

    wx.showLoading({ title: '正在加载模型' })
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
      const canvas = res[0].node
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
    this.engine.destroy();
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