function getCurrentUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        callback(url);
    });
}

chrome.tabs.executeScript({

}, function(){
    let cauProxyUrl = "http://proxy.cau.ac.kr/_Lib_Proxy_Url/";
    getCurrentUrl(function(url){
       chrome.tabs.update({url: cauProxyUrl + url});
    });
});
