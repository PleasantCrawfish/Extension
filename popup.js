let value="Howdy partner"
let name
document.getElementById("setLine").onclick=function(){
    chrome.storage.sync.set({"myLine": value},function (){

    })
}
document.getElementById("getLine").onclick=function(){
    chrome.storage.sync.get("myLine",function (data){
        name=data.myLine

    })
}
