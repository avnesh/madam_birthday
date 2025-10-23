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
});