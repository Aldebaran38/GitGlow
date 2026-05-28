// Get stored theme and apply it immediately to the HTML element
chrome.storage.local.get(['theme'], (result) => {
  const theme = result.theme || 'colorful';
  document.documentElement.setAttribute('data-gitglow-theme', theme);
  console.log(`%c[GitGlow] Active theme applied: ${theme} 🎨`, 'color: #a855f7; font-weight: bold; font-size: 13px;');
});

// Listen for updates from the popup and update the theme in real-time
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.theme) {
    const newTheme = changes.theme.newValue || 'colorful';
    document.documentElement.setAttribute('data-gitglow-theme', newTheme);
    console.log(`%c[GitGlow] Theme updated to: ${newTheme} 🔄`, 'color: #3b82f6; font-weight: bold; font-size: 13px;');
  }
});
