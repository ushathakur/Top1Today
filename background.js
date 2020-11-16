console.log("background running 1");
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    console.log(tab);
    var details = JSON.stringify(tab);
    
    
}

