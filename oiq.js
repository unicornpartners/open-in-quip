chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.match(/https:\/\/(corp\.)?quip-amazon\.com/) != null) {
    var quipId = tab.url.split('/').pop();
    chrome.tabs.update(tab.id, { "url": "quip://" + quipId });
  }
  else console.log("Not a Quip Amazon link");
});
