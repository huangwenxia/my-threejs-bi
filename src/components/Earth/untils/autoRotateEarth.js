/**
 * @description: 地球自动旋转
 * @param {*}
 * @return {*}
 */
import * as TWEEN from "@tweenjs/tween.js"
export const autoRotateEarth = (that) =>{
    const startRotateY = (3.15 * Math.PI) / 2;
    const startZoom = -18;
    const endRotateY = 3.3 * Math.PI;
    const endZoom = 4;

    // var that = this;
    //旋转地球动画
    var rotateEarthStep = new TWEEN.Tween({
        rotateY: startRotateY,
        zoom: startZoom,
    }).to({ rotateY: endRotateY, zoom: endZoom }, 36000) //.to({rotateY: endRotateY, zoom: endZoom}, 10000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function (object) {
            if (that.earth3dObj) {
                that.earth3dObj.rotation.set(0, object.rotateY, 0);
            }
            that.orbitControl.zoom0 = object.zoom < 1 ? 1 : object.zoom;
            that.orbitControl.reset();
        });

    var rotateEarthStepBack = new TWEEN.Tween({
        rotateY: endRotateY,
        zoom: endZoom,
    })
        .to({ rotateY: 3.15 * Math.PI * 2, zoom: startZoom }, 36000) //.to({rotateY: endRotateY, zoom: endZoom}, 10000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function (object) {
            if (that.earth3dObj) {
                that.earth3dObj.rotation.set(0, object.rotateY, 0);
            }
            that.orbitControl.zoom0 = object.zoom < 1 ? 1 : object.zoom;
            that.orbitControl.reset();
        });

    rotateEarthStep.chain(rotateEarthStepBack);
    rotateEarthStepBack.chain(rotateEarthStep);

    rotateEarthStep.start();
}