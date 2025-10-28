// Shared utilities for simple helpers.
// Global audio logic and session storage have been removed as per user request.

// Helper function for index.html is now removed as logic is placed inline.

// Global function to stop audio and navigate (used by Wishes page 'Next' button)
window.stopAudioAndNavigate = function(nextUrl){
  // Check if a musicPlayer object exists and has an audio element (used on wishes.html)
  if(typeof musicPlayer !== 'undefined' && musicPlayer.audio) {
    musicPlayer.audio.pause();
    musicPlayer.audio.currentTime = 0;
  } 

  // In case music was played by the simple index.html logic or another source, this is a fallback
  const globalAud = document.getElementById('bgAudio');
  if(globalAud) {
    globalAud.pause();
    globalAud.currentTime = 0;
  }
  
  // Navigate directly to the destination page provided by the link
  location.href = nextUrl;
}

// Setup player toggle and initial audio state on DOM load
document.addEventListener('DOMContentLoaded', ()=>{
  // No global audio logic here anymore.

  // --- Hamburger Menu Logic ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  if (hamburgerBtn && navLinks) {
    // Create an overlay div and add it to the body
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay hidden md:hidden';
    document.body.appendChild(overlay);

    const toggleMenu = () => {
      const isMenuOpen = !navLinks.classList.contains('hidden');
      
      navLinks.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
      overlay.style.pointerEvents = isMenuOpen ? 'none' : 'auto'; // Make overlay clickable only when visible
      document.body.classList.toggle('menu-open-blur');
      hamburgerBtn.classList.toggle('active'); // Add/remove active class to the button
      
      // Prevent body scroll when menu is open (robust method)
      document.documentElement.style.overflow = isMenuOpen ? '' : 'hidden';
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  }
});