//http://127.0.0.1:5500/index.html?animal=cat
const params= new URLSearchParams(window.location.search);
console.log(params.get('animal'));

const isDog = params.get('animal')=='dog';

const titleElem=document.getElementById('name');

titleElem.textContent=isDog ? DOG_INFO.name: CAT_INFO.name;
const imgElem=document.createElement('ing');
imgElem.setAttribute('src',isDog? DOG_INFO.imageUrl: CAT_INFO.imageUrl);
imgElem.setAttribute('title', titleElem.textContent);

const descElem=document.querySelector('#description');
descElem.appendChild(imgElem);

descElem.innerHTML+= isDog ? DOG_INFO.descriptionHtml:CAT_INFO.descriptionHtml;
const funFactsElem = document.querySelector('#fun-facts');

const funFact= isDog? DOG_INFO.funFacts.shift(): CAT_INFO.funFacts.shift();
const funFactLi= document.createElement('li');
funFactLi.textContent=funFact;
funFactLi.classList.add('fun-fact');
funFactsElem.appendChild(funFactLi);

const newFunFactsBtn= document.querySelector("#new-fun-fact");
newFunFactsBtn.addEventListener('click', ()=> {const funFact= isDog? DOG_INFO.funFacts.shift(): CAT_INFO.funFacts.shift();
const funFactLi= document.createElement('li');
funFactLi.textContent=funFact;
funFactLi.classList.add('fun-fact');
funFactsElem.appendChild(funFactLi);
if((isDog&& DOG_INFO.funFacts.length==0)|| (!isDog&& CAT_INFO.funFacts.length==0)){
    newFunFactsBtn.remove();
}}

)