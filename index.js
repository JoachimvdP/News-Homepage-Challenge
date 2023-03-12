const primaryNav = document.querySelector(".navbar"); 
const navToggle = document.querySelector(".mobile-nav-toggle"); 
const overlay = document.querySelector(".overlay");

navToggle.addEventListener('click', () => {
    const visible = primaryNav.getAttribute('data-visible'); 

    if (visible === "false") {
        primaryNav.setAttribute('data-visible', true); 
        navToggle.setAttribute('aria-expanded', true); 
        overlay.setAttribute('data-visible', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        overlay.setAttribute('data-visible', false);
    }
})