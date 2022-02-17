<!--//初始化场景-->
<!--initScene(){-->
<!--//hwx:场景里包含了：网格模型（即集合体、材质）+光照-->
<!--},-->
<!--//初始化相机-->
<!--initCamera(){-->
<!--//hwx:相机里包含了：位置+视线方向+投影方式(投射投影PerspectiveCamera、正射投影OrthographicCamera)-->
<!--},-->
<!--//初始化渲染器-->
<!--initRenderer(){-->
<!--//hwx:相机里包含了：渲染器创建(WebGLRenderer())+开始渲染.render(scene,camera)+domElement属性canvas对象)-->
<!--},-->
<template>
  <div id="container" style="width: 100vw; height: 100vh;background-color: black;"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js"
import mapPoints from "../../constant/mapPoints.js";
export default {
  name: 'Earth',
  data(){
    return {
        globel:{
            width:2000,
            height:961,
            radius:100,// 球体半径
            segments:64,// 球体面数，数量越大越光滑，性能消耗越大
        },
        container: {//容器
          dom:null,
          width: '',//容器画布宽度
          height: '',//容器画布高度
        },
        glRender:null, // webgl渲染器
        camera:null, // 摄像机
        earthMesh:null, // 地球的Mesh
        scene:null, // 场景，一个大容器，可以理解为html中的body
        meshGroup:null, // 所有mesh的容器，用于收集所有网格模型
        controls:null, // 轨道控制器，实现整体场景的控制

    }
  },
  mounted() {
    this.initThree();
    this.screenRender();
    // window.addEventListener('resize', this.onWindowResize,false)
  },
  methods: {
    //   /**
    //  * 场景自适应
    //  * @param renderer
    //  */
    //   resizeRendererToDisplaySize() {
    //     // 兼容视网膜屏
    //     const pixelRatio = window.devicePixelRatio;
    //     const width = (window.document.offsetWidth * pixelRatio) | 0;
    //     const height = (window.document.offsetWidth.offsetHeight * pixelRatio) | 0;
    //
    //     const needResize = this.canvas.width !== width ||this.canvas.height !== height;
    //     if (needResize) {
    //       this.glRender.setSize(width, height, false);
    //     }
    //     return needResize;
    // },
    /**
     * 2d的地图坐标转为球体3d坐标
     * @param x
     * @param y
     */
       convertFlatCoordsToSphereCoords(x, y) {
          // Calculate the relative 3d coordinates using Mercator projection relative to the radius of the globe.
          // Convert latitude and longitude on the 90/180 degree axis.
          let latitude = ((x - this.globel.width) / this.globel.width) * -180;
          let longitude = ((y - this.globel.height) / this.globel.height) * -90;
          latitude = (latitude * Math.PI) / 180; //(latitude / 180) * Math.PI
          longitude = (longitude * Math.PI) / 180; //(longitude / 180) * Math.PI // Calculate the projected starting point

          const radius = Math.cos(longitude) * this.globel.radius;
          const targetX = Math.cos(latitude) * radius;
          const targetY = Math.sin(longitude) * this.globel.radius;
          const targetZ = Math.sin(latitude) * radius;
          return {
            x: targetX,
            y: targetY,
            z: targetZ,
      }
    },
    createMapPoints() {
          // 点的基本材质.
          const material = new THREE.MeshBasicMaterial({
            color: "#AAA",
          });

          const sphere = [];
          for (let point of mapPoints.points) {
            // 循环遍历所有点将2维坐标映射到3维坐标
            const pos = this.convertFlatCoordsToSphereCoords(point.x, point.y);
            if (pos.x && pos.y && pos.z) {
              // 生成点阵
              const pingGeometry = new THREE.SphereGeometry(0.4, 5, 5);
              pingGeometry.translate(pos.x, pos.y, pos.z);
              sphere.push(pingGeometry);
            }
          }
          // 合并所有点阵生成一个mesh对象
          const earthMapPoints = new THREE.Mesh(
              BufferGeometryUtils.mergeBufferGeometries(sphere),
              material
          );
          this.meshGroup.add(earthMapPoints);
    },
    initEarthMesh(){
        // 创建一个球体
        const geometry = new THREE.SphereGeometry(
            this.globel.radius,
            this.globel.segments,
            this.globel.segments
        );
        // 创建球体材质
        const material = new THREE.MeshBasicMaterial({
          transparent: true, // 设置是否透明
          opacity: 0.5, // 透明度
          color: 0x000000, // 颜色
        });

        this.earthMesh = new THREE.Mesh(geometry, material);
        this.meshGroup.add(this.earthMesh);
        this.createMapPoints();

    },
    // 初始轨道控制器
    initControls(){
      this.controls = new OrbitControls(this.camera, this.glRender.domElement );
      this.controls.target.set(0, 0, 0);
      // this.controls.enableDamping = true;
      // this.controls.enableZoom = true;
      // this.controls.autoRotate = false;
      // this.controls.autoRotateSpeed = 2;
      // this.controls.enablePan = true;
    },
    // 初始化光照
    initLight(){
      const ambientLight = new THREE.AmbientLight( 0xcccccc, 1.1 );
      this.scene.add( ambientLight );
      var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.2 );
      directionalLight.position.set( 1, 0.1, 0 ).normalize();
      var directionalLight2 = new THREE.DirectionalLight( 0xff2ffff, 0.2 );
      directionalLight2.position.set( 1, 0.1, 0.1 ).normalize();
      this.scene.add( directionalLight );
      this.scene.add( directionalLight2 );
      var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.2 );
      hemiLight.position.set( 0, 1, 0 );
      this.scene.add( hemiLight );
      directionalLight = new THREE.DirectionalLight( 0xffffff );
      directionalLight.position.set( 1, 500, - 20 );
      directionalLight.castShadow = true;
      directionalLight.shadow.camera.top = 18;
      directionalLight.shadow.camera.bottom = - 10;
      directionalLight.shadow.camera.left = - 52;
      directionalLight.shadow.camera.right = 12;
      this.scene.add(directionalLight);
    },
    //初始化场景
    initScene(){//hwx:场景里包含了：网格模型（即集合体、材质）+光照
      this.meshGroup = new THREE.Group();// 创建网络模型集合
      this.scene = new THREE.Scene();// 创建场景
      this.scene.fog = new THREE.Fog( 0x020924, 200, 1000 );
      this.scene.background = new THREE.Color('#eee')
      window.scene = this.scene;
      this.initEarthMesh();
      this.scene.add(this.meshGroup);
    },
    //初始化相机
    initCamera(){
      //hwx:相机里包含了：位置+视线方向+投影方式(投射投影PerspectiveCamera、正射投影OrthographicCamera)
      const fov = 45;
      const aspect = this.container.width / this.container.height;
      const near = 1;
      const far = 4000;
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.z = 400;
    },
    //初始化渲染器
    initRenderer(){
      //hwx:相机里包含了：渲染器创建(WebGLRenderer())+开始渲染.render(scene,camera)+domElement属性canvas对象)
      this.container.dom = document.getElementById("container");
      this.container.width = this.container.dom.offsetWidth;
      this.container.height = this.container.dom.offsetHeight;
      this.glRender = new THREE.WebGLRenderer( {  antialias: true, alpha: true} );// 创建渲染器
      this.glRender.shadowMap.enabled = false;
      this.glRender.shadowMap.type = THREE.PCFShadowMap;
      // this.glRender.setPixelRatio( window.devicePixelRatio );
      this.glRender.setSize( this.container.width / this.container.height);
      this.container.dom.appendChild(this.glRender.domElement);
    },

    initThree() {
        this.initRenderer();
        this.initScene();
        this.initCamera();
        this.initLight();
        this.initControls();
    },
    screenRender() {
        // 更新
        // if (resizeRendererToDisplaySize()) {
        //   const canvas = this.glRender.domElement;
        //   this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        //   this.camera.updateProjectionMatrix();
        // }

      // const canvas = this.glRender.domElement;
      // this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      // this.camera.updateProjectionMatrix();

        this.meshGroup.rotation.y += 0.001;
        this.glRender.render(this.scene, this.camera);
        this.glRender.setSize(this.container.width,this.container.height)
        // this.controls.update();
        requestAnimationFrame(this.screenRender);
    },
    // animate() {
    //      let self = this;
    //     window.requestAnimationFrame( () => {
    //       if (self.controls) self.controls.update();
    //       this.glRender.render(this.scene, this.camera);
    //       self.animate();
    //     });
    // },
    /**
     * 窗口变动
     **/
    // onWindowResize() {
    //   this.canvas = document.getElementById("canvas");
    //   this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    //   this.camera.updateProjectionMatrix();
    //   this.glRender.setSize( this.canvas.clientWidth, this.canvas.clientHeight,false);
    //   this.renders();
    // },
    renders() {
      // this.glRender.clear();
      this.glRender.render( this.scene, this.camera);
    },
  },
  beforeDestroy(){
    // window.removeEventListener('resize', this.onWindowResize)
  },
}
</script>

