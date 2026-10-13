/* Editorial treatment and compact causal motion diagrams for the preserved story. */
const flowLabels = {
  finance:['New signals','Forecast review'],
  trade:['Global event','Exposure review'],
  dots:['Shared clue','New proposition'],
  operations:['Demand signal','Capacity plan'],
  health:['Hospital payment','Benefit check'],
  travel:['Flight booking','Service arranged'],
  coffee:['Usual purchase','Benefit applied'],
  service:['Payment mismatch','Case initiated']
};

const renderStory = render;
render = function () {
  renderStory();
  const slide = stage.querySelector('.slide');
  slide.classList.remove('light','red');
  slide.classList.add(current === 0 ? 'cinematic' : [14,19].includes(current) ? 'red' : 'light');
  slide.dataset.scene = String(current + 1);
  slide.querySelectorAll('[data-prospect]').forEach(card => {
    const labels = flowLabels[card.dataset.prospect];
    if (!labels) return;
    const diagram = document.createElement('div');
    diagram.className = 'mini-flow';
    diagram.setAttribute('aria-hidden','true');
    diagram.innerHTML = `<span>${labels[0]}</span><span class="flow-track"><i></i></span><span>${labels[1]}</span>`;
    card.insertBefore(diagram,card.querySelector('.more'));
  });
};
render();

const motionBtn = document.getElementById('motionBtn');
function toggleMotion() {
  const paused = document.body.classList.toggle('motion-paused');
  motionBtn.textContent = paused ? 'Play motion' : 'Pause motion';
  motionBtn.setAttribute('aria-label',paused ? 'Play animation' : 'Pause animation');
  motionBtn.setAttribute('aria-pressed',String(paused));
}
motionBtn.addEventListener('click',toggleMotion);
document.addEventListener('keydown',event => {
  if (event.key.toLowerCase() === 'm' && !event.altKey && !event.ctrlKey && !event.metaKey && !document.querySelector('.overlay.open')) {
    event.preventDefault();
    toggleMotion();
  }
});
