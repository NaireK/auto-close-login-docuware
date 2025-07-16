// Expression régulière pour détecter "loginsuccess" dans toutes ses variantes
const loginSuccessRegex = /login[\s\-_]*success/i;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // On attend que l'onglet ait fini de charger (pour éviter les erreurs)
  if (changeInfo.status === "complete" && tab.url) {
    chrome.storage.local.get("enabled", (data) => {
      const isEnabled = data.enabled !== false;

      if (!isEnabled) return;

      // Vérifie si l’URL correspond à une variante de "LoginSuccess"
      if (loginSuccessRegex.test(tab.url)) {
        chrome.tabs.remove(tabId);
      }
    });
  }
});

// Initialiser l'état à "activé" la première fois que l'extension est installée
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ enabled: true });
});
