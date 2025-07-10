document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const logo = document.getElementById('logoClick');

  chrome.storage.local.get("enabled", (result) => {
    const isEnabled = result.enabled !== false;
    updateButtonState(isEnabled);
  });

  toggleButton.addEventListener('click', () => {
    chrome.storage.local.get("enabled", (result) => {
      const newState = !result.enabled;
      chrome.storage.local.set({ enabled: newState }, () => {
        updateButtonState(newState);
      });
    });
  });

  function updateButtonState(isEnabled) {
    toggleButton.textContent = isEnabled ? "Pause" : "Activer";
    toggleButton.classList.toggle('pause', isEnabled);
  }

  // Action au clic sur le logo
  logo.addEventListener('click', () => {
    chrome.tabs.create({ url: "https://www.factoria.fr" });
  });
});
