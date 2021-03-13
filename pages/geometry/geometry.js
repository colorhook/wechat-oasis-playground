import { OrbitControl } from "@oasis-engine/controls";
import {
  SystemInfo,
  AmbientLight,
  BlinnPhongMaterial,
  Buffer,
  BufferBindFlag,
  BufferGeometry,
  BufferUsage,
  Camera,
  Color,
  DirectLight,
  GeometryRenderer,
  IndexFormat,
  Vector3,
  VertexElement,
  VertexElementFormat,
  WebGLEngine
} from "oasis-engine";

/**
 * to create custom cube geometry.
 */
class CustomCubeGeometry {
  /**
   * create cube geometry with custom BufferGeometry.
   * @param size - cube size
   */
  static create(engine, size) {
    const geometry = new BufferGeometry(engine, "CustomCubeGeometry");

    // prettier-ignore
    // create vertices data.
    const vertices = new Float32Array([
    	// up
    	-size, size, -size, 0, 1, 0, size, size, -size, 0, 1, 0, size, size, size, 0, 1, 0, -size, size, size, 0, 1, 0,
    	// down
    	-size, -size, -size, 0, -1, 0, size, -size, -size, 0, -1, 0, size, -size, size, 0, -1, 0, -size, -size, size, 0, -1, 0,
    	// left
    	-size, size, -size, -1, 0, 0, -size, size, size, -1, 0, 0, -size, -size, size, -1, 0, 0, -size, -size, -size, -1, 0, 0,
    	// right
    	size, size, -size, 1, 0, 0, size, size, size, 1, 0, 0, size, -size, size, 1, 0, 0, size, -size, -size, 1, 0, 0,
    	// front
    	-size, size, size, 0, 0, 1, size, size, size, 0, 0, 1, size, -size, size, 0, 0, 1, -size, -size, size, 0, 0, 1,
    	// back
    	-size, size, -size, 0, 0, -1, size, size, -size, 0, 0, -1, size, -size, -size, 0, 0, -1, -size, -size, -size, 0, 0, -1]);

    // prettier-ignore
    // create indices data.
    const indices = new Uint16Array([
    	// up
    	0, 2, 1, 2, 0, 3,
    	// down
    	4, 6, 7, 6, 4, 5,
    	// left
    	8, 10, 9, 10, 8, 11,
    	// right
    	12, 14, 15, 14, 12, 13,
    	// front
    	16, 18, 17, 18, 16, 19,
    	// back
    	20, 22, 23, 22, 20, 21]);

    // create gpu vertex buffer and index buffer.
    const vertexBuffer = new Buffer(engine, BufferBindFlag.VertexBuffer, vertices, BufferUsage.Static);
    const indexBuffer = new Buffer(engine, BufferBindFlag.IndexBuffer, indices, BufferUsage.Static);

    // bind buffer
    geometry.setVertexBufferBinding(vertexBuffer, 24);
    geometry.setIndexBufferBinding(indexBuffer, IndexFormat.UInt16);

    // add vertexElement
    geometry.setVertexElements([
      new VertexElement("POSITION", 0, VertexElementFormat.Vector3, 0),
      new VertexElement("NORMAL", 12, VertexElementFormat.Vector3, 0)
    ]);

    // add one sub geometry.
    geometry.addSubGeometry(0, indices.length);
    return geometry;
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
    // create engine and get root entity.
    const engine = this.engine = new WebGLEngine(canvas);
    const rootEntity = engine.sceneManager.activeScene.createRootEntity("Root");
    engine.canvas.width = engine.canvas.width * SystemInfo.devicePixelRatio;
    engine.canvas.height = engine.canvas.height * SystemInfo.devicePixelRatio;

    // create light.
    const lightEntity = rootEntity.createChild("DirectLight");
    const ambient = lightEntity.addComponent(AmbientLight);
    const directLight = lightEntity.addComponent(DirectLight);
    ambient.color = new Color(0.2, 0.2, 0.2);
    directLight.color = new Color(0.3, 0.4, 0.4);

    // create camera.
    const cameraEntity = rootEntity.createChild("Camera");
    cameraEntity.transform.setPosition(0, 6, 10);
    cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
    cameraEntity.addComponent(Camera);

    this.control = cameraEntity.addComponent(OrbitControl);

    // create custom cube.
    // use CustomCubeGeometry.create() to create cube geometry.
    const cubeEntity = rootEntity.createChild("Cube");
    const cubeRenderer = cubeEntity.addComponent(GeometryRenderer);
    const cubeGeometry = CustomCubeGeometry.create(engine, 1.0);
    const material = new BlinnPhongMaterial(engine);
    cubeEntity.transform.rotateXYZ(0, 60, 0);
    material.ambientColor = new Color(1, 1, 1, 1);
    cubeRenderer.geometry = cubeGeometry;
    cubeRenderer.material = material;

    // run engine.
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