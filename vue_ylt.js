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

var commandItem = Vue.component('command-item',{
    template: "#commandItem",
    props: ['node_id','command_cid','command_content']
});
/*$(document).ready(function(){
 $("#gateway_list").html("Here is the message");
 });*/



var index = new Vue({
    el: "#index",
    data: {
        gatewayId: "",
        nodeId: "",
        nodeDetailStatus: false,
        nodeListStatus: false,
        commandListStatus: false,
        gatewayListStatus: true,
        gatewayList: [],
        searchTitle: "Node List",
        detailNodeId: "",
        nodeList: [],
        commandList: [],
        init:true           //控制厨师界面是否显示

    },
    methods: {

        initNodeList: function () {
            var h;
            if (this.init) {
                h = window.setInterval(function () {
                    var ss = -Math.floor(Math.random()*100+3);
                    index.nodeList = [
                        {nodeId: "001", water: "123"-ss, power: "123"},
                        {nodeId: "002", water: "345"-ss, power: "234"},
                        {nodeId: "003", water: "567"-ss, power: "456"},
                        {nodeId: "004", water: "789"-ss, power: "789"},
                        {nodeId: "005", water: "123"-ss, power: "123"},
                        {nodeId: "006", water: "345"-ss, power: "234"},
                        {nodeId: "007", water: "567"-ss, power: "456"},
                        {nodeId: "008", water: "789"-ss, power: "789"},
                        {nodeId: "009", water: "123"-ss, power: "123"},
                        {nodeId: "010", water: "345"-ss, power: "234"},
                        {nodeId: "011", water: "567"-ss, power: "456"},
                        {nodeId: "012", water: "789"-ss, power: "789"},
                        {nodeId: "013", water: "123"-ss, power: "123"},
                        {nodeId: "014", water: "345"-ss, power: "234"},
                        {nodeId: "015", water: "567"-ss, power: "456"},
                        {nodeId: "016", water: "789"-ss, power: "789"}];
                },2000);
            } else {
                //window.clearInterval(h);
            }


        },

        searchGateway_Button: function () {
            this.init = false;
            this.nodeList=[];
            this.searchTitle="";
            document.getElementById("search_gateway").style.display = "block";
            document.getElementById("search_operator").style.display = "block";
            document.getElementById("search_node").style.display = "none";
            this.clearSearch();
        },

        searchNode_Button: function () {
            this.init = false;
            this.nodeList=[];
            this.searchTitle="";
            document.getElementById("search_node").style.display = "block";
            document.getElementById("search_operator").style.display = "block";
            document.getElementById("search_gateway").style.display = "none";
            this.clearSearch();
        },

        searchCommand_Button: function () {
            this.init = false;
            this.nodeList = [];
            this.searchTitle="Recent Command List"
            document.getElementById("search_node").style.display = "none";
            document.getElementById("search_operator").style.display = "none";
            document.getElementById("search_gateway").style.display = "none";
            this.setCommandList();
        },

        preciseSearch: function () {
            this.init = false;
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
            this.init = false;
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
            this.init = false;
            this.nodeDetailStatus = false;
            this.searchTitle = "";
            this.nodeList = [];
            this.gatewayList = [];
        },
        setNodeResult: function () {
            this.init = false;
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
            this.init = false;
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
            this.init = false;
            this.nodeDetailStatus = false;
            this.nodeListStatus = false;          //改
            this.gatewayListStatus = true;
            this.nodeList = [];
            this.gatewayList = [
                {gatewayId: "001", maxOpacity: "123", currentOpacity: "123"}
            ];
            this.searchTitle = "网关列表";
        },
        setGatewayList: function () {
            this.init = false;
            this.nodeDetailStatus = false;
            this.nodeListStatus = false;           //改
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
            this.init = false;
            this.nodeDetailStatus = true;
            this.nodeListStatus = false;
            this.gatewayListStatus = false;
            this.nodeList = [];
            this.gatewayList = [];
            this.searchTitle = "节点面板";
        },
        setCommandList: function () {
            this.init = false;
            this.nodeDetailStatus = false;
            this.nodeListStatus = false;
            this.gatewayListStatus = false;
            this.commandListStatus = true;
            this.searchTitle = "Command List";
            this.commandList = [
                {nodeId: "001", commandCID: "0x02", commandContent: "0x07"},
                {nodeId: "002", commandCID: "0x03", commandContent: "1"},
                {nodeId: "003", commandCID: "0x04", commandContent: "0x07"},
                {nodeId: "004", commandCID: "0x05", commandContent: "0x20"},
                {nodeId: "005", commandCID: "0x02", commandContent: "0x07"},
                {nodeId: "006", commandCID: "0x03", commandContent: "1"},
                {nodeId: "007", commandCID: "0x04", commandContent: "0x07"}

            ];

        },

        sendCommand_Button : function () {

        }
    }
});


var ss = -Math.floor(Math.random()*100+3);

/*调用初始函数*/
window.onload = function () {
   // index.initNodeList();
};

/*window.setInterval(function () {
    var ss = -Math.floor(Math.random()*100+3);
    if ( index.init ) {
        index.nodeList = [
            {nodeId: "001", water: "123"-ss, power: "123"},
            {nodeId: "002", water: "345"-ss, power: "234"},
            {nodeId: "003", water: "567"-ss, power: "456"},
            {nodeId: "004", water: "789"-ss, power: "789"},
            {nodeId: "005", water: "123"-ss, power: "123"},
            {nodeId: "006", water: "345"-ss, power: "234"},
            {nodeId: "007", water: "567"-ss, power: "456"},
            {nodeId: "008", water: "789"-ss, power: "789"},
            {nodeId: "009", water: "123"-ss, power: "123"},
            {nodeId: "010", water: "345"-ss, power: "234"},
            {nodeId: "011", water: "567"-ss, power: "456"},
            {nodeId: "012", water: "789"-ss, power: "789"},
            {nodeId: "013", water: "123"-ss, power: "123"},
            {nodeId: "014", water: "345"-ss, power: "234"},
            {nodeId: "015", water: "567"-ss, power: "456"},
            {nodeId: "016", water: "789"-ss, power: "789"}];
    } else {
        index.nodeList = [];
    }

}, 2000);*/
/**
 * Created by Administrator on 2017/3/4.
 */
console.log(1 + '1');
console.log(1 - '1');
console.log(index.init);
