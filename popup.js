function click(){
chrome.tabs.query({ active: true }, function (tab) {
    var tabUrl = tab[0].url;
   
    
    document.getElementById('demo').textContent =`your Top1Today website is ${tabUrl} Time Spent: 3 Hrs` ;
    return tabUrl;
});
}
document.getElementById('showUrl').onclick = click;
