import {
    WebGLRenderer,
    PCFShadowMap,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    PointLight,
    HemisphereLight,
    AmbientLight,
} from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import * as starBg from "./starBg";
import * as cityPoint from "./cityPoint";
import * as earth from "./earth";
import * as rotate from "./autoRotateEarth";
export {
    starBg,
    cityPoint,
    earth,
    rotate,
}
export const initLight = (scene)=>{
    /**
     * 光源设置
     */
        // 平行光1
    var directionalLight = new DirectionalLight(0x80b5ff, 1);
    directionalLight.position.set(-250, 250, 100);
    scene.add(directionalLight);
    directionalLight = new DirectionalLight(0x80d4ff, 1);
    directionalLight.position.set(-250, 250, 100);
    scene.add(directionalLight);
    directionalLight = new DirectionalLight(0x80b5ff, 1);
    directionalLight.position.set(-250, 250, 100);
    scene.add(directionalLight);
    directionalLight = new DirectionalLight(0xc2ffff, 1);
    directionalLight.position.set(-250, 250, 100);
    scene.add(directionalLight);
    // 点光1
    var pointLight = new PointLight(0x80d4ff, 1);
    pointLight.position.set(-250, 250, 100);
    scene.add(pointLight);

    // 半球光1
    var hemisphereLight = new HemisphereLight(0xffffff, 0x3d6399, 1);
    hemisphereLight.position.set(-250, 250, 100);
    scene.add(hemisphereLight);
    hemisphereLight = new HemisphereLight(0xffffff, 0x3d6399, 1);
    hemisphereLight.position.set(-250, 250, 100);
    scene.add(hemisphereLight);
    //环境光
    var ambient = new AmbientLight(0x002bff, 0.8);
    scene.add(ambient);
}

export const initCamera = (width,height)=>{
    let aspect = width / height;
    let camera = new PerspectiveCamera(45, aspect, 0.1, 1000);
    camera.position.set(30, 26, 10);
    return camera
}

export const initScene = ()=>{
    return new Scene();
}
export const initRender2D = (width,height)=>{
    const renderer2d = new CSS2DRenderer();
    renderer2d.setSize(width,height)
    renderer2d.domElement.style.position = "absolute";
    renderer2d.domElement.style.top = "0px";
    renderer2d.domElement.tabIndex = 0;
    renderer2d.domElement.className = "coreInnerRenderer2d";

    return renderer2d
}

export const initRender = (width,height)=>{
    let renderer = new WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.shadowMap.enabled = false;
    renderer.shadowMap.type = PCFShadowMap;
    renderer.setSize(width,height)

    return renderer
}

/*
 * @Author: ZY
 * @Date: 2022-01-04 14:50:39
 * @LastEditors: ZY
 * @LastEditTime: 2022-01-04 15:06:48
 * @FilePath: /3d-earth/lib/src/tools/index.ts
 * @Description: 工具方法
 */

export const lon2xyz = (radius, longitude, latitude) => {
    var lon = (longitude * Math.PI) / 180; //转弧度值
    var lat = (latitude * Math.PI) / 180; //转弧度值
    lon = -lon; // three.js坐标系z坐标轴对应经度-90度，而不是90度

    // 经纬度坐标转球面坐标计算公式
    var x = radius * Math.cos(lat) * Math.cos(lon);
    var y = radius * Math.sin(lat);
    var z = radius * Math.cos(lat) * Math.sin(lon);
    // 返回球面坐标
    return {
        x: x,
        y: y,
        z: z,
    };
};


