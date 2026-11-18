import {questions} from './questions.js';

const app = document.querySelector('#app');
const footerStatus = document.querySelector('#footer-status');
const STORAGE_KEY = 'ieee-zcsb-circuits-quiz-last-four-v1';
let round = pickRound();
let step = -1;
let answers = Array(4).fill(null);
let picked = null;

function safeReadLast(){
  try { const value=JSON.parse(localStorage.getItem(STORAGE_KEY)); return Array.isArray(value)?value.filter(x=>typeof x==='string'):[]; }
  catch { return []; }
}
function safeSaveLast(ids){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(ids));}catch{/* The quiz still runs without storage. */}}
function randomInt(max){
  if(globalThis.crypto?.getRandomValues){const n=new Uint32Array(1);crypto.getRandomValues(n);return n[0]%max;}
  return Math.floor(Math.random()*max);
}
function pickRound(){
  const previous=new Set(safeReadLast());
  const pool=questions.filter(q=>!previous.has(q.id));
  for(let i=pool.length-1;i>0;i--){const j=randomInt(i+1);[pool[i],pool[j]]=[pool[j],pool[i]];}
  const selected=pool.slice(0,4).map(q=>{
    const variants=q.choices.map((choice,index)=>({choice,isCorrect:index===q.correct}));
    for(let i=variants.length-1;i>0;i--){const j=randomInt(i+1);[variants[i],variants[j]]=[variants[j],variants[i]];}
    return {...q,choices:variants.map(v=>v.choice),correct:variants.findIndex(v=>v.isCorrect)};
  });
  safeSaveLast(selected.map(q=>q.id));
  return selected;
}
function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

function circuitArt(){return `<svg class="hero-circuit" viewBox="0 0 620 510" role="img" aria-label="Closed series circuit: a battery, a closed switch, and a resistor in one loop">
  <path class="hero-circuit__faint" d="M90 230 V90 H267 M333 90 H510 V188 M510 287 V400 H90 V252"/>
  <path class="hero-circuit__trace" d="M90 230 V90 H267 M333 90 H510 V188 M510 287 V400 H90 V252"/>
  <g class="hero-circuit__parts"><path d="M55 230 H125 M69 252 H111 M268 90 H332 M510 188 L494 202 L526 216 L494 230 L526 244 L494 258 L526 272 L510 287"/><circle cx="267" cy="90" r="6"/><circle cx="333" cy="90" r="6"/></g>
  <text x="34" y="223">+</text><text x="38" y="277">−</text><text x="551" y="245">R</text><text x="302" y="78">S</text>
  </svg>`;}

function renderWelcome(){
  footerStatus.textContent='FOUR QUESTIONS. ONE PERFECT SCORE.';
  app.innerHTML=`<section class="welcome" aria-label="Quiz introduction">
    <div class="welcome__content"><p class="kicker">IEEE ZC-SB · Education team</p><h1>FOUR<br>TO <span>WIN.</span></h1>
    <p class="welcome__lead">Four circuit questions. Three choices each. Get all four right and win a gift.</p>
    <div class="welcome__actions"><button class="primary-button" id="start" type="button">Start the quiz <span aria-hidden="true">↗</span></button><p>A fresh set of questions appears every time you open or refresh this page.</p></div>
    <div class="welcome__rule"><span>01</span><span>THINK</span><i></i><span>02</span><span>CHOOSE</span><i></i><span>03</span><span>WIN</span></div></div>
    <div class="welcome__visual"><div class="visual-title">CIRCUIT / 04</div>${circuitArt()}<div class="visual-bottom"><strong>V = I × R</strong><span>TRACE THE PATH. FIND THE ANSWER.</span></div></div>
  </section>`;
  document.querySelector('#start').addEventListener('click',()=>{step=0;renderQuestion();});
}

function renderQuestion(){
  const q=round[step];
  footerStatus.textContent=`QUESTION ${step+1} OF 4`;
  app.innerHTML=`<section class="question-screen" aria-label="Question ${step+1} of 4">
    <div class="question-screen__rail"><div class="rail-heading"><span>THE CHALLENGE</span><strong>${String(step+1).padStart(2,'0')} / 04</strong></div><div class="progress" aria-label="Question ${step+1} of 4">${[0,1,2,3].map(i=>`<span class="progress__segment ${i<step?'is-done':i===step?'is-current':''}"></span>`).join('')}</div><p>Pick one answer. You can change it before you continue.</p></div>
    <div class="question-screen__body"><div class="question-content"><div class="topic"><span class="topic__dot"></span>${esc(q.topic)}</div><h2>${esc(q.prompt)}</h2><div class="choice-list" role="group" aria-label="Answer choices">${q.choices.map((c,i)=>`<button class="choice ${picked===i?'is-selected':''}" data-choice="${i}" type="button" aria-pressed="${picked===i}"><span class="choice__letter">${'ABC'[i]}</span><span class="choice__text">${esc(c)}</span><span class="choice__marker" aria-hidden="true">${picked===i?'●':'○'}</span></button>`).join('')}</div><div class="question-actions"><button class="continue-button" id="continue" type="button" ${picked===null?'disabled':''}>${step===3?'Finish & see result':`Next question (${step+2} of 4)`} <span aria-hidden="true">→</span></button><span id="action-hint">Choose an answer to continue</span></div></div>
    <aside class="question-aside" aria-hidden="true"><div class="question-aside__number">${String(step+1).padStart(2,'0')}</div><div class="question-aside__wire"><span></span><span></span><span></span><span></span></div><p>FOLLOW THE CURRENT.</p></aside></div>
  </section>`;
  window.scrollTo(0,0);
  document.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>choose(Number(button.dataset.choice))));
  document.querySelector('#continue').addEventListener('click',advance);
}
function choose(index){
  if(index<0||index>2)return;
  picked=index;
  document.querySelectorAll('[data-choice]').forEach((button,i)=>{
    const chosen=i===index;button.classList.toggle('is-selected',chosen);button.setAttribute('aria-pressed',String(chosen));button.querySelector('.choice__marker').textContent=chosen?'●':'○';
  });
  document.querySelector('#continue').disabled=false;
  document.querySelector('#action-hint').textContent='Ready — tap the yellow button';
}
function advance(){
  if(picked===null)return;
  answers[step]=picked;
  picked=null;
  if(step===3){renderResult();return;}
  step++;
  renderQuestion();
}

function renderResult(){
  const score=answers.reduce((n,answer,i)=>n+Number(answer===round[i].correct),0);
  const won=score===4;
  footerStatus.textContent=`RESULT ${score} / 4`;
  app.innerHTML=`<section class="result ${won?'result--won':'result--retry'}" aria-label="Quiz result">
    <div class="result__top"><span>THE RESULT</span><strong>${score} / 04</strong></div>
    <div class="result__hero"><div><p class="result__eyebrow">${won?'PERFECT CIRCUIT':'KEEP PRACTICING'}</p><h1>${won?'YOU WON<br>A GIFT.':'HARD LUCK.'}</h1><p class="result__message">${won?'Congratulations! You answered all four questions correctly.':'You got '+score+' out of 4. All four need to be right to win the gift.'}</p><button class="primary-button" id="again" type="button">Try four new questions <span aria-hidden="true">↗</span></button></div><div class="result__score" aria-hidden="true">${score}<span>/4</span></div></div>
    <div class="review"><div class="review__heading"><h2>Review your answers</h2><span>${score} CORRECT · ${4-score} TO REVISIT</span></div><div class="review__grid">${round.map((q,i)=>`<article class="review-card ${answers[i]===q.correct?'is-right':'is-wrong'}"><div class="review-card__top"><span>${String(i+1).padStart(2,'0')} / ${esc(q.topic)}</span><strong>${answers[i]===q.correct?'CORRECT':'REVISIT'}</strong></div><h3>${esc(q.prompt)}</h3><p><span>YOUR ANSWER</span>${esc(q.choices[answers[i]])}</p><p><span>CORRECT ANSWER</span>${esc(q.choices[q.correct])}</p><div class="review-card__why">${esc(q.explanation)}</div></article>`).join('')}</div></div>
  </section>`;
  window.scrollTo(0,0);
  requestAnimationFrame(()=>window.scrollTo(0,0));
  document.querySelector('#again').addEventListener('click',()=>{round=pickRound();step=0;answers=Array(4).fill(null);picked=null;renderQuestion();window.scrollTo({top:0,behavior:'smooth'});});
}
document.addEventListener('keydown',event=>{
  if(step<0||step>3||!document.querySelector('.question-screen')||event.altKey||event.ctrlKey||event.metaKey)return;
  if(['1','2','3'].includes(event.key)){choose(Number(event.key)-1);}
  if(event.key==='Enter'&&picked!==null&&event.target.tagName!=='BUTTON'){advance();}
});
renderWelcome();
