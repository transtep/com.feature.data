$(document).ready(function(){
	$(".content").hide();
	
	/**
	 * data.channel 料道物件方法檢視
	 **/
	$("#getChannelQuantity").click(function(){
		var channelNumber = 5; //自訂參數值
		var dataContent = data.channel.quantity.get(channelNumber);
		
		showGetContent(
			"data.channel.quantity.get(" + channelNumber + ");",
			"Channel Number: " + channelNumber,
			dataContent
		);
	});

	$("#getChannelQuantityList").click(function(){
		var dataContent = data.channel.quantity.list();
		
		showListContent(
			"data.channel.quantity.list();",
			dataContent
		);
	});

	$("#getChannelProduct").click(function(){
		var channelNumber = 2; //自訂參數值
		var dataContent = data.channel.product.get(channelNumber);

		showGetContent(
			"data.channel.product.get(" + channelNumber + ");", 
			"Channel Number: " + channelNumber,
			dataContent
		);
	});

	$("#getChannelProductList").click(function(){
		var dataContent = data.channel.product.list();

		showListContent(
			"data.channel.product.list();", 
			dataContent
		);
	});

	$("#getChannelPrice").click(function(){
		var channelNumber = 3; //自訂參數值
		var dataContent = data.channel.price.get(channelNumber);

		showGetContent(
			"data.channel.price.get(" + channelNumber + ");", 
			"Channel Number: " + channelNumber,
			dataContent
		);
	});

	$("#getChannelPriceList").click(function(){
		var dataContent = data.channel.price.list();

		showListContent(
			"data.channel.price.list();", 
			dataContent
		);
	});

	$("#getChannelStatus").click(function(){
		var channelNumber = 4; //自訂參數值
		var dataContent = data.channel.status.get(channelNumber);

		showGetContent(
			"data.channel.status.get(" + channelNumber + ");",
			"Channel Number: " + channelNumber,
			dataContent
		);
	});

	$("#getChannelStatusList").click(function(){
		var dataContent = data.channel.status.list();

		showListContent(
			"data.channel.status.list();", 
			dataContent
		);
	});

	/**
	 * data.payment 支付物件方法檢視
	 **/
	$("#getPayment").click(function(){
		var paymethod = "Alipay"; //自訂參數值
		var dataContent = data.payment.get(paymethod);

		showGetContent(
			"data.payment.get(" + paymethod + ");",
			"paymethod: " + paymethod,
			dataContent
		);
	});

	$("#getPaymentList").click(function(){
		var dataContent = data.payment.list();

		showListContent(
			"data.payment.list();",
			dataContent
		);
	});

	/**
	 * data.product 商品物件方法檢視
	 **/
	$("#getProduct").click(function(){
		var id = 1; //自訂參數值
		var dataContent = data.product.get(id);

		showGetContent(
			"data.product.get(" + id + ");", 
			"id: " + id, 
			dataContent
		);
	});

	$("#getProductList").click(function(){
		var dataContent = data.product.list();

		showListContent(
			"data.product.list();",
			dataContent
		);
	});

	/**
	 * data.property 機台設置物件方法檢視
	 **/
	$("#getProperty").click(function(){
		var key = "channel_product"; //自訂參數值
		var dataContent = data.property.client.get(key);

		showGetContent(
			"data.property.client.get(" + key + ");",
		 	"key: " + key,
		 	dataContent
		);
	});

	$("#getPropertyList").click(function(){
		var dataContent = data.property.client.list();

		showListContent(
			"data.property.client.list();",
			dataContent
		);
	});
});

//顯示get方法內容
function showGetContent(codeContent, parameterContent, dataContent) {
	jsonPrettyHighlightToId(dataContent);
	$(".content").show();
	$("#code").html("&lt;script> var result = " + codeContent + " &lt;/script&gt;");
	$("#show").show();
	$("#parameter").html(parameterContent);
}

//顯示list方法內容
function showListContent(codeContent, dataContent) {
	jsonPrettyHighlightToId(dataContent);
	$(".content").show();
	$("#code").html("&lt;script> var result = " + codeContent + " &lt;/script&gt;");
	$("#show").hide();
}

//轉換json格式，並排版
function jsonPrettyHighlightToId(jsonobj) {
    
    var json = JSON.stringify(jsonobj, undefined, 2);
    
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'color: darkorange;';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'color: red;';
            } else {
                cls = 'color: green;';
            }
        } else if (/true|false/.test(match)) {
            cls = 'color: blue;';
        } else if (/null/.test(match)) {
            cls = 'color: magenta;';
        }
        return '<span style="' + cls + '">' + match + '</span>';
    });
    
    $("#result").html(json);
}