// Test script
document.addEventListener('DOMContentLoaded', function() {
  alert('Test script loaded!');
  
  // Attach event listeners to language buttons
  document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang-btn');
      alert('Language button clicked: ' + lang);
      
      // Update URL parameter
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
      
      // Reload the page to apply the language change
      window.location.reload();
    });
  });
});
