'use strict'

//MODAL WINDOW
let modalWindow = document.getElementById('videoModal');
let modalBtn = document.getElementById('btnPlayVideo');
let modalClose = document.getElementsByClassName('video-modal__close');

modalBtn.onclick = function() {
    modalWindow.style.opacity = '1';
    modalWindow.style.pointerEvents = 'auto';
}

window.onclick = function(event) {
    if (event.target == modalWindow) {
        modalWindow.style.opacity = '0';
        modalWindow.style.pointerEvents = 'none';
    } 
}

let closeModal_X = function() { 
    modalWindow.style.opacity = '0';
    modalWindow.style.pointerEvents = 'none';
}
//----------