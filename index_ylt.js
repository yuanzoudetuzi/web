/**
 * Created by Administrator on 2017/3/4.
 */
var gateway = [
    {gatewayId: "001", maxOpacity: "123", currentCapacity: "123"},
    {gatewayId: "002", maxOpacity: "345", currentCapacity: "234"},
    {gatewayId: "003", maxOpacity: "567", currentCapacity: "456"},
    {gatewayId: "004", maxOpacity: "789", currentCapacity: "789"},
    {gatewayId: "005", maxOpacity: "123", currentCapacity: "123"},
    {gatewayId: "006", maxOpacity: "345", currentCapacity: "234"},
    {gatewayId: "007", maxOpacity: "567", currentCapacity: "456"},
    {gatewayId: "008", maxOpacity: "789", currentCapacity: "789"}];

window.onload=function() {
    var gate_list = document.getElementById("gateway_list");
    console.log(window.screen.availHeight);
    document.getElementsByClassName("gateway_ini")[0].style.height = window.screen.availHeight + "px";

    for (var i = 0; i < gateway.length; i++) {
        var temp = document.createElement("p");
        temp.textContent = "ID:" + gateway[i].gatewayId + "      Capacity:" + gateway[i].currentCapacity;
        gate_list.appendChild(temp);
        //document.getElementById("gateway_list").innerHTML = "gatewayID:" + gateway[i].gatewayId + "   currentCapacity:" + gateway[i].currentCapacity;
    }
};


