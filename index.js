// toggle for dropdown
const dropdowns = document.getElementsByClassName('dropdown');

for (let i = 0; i < dropdowns.length; ++i) {
    dropdowns[i].addEventListener('click', () => {
        dropdowns[i].classList.toggle('dropdown-active');
    });
}

// close dropdown when click outside
document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
        for (let i = 0; i < dropdowns.length; ++i) {
            dropdowns[i].classList.remove('dropdown-active');
        }
    }
});