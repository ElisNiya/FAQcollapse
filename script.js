// bring in toggle buttons(querySelectorAll)
// loop through nodelist
// add event
//toggle the active class on parent node - parentnode & classlist.toggle

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});