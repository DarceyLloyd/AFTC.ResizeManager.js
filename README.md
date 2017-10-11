# ResizeManager.js
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

A JavaScript Resize Manager (add,dispatch,remove,removeAll)

# Usage example
```
ResizeManager.add("center box 1",function(){
	centerAbsoluteItem(document.getElementById("myBox"));
	// centerAbsoluteItem is your positioning function, not got one?
	// you can use mine aka centerAbsoluteItem on
	// https://github.com/DarceyLloyd/aftc.js
});
ResizeManager.dispatch("center box 1");

// Cleaning up
ResizeManager.remove("center box 1");

// Clean everything up
ResizeManager.removeAll();
```

<br>
<br>

## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


<br>
<br>

[![Hire](https://www.allforthecode.co.uk/images/pph_widget.jpg)](http://pph.me/Darcey)

