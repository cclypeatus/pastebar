const url = 'https://pastebin.com/';

let firstLoad = true;

function onCreated() {
  if (firstLoad) {
    console.log('Working');
    firstLoad = false;
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(tab => {
  let { windowId } = tab;
  
  browser.sidebarAction.setPanel({ panel: 'about:blank', windowId });

  browser.sidebarAction.setPanel({ panel: url, windowId });

  browser.sidebarAction.open()
  .then(onCreated, onError);  
})