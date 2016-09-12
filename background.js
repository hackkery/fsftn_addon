/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "Homepage":
      return "http://www.fsftn.org";
  case "Discuss":
	return "http://discuss.fsftn.org/";
  case "Loomio":
	return "http://plan.fsftn.org";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

