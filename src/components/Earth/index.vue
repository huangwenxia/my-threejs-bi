<!--//初始化场景-->
<!--Utils.initScene(){-->
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
  import  * as Utils  from './untils/index'
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
  import {cityList,bizLines} from './untils/constant.js'
  import * as TWEEN from "@tweenjs/tween.js"
export default {
  name: 'Earth',
  data(){
    return {
      width: '',
      height: '',
      parentDom: '',
      renderer: '',
      renderer2d: '',
      scene: '',
      camera: '',
      orbitControl: '',
      earth3dObj: '',
      waveMeshArr: '',
      //城市列表
      cityList: cityList,
      //飞线数据
      flyLineData:bizLines,
      //飞线管理
      flyManager: null,
      earthConfig:{
        autoRotate: true,
        zoomChina: false,
        starBackground: false,
        orbitControlConfig:{
          enableZoom:true,
          enableRotate:true
        }
      },
      controlConfig : {
        minZoom: 0.5,
        maxZoom: 2,
        minPolarAngle: 0,
        maxPolarAngle: Math.PI / 2,
      },
    }
  },
  mounted() {
    this.parentDom = document.getElementById('container');
    this.width = this.parentDom.offsetWidth;
    this.height = this.parentDom.offsetHeight;
    this.init();
    this.load();
  },
  methods: {
        init() {
          this.renderer = Utils.initRender(this.width, this.height);
          this.renderer2d = Utils.initRender2D(this.width, this.height);

          this.parentDom.appendChild(this.renderer.domElement);
          this.parentDom.appendChild(this.renderer2d.domElement);

          this.scene = Utils.initScene();
          this.camera = Utils.initCamera(this.width, this.height);
          Utils.initLight(this.scene);

          const orbitControl = new OrbitControls(
              this.camera,
              this.renderer2d.domElement
          );
          orbitControl.minZoom = this.controlConfig.minZoom;
          orbitControl.maxZoom = this.controlConfig.maxZoom;
          orbitControl.minPolarAngle = this.controlConfig.minPolarAngle;
          orbitControl.maxPolarAngle = this.controlConfig.maxPolarAngle;
          orbitControl.enableRotate = this.earthConfig.orbitControlConfig.enableRotate;
          orbitControl.enableZoom = this.earthConfig.orbitControlConfig.enableZoom;

          orbitControl.update();
          this.orbitControl = orbitControl;
        },

        load(){
          this.animate();
          if (this.earthConfig.starBackground) {
            this.scene.add(Utils.starBg.starBackground());
          }
          let { object3D, waveMeshArr, flyManager } = Utils.earth.earth3dObj(
              this.cityList,
              this.flyLineData
          );
          this.earth3dObj = object3D;
          this.waveMeshArr = waveMeshArr;
          this.flyManager = flyManager;
          this.scene.add(this.earth3dObj);
          if (this.earthConfig.autoRotate && this.earthConfig.zoomChina) {
            Utils.rotate.autoRotateEarth(this);
          }
        },
        animate(){
          if (this.waveMeshArr) {
            Utils.cityPoint.cityWaveAnimate(this.waveMeshArr);
          }
          requestAnimationFrame(this.animate);
          //只是自转，不需要缩放到中国
          if (this.earth3dObj) {
            if (this.earthConfig.autoRotate && !this.earthConfig.zoomChina) {
              this.earth3dObj.rotation.y += 0.01;
            }
          }
          this.renderer.render(this.scene, this.camera);
          this.afterAnimate();
        },
        afterAnimate () {
          TWEEN.update();
          //飞线更新，这句话一定要有
          if (this.flyManager != null) {
            this.flyManager.animation();
          }
        }
  },
  beforeDestroy(){
    // window.removeEventListener('resize', this.onWindowResize)
  },
}
</script>

