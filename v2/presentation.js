const slides = [
  {
    chapter:'The vision', tone:'dark', layout:'cover', eyebrow:'', title:'Invisible Banking',
    body:`
      <div class="cover-grid">
        <div>
          <h1 class="cover-title">Invisible<span>Banking.</span></h1>
          <p class="cover-copy">Connecting City Bank around customers and businesses.</p>
          <div class="cover-outcomes">
            <div class="cover-outcome"><b>Customer</b><span>One simple experience.</span></div>
            <div class="cover-outcome"><b>Business</b><span>More value from each relationship.</span></div>
            <div class="cover-outcome"><b>Bank</b><span>One connected institution.</span></div>
          </div>
        </div>
        <div class="cover-orbit" aria-hidden="true">
          <i class="ring"></i><i class="ring"></i><i class="ring"></i><i class="core"></i>
          <i class="orbit-dot"></i><i class="orbit-dot"></i><i class="orbit-dot"></i><i class="orbit-dot"></i>
        </div>
      </div>`,
    foot:'It just works'
  },
  {
    chapter:'The opportunity', tone:'paper', layout:'capabilities', eyebrow:'The starting point',
    title:'City Bank has built the pieces. <span class="accent">The next advantage is connection.</span>',
    subtitle:'Transformation is already in motion. The opportunity is to make these strengths work together across City Bank.',
    body:`
      <div class="capability-scene">
        <div>
          <div class="advantage-line">More value from<br><span>what already exists.</span></div>
          <p class="quiet">The next opportunity is not another platform. AI can make existing capabilities more intelligent, responsive and connected.</p>
        </div>
        <div class="capability-field" aria-label="Existing City Bank capabilities">
          <div class="capability">Citytouch</div><div class="capability">Blink</div><div class="capability">Blueprint</div><div class="capability">Cards + POS</div>
          <div class="capability">Branches + CX</div><div class="capability">Corporate</div><div class="capability">SME + Medium</div><div class="capability">Treasury</div>
          <div class="capability ai">Data + AI + IT connect the field</div>
        </div>
      </div>`,
    foot:'Existing capabilities · Connected value'
  },
  {
    chapter:'The opportunity', tone:'paper', layout:'overlap', eyebrow:'A real overlap',
    title:'Today, one customer service can be <span class="accent">built twice.</span>',
    subtitle:'When channels evolve separately, the same capability can appear in more than one place.',
    body:`
      <div class="overlap-scene">
        <section class="service-lane left"><span class="micro">Citytouch</span><h3>Digital banking services</h3><ul><li>EMI conversion</li><li>Cheque book request</li><li>Statements</li><li>Address update</li></ul></section>
        <div class="overlap-core">Repeated<br>build</div>
        <section class="service-lane right"><span class="micro">CityAssist</span><h3>Customer support</h3><ul><li>Customer queries</li><li>Service requests</li><li>Assisted resolution</li><li>Relationship context</li></ul></section>
      </div>`,
    foot:'Two customer routes · Divided context'
  },
  {
    chapter:'The opportunity', tone:'paper', layout:'consequence', eyebrow:'The business consequence',
    title:'Disconnected work can <span class="accent">cost twice.</span>',
    subtitle:'The issue is not only duplication. Useful signals and relationships may also fail to connect to the next business opportunity.',
    body:`
      <div class="consequence-scene">
        <section class="consequence"><div class="consequence-word">Repeat</div><h3>Repeated effort</h3><p>Teams may design, build and maintain similar capabilities more than once.</p></section>
        <div class="consequence-divider" aria-hidden="true"></div>
        <section class="consequence"><div class="consequence-word">Miss</div><h3>Missed growth</h3><p>POS data, corporate relationships or merchant networks may never connect to the next opportunity.</p></section>
      </div>`,
    foot:'Lost effort · Lost time · Lost potential'
  },
  {
    chapter:'The ecosystem idea', tone:'paper', layout:'ecosystem', eyebrow:'The idea',
    title:'One relationship outside. <span class="accent">Connected capabilities inside.</span>',
    subtitle:'An ecosystem makes City Bank work as one around a real need.',
    body:`
      <div class="ecosystem-scene">
        <div class="ecosystem-copy">The City Bank ecosystem organises complexity around the customer.</div>
        <div class="ecosystem-map" aria-label="City Bank ecosystem model">
          <div class="ecosystem-core">Customer<br>need</div>
          <div class="ecosystem-node">Businesses</div><div class="ecosystem-node">Channels</div><div class="ecosystem-node">Partners</div><div class="ecosystem-node">Data + AI</div>
        </div>
      </div>`,
    foot:'Shared intelligence · Contextual understanding · Proactive assistance'
  },
  {
    chapter:'The ecosystem idea', tone:'paper', layout:'journey', eyebrow:'Consumer journey',
    title:'One evening can connect cards, merchants, loyalty and payments',
    subtitle:'Illustrative journey: an anniversary dinner.',
    body:`
      <div class="journey-scene">
        <div class="journey-track">
          <section class="journey-step"><span class="step-no">01</span><h3>Choose</h3><p>Relevant restaurants and card privileges.</p></section>
          <section class="journey-step"><span class="step-no">02</span><h3>Book</h3><p>Availability and reservation.</p></section>
          <section class="journey-step"><span class="step-no">03</span><h3>Pay</h3><p>City Bank card and eligible benefit.</p></section>
          <section class="journey-step"><span class="step-no">04</span><h3>Reward</h3><p>Loyalty updates automatically.</p></section>
        </div>
        <div class="journey-close">One evening. <span>One City Bank journey.</span></div>
      </div>`,
    foot:'Illustrative connected journey'
  },
  {
    chapter:'The ecosystem idea', tone:'paper', layout:'journey', eyebrow:'Merchant journey',
    title:'A POS relationship can grow into a <span class="accent">merchant ecosystem.</span>',
    subtitle:'Payment can become the start of a deeper business relationship.',
    body:`
      <div class="journey-scene">
        <div class="journey-track">
          <section class="journey-step"><span class="step-no">01</span><h3>Accept</h3><p>Payments and settlement.</p></section>
          <section class="journey-step"><span class="step-no">02</span><h3>Understand</h3><p>Sales, settlements and AI-assisted business insights.</p></section>
          <section class="journey-step"><span class="step-no">03</span><h3>Engage</h3><p>Orders, loyalty and relevant customer opportunities.</p></section>
          <section class="journey-step"><span class="step-no">04</span><h3>Finance</h3><p>Working capital using verified cash flow.</p></section>
        </div>
        <div class="journey-close">The same relationship can deepen engagement and support finance <span>when the evidence supports it.</span></div>
      </div>`,
    foot:'Payment · Intelligence · Engagement · Finance'
  },
  {
    chapter:'The ecosystem idea', tone:'paper', layout:'network', eyebrow:'Corporate ecosystem',
    title:'One corporate client can open an <span class="accent">entire business network.</span>',
    subtitle:'A corporate relationship can connect employees, suppliers and distributors to multiple City Bank capabilities.',
    body:`
      <div class="network-scene">
        <div class="network-lead">A relationship becomes more valuable when the whole network becomes visible.</div>
        <div class="network-map" aria-label="Corporate ecosystem network">
          <div class="network-hub">Corporate<br>client</div>
          <div class="network-node">Suppliers</div><div class="network-node">Employees</div><div class="network-node">Distributors</div>
          <i class="network-link l1"></i><i class="network-link l2"></i><i class="network-link l3"></i>
          <div class="capability-line"><span>Payroll</span><span>Payments</span><span>Trade + FX</span><span>Cards</span><span>Financing</span></div>
        </div>
      </div>`,
    foot:'One relationship · Multiple connected opportunities'
  },
  {
    chapter:'The proposed mandate', tone:'paper', layout:'gap', eyebrow:'The gap',
    title:'City Bank owns the pieces. <span class="accent">The connection is less structured.</span>',
    subtitle:'Opportunities between businesses do not always have a natural first owner.',
    body:`
      <div class="gap-scene">
        <div class="mandate-stack">
          <div class="mandate-row"><b>Businesses</b><span>Products, customers and P&amp;Ls</span></div>
          <div class="mandate-row"><b>Blueprint</b><span>Retail transformation</span></div>
          <div class="mandate-row"><b>EPMO</b><span>Delivery governance</span></div>
          <div class="mandate-row"><b>Functions</b><span>IT, Operations, CX and Data</span></div>
        </div>
        <div class="gap-space"><span class="gap-label">The gap<br>sits here</span></div>
        <div class="gap-callout">Cross-bank opportunity.<span>Including AI integration where intelligence from one business or function could create value elsewhere.</span></div>
      </div>`,
    foot:'The gap sits between established mandates'
  },
  {
    chapter:'The proposed mandate', tone:'paper', layout:'role', eyebrow:'A possible role',
    title:'A bank-wide transformation role can <span class="accent">connect the gaps.</span>',
    subtitle:'Simple by design: find the opportunity, shape it, connect the right owners, then move it into execution.',
    body:`
      <div class="role-scene">
        <div class="role-process">
          <div class="role-step"><b>See</b><span>Across the bank.</span></div>
          <div class="role-step"><b>Shape</b><span>The opportunity.</span></div>
          <div class="role-step"><b>Connect</b><span>The right owners.</span></div>
          <div class="role-step"><b>Move</b><span>To natural ownership.</span></div>
        </div>
        <div class="role-domains">
          <div class="role-domain"><b>Horizontal transformation</b><p>Cross-bank opportunities in service, operations, data, AI integration and relationship intelligence.</p></div>
          <div class="role-domain"><b>Ecosystem transformation</b><p>Connected journeys, partnerships, embedded services and new business opportunities.</p></div>
        </div>
      </div>`,
    foot:'Transformation connects · Businesses own · EPMO governs delivery'
  },
  {
    chapter:'The proposed mandate', tone:'paper', layout:'boundaries', eyebrow:'Clear boundaries',
    title:'The role complements <span class="accent">what already exists.</span>',
    subtitle:'It should make existing ownership work better across boundaries, not create another layer of ownership.',
    body:`
      <div class="boundary-scene">
        <div class="boundary-list">
          <div class="boundary-row"><b>Business heads</b><span>Customers, products and P&amp;L</span></div>
          <div class="boundary-row"><b>Country Business Manager</b><span>Existing mandate remains intact</span></div>
          <div class="boundary-row"><b>Blueprint</b><span>Retail transformation</span></div>
          <div class="boundary-row"><b>EPMO</b><span>Execution governance</span></div>
          <div class="boundary-row"><b>IT / CX / Operations / Data</b><span>Specialist ownership, including AI and technology capabilities</span></div>
        </div>
        <div class="boundary-bridge"><div class="bridge-copy">Transformation connects cross-bank opportunities to natural owners</div></div>
      </div>`,
    foot:'Subject to internal mandate validation'
  },
  {
    chapter:'Why this leader', tone:'paper', layout:'evidence', eyebrow:'Already happening',
    title:'I am already doing parts of this, <span class="accent">informally.</span>',
    subtitle:'These began with a customer or business opportunity and involved connecting the relevant teams.',
    body:`
      <div class="evidence-scene">
        <div class="evidence-item"><b>Service</b><p>DigiBox<br>Traceable courier</p></div>
        <div class="evidence-item"><b>Digital + sales</b><p>Citytouch features<br>Digital sales<br>Central offer site</p></div>
        <div class="evidence-item"><b>Ecosystem</b><p>Foreign Education Hub</p></div>
        <div class="evidence-item"><b>Connection</b><p>Citytouch × Blink</p></div>
      </div>`,
    foot:'Identify the opportunity · Connect the teams · Help move it forward'
  },
  {
    chapter:'Why this leader', tone:'paper', layout:'shift', eyebrow:'From informal to structured',
    title:'The aim is not more projects. <span class="accent">It is better-connected projects.</span>',
    subtitle:'A structured model creates earlier ownership, clearer handover and measurable outcomes.',
    body:`
      <div class="shift-scene">
        <section class="shift-column today"><h3>Today</h3><div class="shift-item">Opportunities surface unevenly</div><div class="shift-item">Connections happen informally</div><div class="shift-item">Progress relies on individual coordination</div></section>
        <div class="shift-transform"><span>SHIFT</span></div>
        <section class="shift-column structured"><h3>More structured</h3><div class="shift-item">Systematic opportunity discovery</div><div class="shift-item">Business cases shaped early</div><div class="shift-item">Owners connected earlier</div><div class="shift-item">Clear execution handover</div><div class="shift-item">Business outcome tracked</div></section>
      </div>`,
    foot:'AI can help surface changes and connections continuously'
  },
  {
    chapter:'Why this leader', tone:'paper', layout:'outcomes', eyebrow:'The outcome',
    title:'Judge the role by whether <span class="accent">businesses perform better.</span>',
    subtitle:'The same three outcomes from the opening provide the measure.',
    body:`
      <div class="outcome-scene">
        <section class="outcome"><div class="outcome-no">01</div><h3>Customer</h3><p>Simpler, more connected and increasingly proactive journeys.</p></section>
        <section class="outcome"><div class="outcome-no">02</div><h3>Business</h3><p>Deeper relationships, better-informed decisions and new revenue opportunities.</p></section>
        <section class="outcome"><div class="outcome-no">03</div><h3>Bank</h3><p>Less duplication, faster execution, better intelligence and greater return on investment.</p></section>
      </div>`,
    foot:'Proposed outcomes · Metrics to define'
  },
  {
    chapter:'Why this leader', tone:'red', layout:'reveal', eyebrow:'The opportunity',
    title:'Invisible Banking becomes real when City Bank works as one around the customer',
    body:`
      <div class="reveal-scene">
        <p class="reveal-quote">I would like to explore how I can make this more systematic, drawing on the cross-bank perspective developed through my current role, while businesses and functions retain ownership.</p>
        <div class="reveal-rule"></div>
        <p class="reveal-close">A broader contribution to transformation and business.</p>
      </div>
      <div class="reveal-word" aria-hidden="true">Transform</div>`,
    foot:'The case for a formal mandate'
  },
  {
    chapter:'The possibilities', tone:'dark', layout:'prospects', eyebrow:'Internal prospects · 01 + 02',
    title:'What if the bank’s decisions evolved as fast as the world around it?',
    subtitle:'AI could turn periodic analysis into continuously updated business intelligence.',
    body:()=>prospectPair('finance','trade','From periodic analysis to continuously informed decisions.'),
    foot:'Illustrative prospects · Human review and controls required'
  },
  {
    chapter:'The possibilities', tone:'paper', layout:'prospects', eyebrow:'Internal prospects · 03 + 04',
    title:'What if the bank could identify connections people might never discover?',
    subtitle:'AI could help the institution understand itself as one connected business.',
    body:()=>prospectPair('dots','operations','From intelligent functions to a more intelligent institution.'),
    foot:'Illustrative prospects · Data and mandate validation required'
  },
  {
    chapter:'The possibilities', tone:'dark', layout:'prospects', eyebrow:'Customer prospects · 01 + 02',
    title:'What if City Bank knew what needed to happen next?',
    subtitle:'AI and ecosystem integration could make banking quietly responsive to real-life events.',
    body:()=>prospectPair('health','travel','The customer lives the experience. The bank handles the complexity.'),
    foot:'Future concepts · Partner and customer consent required'
  },
  {
    chapter:'The possibilities', tone:'paper', layout:'prospects', eyebrow:'Customer prospects · 03 + 04',
    title:'What if banking quietly made everyday life better?',
    subtitle:'Relevant moments, existing benefits and the next permitted action connect.',
    body:()=>prospectPair('coffee','service','From responding to requests to anticipating needs.'),
    foot:'Future concepts · Subject to feasibility and controls'
  },
  {
    chapter:'Conclusion', tone:'red', layout:'conclusion', eyebrow:'The conclusion',
    title:'The future of Invisible Banking is connected, intelligent and continuous',
    body:`
      <div class="conclusion-scene">
        <div class="final-lockup"><h2>Invisible<br>Banking.</h2><p>It just works.</p></div>
        <div>
          <div class="final-cycle"><div class="final-step"><b>See</b><span>What others may miss</span></div><div class="final-step"><b>Connect</b><span>What already exists</span></div><div class="final-step"><b>Create</b><span>What comes next</span></div></div>
          <div class="audience-row"><div><b>Customers</b><span>A bank that quietly makes life easier.</span></div><div><b>Businesses</b><span>Deeper relationships and new value.</span></div><div><b>Bank</b><span>Capabilities and intelligence working together.</span></div></div>
        </div>
      </div>`,
    foot:'Technology, data and AI make the complexity increasingly invisible'
  }
];

const prospects = {
  finance:{number:'01 / Finance',title:'A living business outlook',summary:'Forecasts update as business and external conditions change.',from:'New signals',to:'Forecast review',kind:'Internal prospect 01 · Finance',lede:'A continuously refreshed view of the business, with changes highlighted for accountable decision-makers.',moment:'Revenue, expenses, deposits, lending, market movements and trends change after the planning snapshot.',response:'Models update projections, show drivers of variance and present options for Finance to review, challenge and act on.',value:'More timely decisions, improved resource deployment and potential profitability gains. Impact requires baseline and pilot measurement.',connections:'Finance + business data + market data + model governance.',guardrail:'Forecasts and recommendations need data quality checks, explainability and human ownership of decisions.'},
  trade:{number:'02 / Trade + Treasury',title:'Intelligence that follows global developments',summary:'A global event prompts a review of affected clients and transactions.',from:'Global event',to:'Exposure review',kind:'Internal prospect 02 · Trade & Treasury',lede:'Global developments can be mapped against affected clients and transactions as conditions change.',moment:'A shipping disruption, tariff change, commodity move or FX shock affects an import corridor.',response:'Potentially affected transactions, cash-flow expectations, finance needs and FX exposures are flagged to Trade, Treasury, Corporate, Credit and relationship managers for review.',value:'Earlier intervention, clearer risk awareness and more relevant client solutions.',connections:'Trade + Treasury + Corporate + Credit + external intelligence.',guardrail:'External signals may be incomplete. Credit, suitability and market decisions remain with authorised teams.'},
  dots:{number:'03 / Cross-bank intelligence',title:'The bank connects its own dots',summary:'Shared clues reveal reusable work and a coordinated proposition.',from:'Shared clue',to:'New proposition',kind:'Internal prospect 03 · Cross-bank intelligence',lede:'Shared intelligence can surface useful relationships between work that would otherwise remain separate.',moment:'A corporate payroll relationship expands while Retail, Cards and savings teams develop related propositions.',response:'A governed capability identifies the overlap, relevant existing solutions, dependencies and possible cross-business proposition for owners to assess.',value:'Potentially less duplication, more cross-sell and greater value from existing capabilities.',connections:'Corporate + Retail + Cards + Data + relevant control functions.',guardrail:'Access must respect need-to-know, customer permissions and product ownership. A shared view is not a licence to share all data.'},
  operations:{number:'04 / Proactive operations',title:'Problems surfaced before they spread',summary:'Demand signals reach accountable owners before capacity becomes a customer issue.',from:'Demand signal',to:'Capacity plan',kind:'Internal prospect 04 · Operations',lede:'Demand signals and operational capacity could inform business decisions before customers feel a bottleneck.',moment:'A lending campaign is expected to create more applications than current processing capacity.',response:'The business, Marketing and Operations receive an early scenario showing capacity options, campaign timing and likely service effects.',value:'Better allocation, steadier execution and fewer avoidable customer issues.',connections:'Business + Marketing + Operations + service and capacity data.',guardrail:'Forecast uncertainty should be visible. Operational decisions remain with accountable owners.'},
  health:{number:'01 / Healthcare',title:'Help arrives when it is needed',summary:'A hospital payment can prompt a permitted benefit check and coordinated claim journey.',from:'Hospital payment',to:'Benefit check',kind:'Customer journey 01 · Healthcare',lede:'The hospital payment could start a coordinated benefit journey, subject to explicit permissions and partner integration.',moment:'A customer is hospitalised and makes a payment.',response:'An eligible insurance benefit is checked. With prior authorisation, verified information and insurer support, a claim can be initiated and status tracked.',value:'Less administrative burden in a difficult moment, and greater value from an eligible benefit.',connections:'Payments + Cards + insurer + hospital + consented coordination.',guardrail:'A payment alone cannot establish hospitalisation or coverage. Insurance, privacy, consent and claim rules must govern the journey.'},
  travel:{number:'02 / Travel',title:'The journey organises itself',summary:'A verified itinerary can connect eligible privileges to saved preferences.',from:'Flight booking',to:'Service arranged',kind:'Customer journey 02 · Travel',lede:'A verified flight purchase could activate eligible services without a separate search and booking process.',moment:'A customer purchases a flight ticket.',response:'Card privileges are checked, and with the customer’s saved preferences and authorisation, meet-and-greet or airport services can be arranged. Changes can trigger updates.',value:'Eligible benefits become easier to use and reinforce the card relationship.',connections:'Cards + airlines + airport and travel partners + preference management.',guardrail:'A card transaction may not contain a verified itinerary. Inventory, eligibility and partner confirmation are essential.'},
  coffee:{number:'03 / Everyday lifestyle',title:'The right benefit, without searching',summary:'A permitted preference can connect an everyday purchase to an eligible benefit.',from:'Usual purchase',to:'Benefit applied',kind:'Customer journey 03 · Everyday lifestyle',lede:'Everyday merchant activity could make benefits more relevant and simpler to redeem.',moment:'A customer regularly buys coffee at a preferred merchant.',response:'With permission, the bank recognises a preference and applies an eligible merchant-funded or loyalty benefit automatically at payment.',value:'A useful customer benefit, more merchant engagement and potentially deeper payment preference.',connections:'Cards + POS + merchant partners + loyalty + consented personalisation.',guardrail:'Preferences should not become intrusive surveillance. Funding, eligibility, consent and fairness need testing.'},
  service:{number:'04 / Proactive service',title:'The bank starts fixing things first',summary:'A transaction mismatch can trigger investigation before a customer raises a request.',from:'Payment mismatch',to:'Case initiated',kind:'Customer journey 04 · Proactive service',lede:'The bank can detect a transaction problem, begin investigation and keep the customer informed.',moment:'A payment appears to fail, but the account is debited.',response:'Payment and settlement records are checked. A recovery or investigation opens where appropriate, with clear customer updates through resolution.',value:'Less chasing, lower uncertainty and more trust in the payment experience.',connections:'Payments + Operations + Service + transaction intelligence.',guardrail:'Transaction states can be ambiguous. The bank must distinguish pending, failed and settled payments before promising resolution.'}
};

function prospectPair(firstKey,secondKey,takeaway) {
  return `<div class="prospect-scene">${prospectCard(firstKey)}${prospectCard(secondKey)}</div><div class="prospect-takeaway">${takeaway}</div>`;
}

function prospectCard(key) {
  const p=prospects[key];
  return `<button class="prospect-card" type="button" data-prospect="${key}"><span class="prospect-number">${p.number}</span><h3>${p.title}</h3><p>${p.summary}</p><div class="causal-flow" aria-hidden="true"><span>${p.from}</span><i class="flow-line"><i></i></i><span>${p.to}</span></div><span class="explore">Explore the prospect</span></button>`;
}

let current=0;
let lastFocus=null;
let touchX=0;
let touchY=0;
let transitionRunning=false;
const stage=document.getElementById('stage');
const overview=document.getElementById('overview');
const detail=document.getElementById('detail');

function textOnly(markup) {
  const box=document.createElement('div');
  box.innerHTML=markup;
  return box.textContent.trim();
}

function slideMarkup(slide,index) {
  const header=index===0?'':`<header class="scene-header"><div class="eyebrow">${slide.eyebrow}</div><h1 class="title">${slide.title}</h1>${slide.subtitle?`<p class="subtitle">${slide.subtitle}</p>`:''}</header>`;
  const body=typeof slide.body==='function'?slide.body():slide.body;
  return `<article class="slide tone-${slide.tone} ${slide.layout}" data-scene="${index+1}" data-layout="${slide.layout}" aria-label="Slide ${index+1}: ${textOnly(slide.title)}"><i class="signal-rail" aria-hidden="true"></i><div class="slide-canvas">${header}<div class="scene-body">${body}</div><footer class="scene-footer"><span>${slide.foot||''}</span><span>${String(index+1).padStart(2,'0')} / ${slides.length}</span></footer></div></article>`;
}

function render() {
  const slide=slides[current];
  stage.innerHTML=slideMarkup(slide,current);
  document.getElementById('chapter').textContent=slide.chapter;
  document.getElementById('counter').textContent=`${String(current+1).padStart(2,'0')} / ${slides.length}`;
  document.getElementById('progress').style.width=`${((current+1)/slides.length)*100}%`;
  document.getElementById('prev').disabled=current===0;
  document.getElementById('next').disabled=current===slides.length-1;
  stage.scrollTop=0;
  history.replaceState(null,'',`#slide-${current+1}`);
  document.dispatchEvent(new CustomEvent('presentation:rendered',{detail:{index:current,slide:stage.querySelector('.slide')}}));
}

function go(next) {
  const bounded=Math.max(0,Math.min(slides.length-1,next));
  if(bounded===current||transitionRunning) return;
  document.documentElement.dataset.direction=bounded>current?'forward':'back';
  const update=()=>{current=bounded;render();};
  if(document.startViewTransition) {
    transitionRunning=true;
    const transition=document.startViewTransition(update);
    transition.finished.catch(()=>{}).finally(()=>{transitionRunning=false;});
  } else update();
}

function showOverlay(element) {
  lastFocus=document.activeElement;
  element.classList.add('open');
  document.body.style.overflow='hidden';
  element.querySelector('.close').focus();
}

function closeOverlay() {
  const opened=document.querySelector('.overlay.open');
  if(!opened) return;
  opened.classList.remove('open');
  document.body.style.overflow='';
  lastFocus?.focus();
}

function openOverview() {
  document.getElementById('overviewGrid').innerHTML=slides.map((slide,index)=>`<button class="thumb" type="button" data-slide="${index}"><span>${String(index+1).padStart(2,'0')} / ${slides.length}</span><strong>${textOnly(slide.title)}</strong><small>${slide.chapter}</small></button>`).join('');
  showOverlay(overview);
}

function openProspect(key) {
  const p=prospects[key];
  document.getElementById('detailContent').innerHTML=`<div class="detail-kicker">${p.kind}</div><h2 id="detailTitle">${p.title}</h2><p class="detail-lede">${p.lede}</p><div class="detail-grid"><section><h3>The moment</h3><p>${p.moment}</p></section><section><h3>Behind the scenes</h3><p>${p.response}</p></section><section><h3>Potential value</h3><p>${p.value}</p></section><section><h3>Connected capabilities</h3><p>${p.connections}</p></section><section style="grid-column:1/-1"><h3>What needs validation</h3><p>${p.guardrail}</p></section></div><p class="detail-fine">Illustrative future concept. No City Bank capability, partner integration or customer outcome is asserted as live.</p>`;
  showOverlay(detail);
}

document.getElementById('prev').addEventListener('click',()=>go(current-1));
document.getElementById('next').addEventListener('click',()=>go(current+1));
document.getElementById('overviewBtn').addEventListener('click',openOverview);
document.getElementById('fullBtn').addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.());

document.addEventListener('click',event=>{
  const prospect=event.target.closest('[data-prospect]');
  if(prospect) openProspect(prospect.dataset.prospect);
  const thumb=event.target.closest('[data-slide]');
  if(thumb) { closeOverlay(); go(Number(thumb.dataset.slide)); }
  if(event.target.matches('[data-close]')||event.target.classList.contains('overlay')) closeOverlay();
});

document.addEventListener('keydown',event=>{
  if(document.querySelector('.overlay.open')) { if(event.key==='Escape') closeOverlay(); return; }
  if(['ArrowRight','PageDown',' '].includes(event.key)) { event.preventDefault(); go(current+1); }
  else if(['ArrowLeft','PageUp'].includes(event.key)) { event.preventDefault(); go(current-1); }
  else if(event.key==='Home') go(0);
  else if(event.key==='End') go(slides.length-1);
  else if(event.key.toLowerCase()==='o') openOverview();
  else if(event.key.toLowerCase()==='f') document.getElementById('fullBtn').click();
});

stage.addEventListener('touchstart',event=>{touchX=event.changedTouches[0].screenX;touchY=event.changedTouches[0].screenY;},{passive:true});
stage.addEventListener('touchend',event=>{if(window.innerWidth<=600)return;const dx=event.changedTouches[0].screenX-touchX;const dy=event.changedTouches[0].screenY-touchY;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.5)go(current+(dx<0?1:-1));},{passive:true});

window.addEventListener('hashchange',()=>{const match=location.hash.match(/^#slide-(\d+)$/);if(match&&Number(match[1])-1!==current)go(Number(match[1])-1);});
const initial=location.hash.match(/^#slide-(\d+)$/);
current=initial?Math.max(0,Math.min(slides.length-1,Number(initial[1])-1)):0;
render();
