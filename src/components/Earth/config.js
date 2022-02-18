/*
 * @Author: ZY
 * @Date: 2021-12-31 13:59:54
 * @LastEditors: ZY
 * @LastEditTime: 2022-01-10 11:58:52
 * @FilePath: /3d-earth/lib/src/config/index.ts
 * @Description: 全局配置设置
 */

//地球半径
export var earthRadius = 14

//世界国家轮廓线段
export const countryLineColor = 0x7aa5a5;//hwx:世界国家轮廓线颜色，可任意修改:red

export const controlConfig = {
    minZoom: 0.5,
    maxZoom: 2,
    minPolarAngle: 0,
    maxPolarAngle: Math.PI / 2,
};

export const GlobalConfig =  {
    earthRadius: 14,//地球半径
}

