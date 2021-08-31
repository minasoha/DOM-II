// Your code goes here
const aTags = document.querySelectorAll('.nav a');
const logo = document.querySelector('header .logo-heading');
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

signUp.forEach(signUp =>{
    signUp.addEventListener('mouseleave', event =>{
       event.target.style.backgroundColor = 'purple';
  }, 1000);
 }, false);

 
logo.addEventListener('dblclick', function(event){
    logo.style.fontSize = '1rem';

    setTimeout(function(){
        logo.style.fontSize = '4rem';
    }, 500);
}, false);

document.addEventListener('keydown', logKey);

function logKey(e) {
    logo.textContent += ` ${e.code}`;

    setTimeout(function(){
        logo.textContent = 'Fun Bus';
    }, 500);
  }