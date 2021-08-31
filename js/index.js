// Your code goes here
const aTags = document.querySelectorAll('.nav a');
const logo = document.querySelector('header.logo-heading');
const funPicture = document.querySelectorAll('.img-content');
const signUp = document.querySelectorAll('.btn');
const welcome = document.querySelector('.intro h2');



aTags.forEach(aTags =>{
    aTags.addEventListener('mouseenter', function(event){
        event.target.style.color = 'green';
    
        setTimeout(function(){
            event.target.style.color = '';
        },500);
    }, false);
});

funPicture.forEach(funPicture => {
    funPicture.addEventListener('click', function(event){
        event.target.style.borderRadius = '0';

        setTimeout(function(){
            event.target.style.borderRadius = '10px';
        }, 500);
    }, false);
});

document.addEventListener('keydown', logKey);

function logKey(e) {
    logo.textContent += ` ${e.code}`;
  };

signUp.forEach(signUp =>{
    signUp.addEventListener('mouseleave', event =>{
       event.target.style.color = 'purple';
        event.target.style.color = '';
  }, 1000);
 }, false);

 function confirm(event){
    welcome.classList.remove('.intro');
    logo.classList.add('.logo-heading')

 }

 welcome.addEventListener('mouseenter', confirm);