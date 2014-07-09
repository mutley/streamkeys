chrome.runtime.onMessage.addListener(function(request, sender, response) {
  alert(request);
  console.log(request);
});