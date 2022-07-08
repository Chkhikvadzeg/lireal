const questionDropdownButton = document.querySelectorAll('.question-dropdown-button');
const chevronDown = document.querySelectorAll('.fa-chevron-down');

questionDropdownButton.forEach(n => n.addEventListener("click", () => {
    n.parentElement.parentElement.classList.toggle('active');
    n.classList.toggle('active');
}))