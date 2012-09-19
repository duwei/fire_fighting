Ext.define('FV.lib.Utils', {
	singleton: true,
	downloadURL: function(url) {
		var iframe = document.getElementById("hiddenDownloader");
		if (iframe === null)
		{
			iframe = document.createElement('iframe');  
			iframe.id = "hiddenDownloader";
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
		}
		iframe.src = url;   
	}
});
