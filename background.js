// Expression régulière pour détecter exactement "LoginSuccess" (insensible à la casse)
const loginSuccessRegex = /loginsuccess/i;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.storage.local.get("enabled", (data) => {
    const isEnabled = data.enabled !== false;
    if (isEnabled && changeInfo.url && changeInfo.url.includes("Login%20Success")) {
      chrome.tabs.remove(tabId);
    }
  });
});


// Initialiser l'état à "activé" la première fois que l'extension est installée
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({ enabled: true });
});
