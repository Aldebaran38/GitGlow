document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.theme-card');

  // Load the current active theme
  chrome.storage.local.get(['theme'], (result) => {
    const activeTheme = result.theme || 'colorful';
    setActiveCard(activeTheme);
  });

  // Handle card clicks
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedTheme = card.getAttribute('data-theme');
      
      // Update UI
      setActiveCard(selectedTheme);
      
      // Save to chrome storage
      chrome.storage.local.set({ theme: selectedTheme }, () => {
        console.log(`[GitGlow] Theme changed to: ${selectedTheme}`);
      });
    });
  });

  function setActiveCard(theme) {
    cards.forEach(card => {
      if (card.getAttribute('data-theme') === theme) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }
});
