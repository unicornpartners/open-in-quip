chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.match(/https:\/\/(corp\.)?quip-amazon\.com/) != null) {
    var quipId = tab.url.split('/').pop();
    if (quipId.length == 12 || quipId.length == 13) {
      chrome.tabs.update(tab.id, { "url": "quip://" + quipId });
    }
  }
});
