// Shared utilities for music and simple helpers
window.playBackgroundAudio = function(){
  const aud = document.getElementById('bgAudio');
  if(!aud) return;
  aud.play().catch(()=>{
    console.error("Autoplay prevented by browser.");
  });
  sessionStorage.setItem('bgPlaying','1');
  // Update icon for the footer player
  const playerBtn = document.getElementById('playToggle');
  if (playerBtn) playerBtn.innerHTML = '&#x23F8;'; // Pause icon
}
window.pauseBackgroundAudio = function(){
  const aud = document.getElementById('bgAudio');
  if(!aud) return;
  aud.pause();
  sessionStorage.setItem('bgPlaying','0');
  // Update icon for the footer player
  const playerBtn = document.getElementById('playToggle');
  if (playerBtn) playerBtn.innerHTML = '&#x25B6;'; // Play icon
}

// Global function to update the play/pause icon (used by pages directly)
function updatePlayIcon(playing){
  const btn = document.getElementById('playToggle');
  if(!btn) return;
  btn.innerHTML = playing ? '&#x23F8;' : '&#x25B6;'; // ⏸ vs ▶
}

// Setup player toggle and initial audio state on DOM load
document.addEventListener('DOMContentLoaded', ()=>{
  const aud = document.getElementById('bgAudio');
  
  if(aud){
    // Autoplay Fix: Always set the icon to 'Play' (▶) initially, then check session state.
    // This addresses the issue where the button was 'Play' but showed 'Pause' icon.
    const initialPlayBtn = document.getElementById('playToggle');
    if (initialPlayBtn) initialPlayBtn.innerHTML = '&#x25B6;';

    // If session says it was playing, try to resume playback
    if(sessionStorage.getItem('bgPlaying') === '1') {
      aud.play().catch(()=>{
        // If autoplay fails, ensure the icon reflects paused state
        if (initialPlayBtn) initialPlayBtn.innerHTML = '&#x25B6;';
        sessionStorage.setItem('bgPlaying', '0');
      });
      // If play succeeds, the global play function will set the icon to pause
    }
  }
});