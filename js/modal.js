//всплывающее окно
const openModalButton = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalButton = document.getElementById('closeModal');
const cancelModalButton = document.getElementById('cancelModal');


function openModal() {
modalOverlay.classList.add('active');
document.body.style.overflow = 'hidden';
}


function closeModal() {
modalOverlay.classList.remove('active');
document.body.style.overflow = '';
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
cancelModalButton.addEventListener('click', closeModal);


modalOverlay.addEventListener('click', function(event) {
if (event.target === modalOverlay) {
closeModal();
}
});


document.addEventListener('keydown', function(event) {
if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
closeModal();
}
});

document.getElementById("navigateButton").onclick = function () {
    window.location.href = "test1.html";
};


