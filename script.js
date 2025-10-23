// Shared utilities for music and simple helpers
window.playBackgroundAudio = function(){
  const aud = document.getElementById('bgAudio');
  if(!aud) return;
  aud.play().catch(()=>{
    // autoplay may be blocked; show UI to user
  });
  sessionStorage.setItem('bgPlaying','1');
  updatePlayIcon(true);
}
window.pauseBackgroundAudio = function(){
  const aud = document.getElementById('bgAudio');
  if(!aud) return;
  aud.pause();
  sessionStorage.setItem('bgPlaying','0');
  updatePlayIcon(false);
}
function updatePlayIcon(playing){
  const btn = document.getElementById('playToggle');
  if(!btn) return;
  btn.textContent = playing ? '⏸' : '▶';
}

// Setup player toggle
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('playToggle');
  const aud = document.getElementById('bgAudio');
  if(btn && aud){
    // initialize
    const state = sessionStorage.getItem('bgPlaying');
    if(state === '1') aud.play().catch(()=>{}), updatePlayIcon(true);
    btn.addEventListener('click', ()=>{
      if(aud.paused){ aud.play(); updatePlayIcon(true); sessionStorage.setItem('bgPlaying','1'); }
      else { aud.pause(); updatePlayIcon(false); sessionStorage.setItem('bgPlaying','0'); }
    });
  }
  
  // Create cursor element for typed.js if it doesn't exist
  if (!document.querySelector('.typed-cursor')) {
    const cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    cursor.textContent = '|';
    cursor.style.color = '#ff9bb3';
    cursor.style.fontSize = '1.2em';
    cursor.style.marginLeft = '2px';
    document.body.appendChild(cursor);
  }
});
