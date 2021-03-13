import { OrbitControl } from "@oasis-engine/controls";
import {
  SystemInfo,
  BlinnPhongMaterial,
  Camera,
  Color,
  CuboidGeometry,
  GeometryRenderer,
  Script,
  SphereGeometry,
  SpotLight,
  Vector3,
  WebGLEngine
} from "oasis-engine";

const target = new Vector3(0, -3, 0);
const up = new Vector3(0, 1, 0);

class Move extends Script {
  time = 0;
  y = 3;
  range = 5;

  constructor(node) {
    super(node);
  }

  onUpdate(deltaTime) {
    this.time += deltaTime / 1000;
    let x = Math.cos(this.time) * this.range;
    let y = Math.sin(this.time) * this.range * 0.2 + this.y;
    let z = Math.cos(this.time) * this.range;
    this.entity.transform.position = new Vector3(x, y, z);
  }
}

Page({

  engine: null,
  /**
   * 页面的初始数据
   */
  data: {

  },

  start: function(canvas) {
    // 控制 light entity 始终看向固定点
    class LookAtFocus extends Script {
      onUpdate(deltaTime) {
        light1.transform.lookAt(target, up);
      }
    }
    //-- create engine object
    const engine = this.engine = new WebGLEngine(canvas);
    engine.canvas.width = engine.canvas.width * SystemInfo.devicePixelRatio;
    engine.canvas.height = engine.canvas.height * SystemInfo.devicePixelRatio;
    const scene = engine.sceneManager.activeScene;
    const rootEntity = scene.createRootEntity();

    // Logger.enable();
    function createCuboidGeometry(name, position, rotation, w, h, d, castShadow) {
      let obj = rootEntity.createChild(name);
      obj.position = new Vector3(...position);
      obj.transform.rotation = new Vector3(rotation[0], rotation[0], rotation[0]);
      let cubeRenderer = obj.addComponent(GeometryRenderer);
      cubeRenderer.geometry = new CuboidGeometry(rootEntity.engine, w, h, d);
      cubeRenderer.material = mtl;
      cubeRenderer["recieveShadow"] = !castShadow;
      cubeRenderer["castShadow"] = castShadow;
    }

    let mtl = new BlinnPhongMaterial(engine);
    mtl.diffuseColor = new Color(0.1, 0.9, 0.8, 1);
    //-- create light entity
    let lighthouse = rootEntity.createChild("lighthouse");
    let light1 = lighthouse.createChild("light1");
    light1.addComponent(Move);
    light1.addComponent(LookAtFocus);

    let spotLight = light1.addComponent(SpotLight);
    spotLight.angle = Math.PI / 12;
    spotLight.penumbra = 2;
    spotLight["enableShadow"] = true;
    spotLight["shadow"].bias = 0.0001;
    spotLight["shadow"].intensity = 0.2;

    let sphereRenderer3 = light1.addComponent(GeometryRenderer);
    sphereRenderer3.geometry = new SphereGeometry(engine, 0.1);
    sphereRenderer3.material = mtl;

    //-- create geometry
    createCuboidGeometry("cubiod1", [0, -3, 0], [0, 0, 0], 10, 0.1, 10);
    createCuboidGeometry("cubiod2", [5, -2, 0], [0, 0, 0], 0.1, 2, 10);
    createCuboidGeometry("cubiod3", [-5, -2, 0], [0, 0, 0], 0.1, 2, 10);
    createCuboidGeometry("cubiod4", [0, -2, -5], [0, 0, 0], 10, 2, 0.1);
    createCuboidGeometry("cubiod-cast-shadow", [0, -1, 0], [0, 0, 0], 1, 1, 1, true);

    //-- create camera
    let cameraNode = rootEntity.createChild("camera_node");
    cameraNode.transform.position = new Vector3(0, 5, 17);
    cameraNode.transform.lookAt(new Vector3(), new Vector3(0, 1, 0));
    cameraNode.addComponent(Camera);
    this.control = cameraNode.addComponent(OrbitControl);

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
      console.log(canvas)
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