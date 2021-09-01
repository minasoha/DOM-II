// Your code goes here
const aTags = document.querySelectorAll('.nav a');
const logo = document.querySelector('header .logo-heading');
const funPicture = document.querySelectorAll('.img-content img');

const signUp = document.querySelectorAll('div .btn');
const welcome = document.querySelector('.intro h2');
const copyRight = document.querySelector('.footer p');
const partyPicture = document.querySelector('.content-destination')
const message = document.querySelector('.content-destination h2')



aTags.forEach(aTags =>{
    aTags.addEventListener('click', event =>{
        event.preventDefault();
    });
});
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
  });
});

 
logo.addEventListener('dblclick', function(){
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

window.addEventListener('load', () => {
    welcome.textContent = 'Welcome back!';
});


document.addEventListener('wheel', function (event) {
    
    let scale = 1;
    if (event.deltaY < 0) {
      
      scale *= event.deltaY * -2;
    }
    else {
      scale /= event.deltaY * 2;
    }
    scale = Math.min(Math.max(.125, scale), 4);
    copyRight.style.transform = `scale(${scale})`;
    
    
});

copyRight.addEventListener('mouseover', function(e){
    e.target.style.color = 'blue';

    setTimeout(function(){
        e.target.style.color = '';
    }, 500);
}, false);



function changeKey(e) {
    copyRight.textContent += ` ${e.code}`;

    setTimeout(function(){
        copyRight.textContent = 'Copyright Fun Bus 2020';
    }, 500);
}
document.addEventListener('keyup', changeKey);

partyPicture.addEventListener('transitionrun', function() {
    message.textContent = 'LETS PARTY!';
    
});

partyPicture.addEventListener('transitionstart', function() {
      message.textContent = 'LETS GO!';
 });

partyPicture.addEventListener('transitioncancel', function() {
    message.textContent = ' NEVER MIND!';
});

partyPicture.addEventListener('transitionend', function() {
    message.textContent = 'NICE !';
    
});

