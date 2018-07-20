chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.match(/https?:\/\/[A-Za-z0-9]+\.?quip-amazon\.com/) != null) {
    var quipId = tab.url.split('/').pop();
    if (quipId.length == 12 || quipId.length == 13) {
      chrome.tabs.update(tab.id, { "url": "quip://" + quipId });
    }
  }
});
