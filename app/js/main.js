// hero section typing text

let typed = new Typed('#type', 
{
  strings: 
  [
    'Shishir', 
    'from Bangladesh',
    'study on Collage',
  ],
  smartBackspace: true,
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity
});

// header button 

toggleBtn = (idName,class1,class2)=>
{
  if(idName.classList==`${class1}`)
  {idName.classList=`${class2}`;
  idName.style.fontSize='18px'}
  else 
  {idName.classList=`${class1}`;
  idName.style.fontSize='20px';}
}

const colorToggle = document.querySelector('#color-toggle');
const colorIcon = document.querySelector('#color-icon');
const header = document.querySelector('#header');

colorToggle.addEventListener('click',()=>
{
  toggleBtn(colorIcon,'bi bi-brightness-high','bi bi-moon');
  if(colorIcon.classList=='bi bi-moon')
  {document.body.classList.add('dark');}
  else 
  {document.body.classList.remove('dark');}
});

const darkToggle = document.querySelector('#dark-toggle');
const darkIcon = document.querySelector('#dark-icon');

// header container get or hide

darkToggle.addEventListener('click',()=>
{
  toggleBtn(darkIcon,'bi bi-list','bi bi-x-lg');
  if(darkIcon.classList=='bi bi-x-lg')
  {header.style.left='0';}
  else 
  {header.style.left='-100%';}
});

// get my age here

let bornDate = new Date("08/04/2005");
let month = Date.now() - bornDate .getTime();
let age_dt = new Date(month);  
let year = age_dt.getUTCFullYear();
let ageget = Math.abs(year - 1970);
const age = document.querySelector('#age');
age.innerHTML=ageget;

// photos frame open closer 
const photosFrameContainer = document.querySelector('#photos-frame-container');
const photosFrame = document.querySelector('#photos-frame');
const photoFrameClose = document.querySelector('#photo-frame-close');

frameOpen = (img)=>
{
  photosFrameContainer.style.transform='scale(1)';
  photosFrame.src=img;
}

photoFrameClose.addEventListener('click',()=>
{
  photosFrameContainer.style.transform='scale(0)';
  photosFrame.src='';
});

// randoom api for this site 

