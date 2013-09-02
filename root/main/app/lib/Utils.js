Ext.define('FV.lib.Utils', {
	singleton: true,
	downloadURL: function(url) {
		var iframe = document.getElementById("hiddenDownloader");
		if (iframe === null)
		{
			iframe = document.createElement('iframe');
			iframe.id = "hiddenDownloader";
			iframe.style.display = 'none';
			iframe.src = "about:blank";
			document.body.appendChild(iframe);
		}
		iframe.src = url;
	},
	printUrl:function(url){
		var iframe = document.getElementById("hiddenPrinter");
		if(!Ext.isArray(url)){
			url = [url];
		}
		if (iframe === null)
		{
			iframe = document.createElement('iframe');
			iframe.id = "hiddenPrinter";
			iframe.style.display = 'none';
			iframe.src = "about:blank";
			document.body.appendChild(iframe);

			// define progress listener object
/*			var progressListener = {
			   stateIsRequest:false,
			   QueryInterface : function(aIID) {
				 if (aIID.equals(Components.interfaces.nsIWebProgressListener) ||
					 aIID.equals(Components.interfaces.nsISupportsWeakReference) ||
					 aIID.equals(Components.interfaces.nsISupports))
					 return this;
				 throw Components.results.NS_NOINTERFACE;
			   },
			   
			   onStateChange : function(aWebProgress, aRequest, aStateFlags, aStatus) {
				 console.log('State Change -> State Flags:'+aStateFlags+' Status:'+aStatus);
				 return 0;
			   },
			   
			   onLocationChange : function(aWebProgress, aRequest, aLocation) {
				 console.log('Location Change -> Location :'+aLocation);
				 return 0;
			   },
			   
			   onProgressChange : function(aWebProgress, aRequest,
				 aCurSelfProgress, aMaxSelfProgress,
				 aCurTotalProgress, aMaxTotalProgress){
					console.log('Self Current:'+aCurSelfProgress+' Self Max:'+aMaxSelfProgress
							 +' Total Current:'+aCurTotalProgress+' Total Max:'+aMaxTotalProgress);
			   },
			   
			   onStatusChange : function(aWebProgress, aRequest, aStateFlags, aStatus) {
				 console.log('Status Change -> State Flags:'+aStateFlags+' Status:'+aStatus);
			   },
			   onSecurityChange : function(aWebProgress, aRequest, aState){}
			   //    onLinkIconAvailable : function(a){}
			};
			iframe.pglsn = progressListener;
*/
			iframe.onload=function(){
				// set portrait orientation
				jsPrintSetup.setOption('orientation', jsPrintSetup.kPortraitOrientation);// kPortraitOrientation:纵向打印,kLandscapeOrientation横向打印
				// set top margins in millimeters
				jsPrintSetup.setOption('marginTop', 0);
				jsPrintSetup.setOption('marginBottom', 0);
				jsPrintSetup.setOption('marginLeft', 0);
				jsPrintSetup.setOption('marginRight', 0);
				// set page header
				jsPrintSetup.setOption('headerStrLeft', '');
				jsPrintSetup.setOption('headerStrCenter', '');
				jsPrintSetup.setOption('headerStrRight', '');//&PT
				// set empty page footer
				jsPrintSetup.setOption('footerStrLeft', '');
				jsPrintSetup.setOption('footerStrCenter', '');
				jsPrintSetup.setOption('footerStrRight', '');

				jsPrintSetup.setOption('scaling', 100);
				jsPrintSetup.setOption('shrinkToFit', true);

				jsPrintSetup.setOption('printBGColors', true);
				jsPrintSetup.setOption('printBGImages', true);

				// sets print progress object
				// jsPrintSetup.setPrintProgressListener(iframe.pglsn);
				// Suppress print dialog
				jsPrintSetup.setSilentPrint(true);
				// Do Print
				//jsPrintSetup.print(); //打印当前窗口
				jsPrintSetup.printWindow(iframe.contentWindow); // 打印指定窗口
				// Restore print dialog
				jsPrintSetup.setSilentPrint(false);
			}
		}
		{
			var s = "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><title>档案打印...</title></head><body>";
			for(var i=0,n=url.length;i<n;i++){
				s += '<img src="'+window.location.origin+url[i]+'" style="width:100%"/><p style="page-break-after:always;"></p>';
			}
			s += '</body></html>';
			//console.log(s);
			iframe.src = 'data:text/html;charset=utf-8,' + s;//escape(s);
		}
		return;
	}
});
