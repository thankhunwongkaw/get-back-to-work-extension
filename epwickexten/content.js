/* var last = "https://www.google.com";

function newtab(tab){
    if (String(tab) !== "https://www.google.com"){
        chrome.tabs.update(tab, { active: true });
    }else{
        chrome.tabs.create({'url':tab});
    }
};

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        if (tab.url.includes("facebook.com")) {
            setTimeout(function(){
                newtab(last);
            }, 100);
        }else{
            last = tab.url;
        }
        }
)}); */
//idk why this doesnt work


var last = "https://www.google.com";

function newtab(url) {
    if (url !== "https://www.google.com") {
        chrome.tabs.update({ url: url, active: true });
    } else {
        chrome.tabs.create({ url: url });
    }
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        if (tab.url.includes("facebook.com")) {
            setTimeout(function() {
                newtab(last);
            }, 100);
        } else {
            last = tab.url;
        }
    });
});
