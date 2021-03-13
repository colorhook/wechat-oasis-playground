import { OrbitControl } from "@oasis-engine/controls";
import {
  AssetType,
  Camera,
  ParticleRenderer,
  SystemInfo,
  ParticleRendererBlendMode,
  Vector3,
  WebGLEngine,
  Shader,
} from "oasis-engine";

Page({

  engine: null,
  particles: null,
  /**
   * 页面的初始数据
   */
  data: {

  },

  start: function(node) {
    //-- create engine object
    const engine = this.engine = new WebGLEngine(node);
    engine.canvas.width = engine.canvas.width * SystemInfo.devicePixelRatio;
    engine.canvas.height = engine.canvas.height * SystemInfo.devicePixelRatio;

    const scene = engine.sceneManager.activeScene;
    const rootEntity = scene.createRootEntity(); 

    //-- create camera
    const cameraEntity = rootEntity.createChild("camera_entity");
    cameraEntity.transform.position = new Vector3(0, 0, 50);
    cameraEntity.addComponent(Camera);
    const control = this.control = cameraEntity.addComponent(OrbitControl);
    control.autoRotate = true;
    control.autoRotateSpeed = 10;

    engine.run();
    
    const particleEntity = rootEntity.createChild("particle");

    let particles = this.particles = particleEntity.addComponent(ParticleRenderer);

    const spriteSheet = [
      {
        x: 0,
        y: 0,
        w: 100,
        h: 95,
        offX: 0,
        offY: 0,
        sourceW: 100,
        sourceH: 95
      },
      {
        x: 100,
        y: 0,
        w: 48,
        h: 46,
        offX: 0,
        offY: 0,
        sourceW: 48,
        sourceH: 46
      },
      {
        x: 148,
        y: 0,
        w: 97,
        h: 90,
        offX: 0,
        offY: 0,
        sourceW: 97,
        sourceH: 90
      },
      {
        x: 245,
        y: 0,
        w: 148,
        h: 128,
        offX: 0,
        offY: 0,
        sourceW: 148,
        sourceH: 128
      },
      {
        x: 393,
        y: 0,
        w: 118,
        h: 249,
        offX: 0,
        offY: 0,
        sourceW: 118,
        sourceH: 249
      },
      {
        x: 100,
        y: 90,
        w: 124,
        h: 94,
        offX: 0,
        offY: 0,
        sourceW: 124,
        sourceH: 94
      },
      {
        x: 0,
        y: 184,
        w: 249,
        h: 185,
        offX: 0,
        offY: 0,
        sourceW: 249,
        sourceH: 185
      },
      {
        x: 0,
        y: 95,
        w: 86,
        h: 83,
        offX: 0,
        offY: 0,
        sourceW: 86,
        sourceH: 83
      }
    ];

    engine.resourceManager
      .load({
        url: "https://gw.alipayobjects.com/mdn/rms_d27172/afts/img/A*_oorR5SrpXcAAAAAAAAAAAAAARQnAQ",
        type: AssetType.Texture2D
      })
      .then((resource) => {
        particles.maxCount = 400;
        particles.startTimeRandomness = 5;
        particles.position = new Vector3(0, -10, 0);
        particles.velocity = new Vector3(0, 20, 0);
        particles.velocityRandomness = new Vector3(10, 2, 10);
        particles.acceleration = new Vector3(0, -10, 0);
        particles.accelerationRandomness = new Vector3(2, 4, 5);
        particles.rotateVelocity = 1;
        particles.rotateVelocityRandomness = 1;
        particles.size = 1;
        particles.sizeRandomness = 1;
        particles.color = new Vector3(0.5, 0.5, 0.5);
        particles.colorRandomness = 1;
        particles.isFadeIn = true;
        particles.isFadeOut = true;
        particles.texture = resource;
        particles.spriteSheet = spriteSheet;
        particles.blendMode = ParticleRendererBlendMode.Additive;
        particles.start();
    });

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
    this.particles._material.destroy();
    this.particles._vertexBuffer.destroy();
    this.particles._geometry.destroy();
    this.particles.stop();
    this.particles.destroy();
    this.engine.destroy()
    delete Shader._propertyNameMap['u_time'];
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