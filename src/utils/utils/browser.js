/*
 * @Author: WangJiaCheng
 * @Date: 2020-12-17 10:21:38
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2020-12-17 10:23:29
 * @Description: 抹平浏览器兼容性
 */

 // 应用当前版本，chrome and firefox
export const currentVersion = chrome.app ? chrome.app.getDetails().version : browser.runtime.getManifest().version
