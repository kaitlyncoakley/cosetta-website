const categories = {
  pizza: {index:'01 / 04', kicker:'FRESH FROM THE OVEN', title:'A little pizza<br><em>happiness.</em>', description:'From classic cheese to creative specialty pies, there’s always room for another slice.', image:'assets/pizza-store.jpg', alt:'A pepperoni pizza outside Cosetta', samples:['CHEESE PIE','ALLA VODKA','FRESH BURRATA']},
  panini: {index:'02 / 04', kicker:'MADE FOR YOUR LUNCH BREAK', title:'Good things<br><em>between bread.</em>', description:'Thoughtfully made sandwiches, packed with flavor and ready for wherever the day takes you.', image:'assets/pizza-panini.jpg', alt:'Pizza and a panini on an outdoor table', samples:['THE CAPO','COSETTA','FAIRFIELD U']},
  breakfast: {index:'03 / 04', kicker:'A BETTER KIND OF MORNING', title:'Rise, shine<br><em>& take a bite.</em>', description:'Start the day with a breakfast sandwich, an omelette, or something sweet.', image:'assets/breakfast.jpg', alt:'Breakfast sandwich held outside Cosetta', samples:['THE STAG','THE LUDLOWE','BUTTERMILK PANCAKES']},
  coffee: {index:'04 / 04', kicker:'SIP SOMETHING GOOD', title:'Coffee first.<br><em>Dolce, too.</em>', description:'A simple espresso, an iced latte, or a little something sweet for your afternoon.', image:'assets/coffee.jpg', alt:'Friends holding iced coffees at Cosetta', samples:['CAFFÉ LATTE','CAPPUCCINO','CANNOLI']}
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  const item=categories[tab.dataset.category];
  tabs.forEach(t=>{let selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1});
  document.getElementById('menu-panel').setAttribute('aria-labelledby',tab.id);
  document.getElementById('menu-index').textContent=item.index;
  document.getElementById('menu-kicker').textContent=item.kicker;
  document.getElementById('menu-title').innerHTML=item.title;
  document.getElementById('menu-description').textContent=item.description;
  const image=document.getElementById('menu-image');image.src=item.image;image.alt=item.alt;
  document.getElementById('menu-samples').replaceChildren(...item.samples.map(text=>{const span=document.createElement('span');span.textContent=text;return span}));
}
tabs.forEach((tab,i)=>{tab.tabIndex=i===0?0:-1;tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let j=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[j].focus();selectTab(tabs[j])})});
const toggle=document.querySelector('.nav-toggle'),nav=document.getElementById('main-nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
