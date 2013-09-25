// Written by Arjun Mathai, Improvi Technologies Pvt Ltd, Bangalore
$.jLogger = function() {}

var jLoggerSettings = {
	url: '/common/processClientLogs.php'
	,dataType: 'json'
	,data: {
		errNo: null
		,errMsg: null
		,errDump: null
	}
}
// Initializes plugin
$.jLogger.init = function(options)
{
	jLoggerSettings = $.extend(jLoggerSettings, options);
}

// Logs data
$.jLogger.log = function(data)
{
	data.errDump = JSON.stringify(data.errDump);
	jLoggerSettings.data = $.extend(jLoggerSettings.data, data);
	
	$.ajax({
		url: jLoggerSettings.url
		,dataType: jLoggerSettings.dataType
		,data: jLoggerSettings.data
		,success: function (resp) {
			if(resp.status == 'ok') return true;
			else return false;
		}
		,error: function (msg) {
			console.log('jLogger Error::' + msg);
		}
	});
};
