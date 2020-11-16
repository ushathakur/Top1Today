function click(){
chrome.tabs.query({ active: true }, function (tab) {
    var tabUrl = tab[0].url;
    
    document.getElementById('demo').textContent =`your current website is ${tabUrl}` ;
    return tabUrl;
});
}
document.getElementById('showUrl').onclick = click;
