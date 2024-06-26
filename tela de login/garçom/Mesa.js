document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});

function goToGarcons(button) {
    button.classList.add('clicked');
    setTimeout(function() {
        window.location.href = 'itens.html';
    }, 300);
}
