/*
 * @Author: WangJiaCheng
 * @Date: 2021-07-15 09:09:51
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:12:21
 * @Description:
 */
/*eslint-disable */
const storageObj = process.env.browser === 'firefox' ? browser : chrome

export default class ChromeLocalStorage {
  getItem(key) {
    return new Promise(resolve => {
      storageObj.storage.sync.get(key, item => {
        resolve(item[key]);
      })
    })
  }

  getAll() {
    return new Promise(resolve => {
      storageObj.storage.sync.get(null, items => {
        resolve(items)
      })
    })
  }

  setItem(key, value) {
    return new Promise(resolve => {
      storageObj.storage.sync.set({ [key]: value }, resolve);
    });
  }

  removeItem(key) {
    return new Promise(resolve => {
      storageObj.storage.sync.remove(key, resolve);
    })
  }

  clear() {
    storageObj.storage.sync.clear(() => {
      const error = chrome.runtime.lastError;
      if (error) {
        console.error(error)
      }
    })
  }

  getBytesInUse(key) {
    return new Promise(resolve => {
      storageObj.storage.sync.getBytesInUse(key, items => {
        resolve(items)
      })
    })
  }
}

