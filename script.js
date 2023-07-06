var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector('.login-link');
var registerLink = document.querySelector('.register-link');
var btn = document.querySelector('.btnLogin-popup');
var closeW = document.querySelector('.icon-close');



registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btn.addEventListener('click', () => {
    wrapper.classList.add('active-pop')
});

closeW.addEventListener('click', () => {
    wrapper.classList.remove('active-pop');
})