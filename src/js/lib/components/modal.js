// import $ from '../core';

// $.prototype.modal = function() {
//     for (let i = 0; i < this.length; i++) {
//         const target = this[i].getAttribute('data-target');
//         $(this[i]).click((e) => {
//             e.preventDefault();
//             $(target).fadeIn(500);
//             document.body.style.overflow = 'hidden';
//         });
//     }

//     const closeElements = document.querySelectorAll('[data-close]');
//     closeElements.forEach(elem => {
//         $(elem).click(() => {
//             $('.modal').fadeOut(500);
//             document.body.style.overflow = '';
//         });
//     });

//     $('.modal').click(e => {
//         if (e.target.classList.contains('modal')) {
//             $('.modal').fadeOut(500);
//             document.body.style.overflow = '';
//         }
//     });
// };

// $('[data-toggle="modal"]').modal();


function modalWindow(btnsOpen, windowModal) {
    const btnsOpenWindow = document.querySelectorAll(btnsOpen);
    const modal = document.querySelector(windowModal);
    const modalDialog = modal.firstElementChild;
    const btnsClose = document.querySelectorAll('[data-close-modal]');
    const focusableElements = modal.querySelectorAll('[tabindex="0"]');    
    const scroll = calcScroll();
    let lastFocus;

    btnsOpenWindow.forEach(el => { el.addEventListener('click', showModal) });

    btnsClose.forEach(el => { el.addEventListener('click', closeModal) });

    modal.addEventListener('click', (e) => { if (e.target === modal) { closeModal() } });

    function showModal() {
        lastFocus = document.activeElement;

        modal.classList.add('visial');
        modalDialog.classList.remove('close');
        modalDialog.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        focusableElements[1].focus();

        modal.addEventListener('keydown', function (e) {
            if (e.keyCode === 9) {
                if (e.shiftKey) {
                    if (document.activeElement === focusableElements[0]) {focusableElements[focusableElements.length - 1].focus() }
                } else {
                    if (document.activeElement === focusableElements[focusableElements.length - 1]) { focusableElements[0].focus() }
                }
            }

            if (e.keyCode === 27) { closeModal() }
        });
    }

    function closeModal() {
        modalDialog.classList.remove('open');
        modalDialog.classList.add('close');
        setTimeout(function () {
            modal.classList.remove('visial');
            document.body.removeAttribute('style');
            lastFocus.focus();
        }, 200);
    }

    function calcScroll() {
        const div = document.createElement('div');
        div.setAttribute('style', 'width: 50px; height: 50px; overflow-y: scroll; visibility: hidden;');    
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
}

modalWindow('.trigger', '#modal')