/// <reference types="npm:@types/chrome" />

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;

    const targetTab = tabs[0];

    if (targetTab !== undefined) {
      chrome.readingList.addEntry(
        {
          title: targetTab.title ?? "",
          url: targetTab.url ?? "",
          hasBeenRead: false,
        },
      );
    }
  });
});
