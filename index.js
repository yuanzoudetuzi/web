var nodeItem = Vue.component('node-item', {
    template: "#nodeItem",
    props: ['node_id', 'water', 'power']
});

var gatewayItem = Vue.component('gateway-item', {
    template: "#gatewayItem",
    props: ['gateway_id', 'max_opacity', 'current_opacity']
});

var nodeDetail = Vue.component('node-detail', {
    template: "#nodeDetail",
    props: ['node_id']
});
/*$(document).ready(function(){
    $("#gateway_list").html("Here is the message");
});*/

window.onload = function () {
   // document.getElementById("gateway_list").innerHTML = "Here is the message";
};


var index = new Vue({
    el: "#index",
    data: {
        gatewayId: "",
        nodeId: "",
        nodeDetailStatus: false,
        nodeListStatus: true,
        gatewayListStatus: true,
        gatewayList: [],
        nodeList: [],
        searchTitle: "",
        detailNodeId: "",
    },
    methods: {
        preciseSearch: function () {
            if (this.gatewayId != ""){
                if (this.nodeId != ""){
                    this.setNodeResult();
                }
                else {
                    this.setGateWayResult();
                }
            }
            else if (this.nodeId != ""){
                this.setNodeResult();
            }
            else {
                alert("Input Error!");
            }
        },
        vagueSearch: function () {
            if (this.gatewayId != ""){
                if (this.nodeId != ""){
                    this.setNodeList();
                }
                else {
                    this.setGatewayList();
                }
            }
            else if (this.nodeId != ""){
                this.setNodeList();
            }
            else {
                alert("Input Error!");
            }
        },
        clearSearch: function () {
            this.nodeDetailStatus = false;
            this.searchTitle = "";
            this.nodeList = [];
            this.gatewayList = [];
        },
        setNodeResult: function () {
            this.nodeDetailStatus = false;
            this.nodeListStatus = true;
            this.gatewayListStatus = true;
            this.nodeList = [
                {nodeId: "001", water: "123", power: "123"}
            ];
            this.gatewayList = [];
            this.searchTitle = "节点列表";
        },
        setNodeList: function () {
            this.nodeDetailStatus = false;
            this.nodeListStatus = true;
            this.gatewayListStatus = true;
            this.nodeList = [
                {nodeId: "001", water: "123", power: "123"},
                {nodeId: "002", water: "345", power: "234"},
                {nodeId: "003", water: "567", power: "456"},
                {nodeId: "004", water: "789", power: "789"},
                {nodeId: "005", water: "123", power: "123"},
                {nodeId: "006", water: "345", power: "234"},
                {nodeId: "007", water: "567", power: "456"},
                {nodeId: "008", water: "789", power: "789"},
                {nodeId: "009", water: "123", power: "123"},
                {nodeId: "010", water: "345", power: "234"},
                {nodeId: "011", water: "567", power: "456"},
                {nodeId: "012", water: "789", power: "789"},
                {nodeId: "013", water: "123", power: "123"},
                {nodeId: "014", water: "345", power: "234"},
                {nodeId: "015", water: "567", power: "456"},
                {nodeId: "016", water: "789", power: "789"},
            ];
            this.gatewayList = [];
            this.searchTitle = "节点列表";
        },
        setGateWayResult: function () {
            this.nodeDetailStatus = false;
            this.nodeListStatus = true;
            this.gatewayListStatus = true;
            this.nodeList = [];
            this.gatewayList = [
                {gatewayId: "001", maxOpacity: "123", currentOpacity: "123"}
            ];
            this.searchTitle = "网关列表";
        },
        setGatewayList: function () {
            this.nodeDetailStatus = false;
            this.nodeListStatus = true;
            this.gatewayListStatus = true;
            this.nodeList = [];
            this.gatewayList = [
                {gatewayId: "001", maxOpacity: "123", currentOpacity: "123"},
                {gatewayId: "002", maxOpacity: "345", currentOpacity: "234"},
                {gatewayId: "003", maxOpacity: "567", currentOpacity: "456"},
                {gatewayId: "004", maxOpacity: "789", currentOpacity: "789"},
                {gatewayId: "005", maxOpacity: "123", currentOpacity: "123"},
                {gatewayId: "006", maxOpacity: "345", currentOpacity: "234"},
                {gatewayId: "007", maxOpacity: "567", currentOpacity: "456"},
                {gatewayId: "008", maxOpacity: "789", currentOpacity: "789"},
            ];
            this.searchTitle = "网关列表";
        },
        setNodeDetailResult: function () {
            this.nodeDetailStatus = true;
            this.nodeListStatus = false;
            this.gatewayListStatus = false;
            this.nodeList = [];
            this.gatewayList = [];
            this.searchTitle = "节点面板";
        }
    }
});
