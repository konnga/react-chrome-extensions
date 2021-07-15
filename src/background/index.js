/* eslint-disable */
// 以单独的浏览器窗口打开
chrome.contextMenus.create({
  title: "单独窗口显示",
  contexts: ["browser_action"],
  onclick: () => {
    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      width: window.navigator.platform === 'MacIntel' ? 400 : 415,
      height: 600,
      top: 200,
      left: 550,
      type: "popup",
    }, (function(e) {
      chrome.windows.update(e.id, {
        focused: true
      })
    }))
  }
})
