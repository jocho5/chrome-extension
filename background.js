chrome.declarativeNetRequest.onRequest.addListener(
    function(details) {return {cancel: true}},
    {urls: ["*://.kevel.com/*"]},
    ["blocking"]
)