let saver

chrome.storage.sync.get("list",function (data){
    saver=data.list
    document.getElementById('list').value = saver
})

chrome.storage.sync.get("resume",function (data){
    saver=data.resume
    document.getElementById('resume').value = saver
})

chrome.storage.sync.get("selector1",function (data){
    saver=data.selector1
    document.getElementById('selector1').value = saver
})
chrome.storage.sync.get("selector2",function (data){
    saver=data.selector2
    document.getElementById('selector2').value = saver
})
chrome.storage.sync.get("selector3",function (data){
    saver=data.selector3
    document.getElementById('selector3').value = saver
})
chrome.storage.sync.get("selector4",function (data){
    saver=data.selector4
    document.getElementById('selector4').value = saver
})
chrome.storage.sync.get("selector5",function (data){
    saver=data.selector5
    document.getElementById('selector5').value = saver
})
chrome.storage.sync.get("selector6",function (data){
    saver=data.selector6
    document.getElementById('selector6').value = saver
})
chrome.storage.sync.get("selector7",function (data){
    saver=data.selector7
    document.getElementById('selector7').value = saver
})
chrome.storage.sync.get("selector8",function (data){
    saver=data.selector8
    document.getElementById('selector8').value = saver
})
chrome.storage.sync.get("selector9",function (data){
    saver=data.selector9
    document.getElementById('selector9').value = saver
})
chrome.storage.sync.get("selector10",function (data){
    saver=data.selector10
    document.getElementById('selector10').value = saver
})
chrome.storage.sync.get("selector11",function (data){
    saver=data.selector11
    document.getElementById('selector11').value = saver
})
chrome.storage.sync.get("selector12",function (data){
    saver=data.selector12
    document.getElementById('selector12').value = saver
})

document.getElementById("save").onclick=function(){
    let list=(document.getElementById('list')).value
    let value1=(document.getElementById('selector1')).value
    let value2=(document.getElementById('selector2')).value
    let value3=(document.getElementById('selector3')).value
    let value4=(document.getElementById('selector4')).value
    let value5=(document.getElementById('selector5')).value
    let value6=(document.getElementById('selector6')).value
    let value7=(document.getElementById('selector7')).value
    let value8=(document.getElementById('selector8')).value
    let value9=(document.getElementById('selector9')).value
    let value10=(document.getElementById('selector10')).value
    let value11=(document.getElementById('selector11')).value
    let value12=(document.getElementById('selector12')).value
    chrome.storage.sync.set({"selector1": value1})
    chrome.storage.sync.set({"selector2": value2})
    chrome.storage.sync.set({"selector3": value3})
    chrome.storage.sync.set({"selector4": value4})
    chrome.storage.sync.set({"selector5": value5})
    chrome.storage.sync.set({"selector6": value6})
    chrome.storage.sync.set({"selector7": value7})
    chrome.storage.sync.set({"selector8": value8})
    chrome.storage.sync.set({"selector9": value9})
    chrome.storage.sync.set({"selector10": value10})
    chrome.storage.sync.set({"selector11": value11})
    chrome.storage.sync.set({"selector12": value12})
    chrome.storage.sync.set({"list": list})
}