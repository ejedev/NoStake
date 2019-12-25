chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
		streams = document.querySelectorAll('div [style^="order:"]')
		var banlist = ['stake', 'debt', 'zebt', 'chuck', 'staking', 'loan', 'loans', "casino"]
		for (var x=0;x<streams.length;x++) {
			staker = false
			for (var y=0;y<banlist.length;y++) {
				if(streams[x].innerText.toLowerCase().includes(banlist[y])) {
					staker = true
				}
			}	
			if (staker == true) {
				streams[x].remove()
			}
		}
    }
  }
);
