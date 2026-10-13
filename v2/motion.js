const motionButton=document.getElementById('motionBtn');
let motionPaused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function applyMotionState() {
  document.body.classList.toggle('motion-paused',motionPaused);
  motionButton.textContent=motionPaused?'Play motion':'Pause motion';
  motionButton.setAttribute('aria-label',motionPaused?'Play animation':'Pause animation');
  motionButton.setAttribute('aria-pressed',String(motionPaused));
}

function toggleMotion() {
  motionPaused=!motionPaused;
  applyMotionState();
}

motionButton.addEventListener('click',toggleMotion);
document.addEventListener('keydown',event=>{
  if(event.key.toLowerCase()==='m'&&!event.altKey&&!event.ctrlKey&&!event.metaKey&&!document.querySelector('.overlay.open')) {
    event.preventDefault();
    toggleMotion();
  }
});

document.addEventListener('visibilitychange',()=>{
  document.body.classList.toggle('tab-hidden',document.hidden);
});

applyMotionState();
