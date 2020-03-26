import $ from '../core';

// $.prototype.accordion = function(headActive = 'accordion__head--active', contentActive = 'accordion__content--active', paddings = 40) {
//     for (let i = 0; i < this.length; i++) {
//         $(this[i]).click(() => {
//             $(this[i]).toggleClass(headActive);
//             $(this[i].nextElementSibling).toggleClass(contentActive);

//             if (this[i].classList.contains(headActive)) {
//                 this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
//             } else {
//                 this[i].nextElementSibling.style.maxHeight = "0px";
//             }
//         });
//     }
// };

// $('.accordion__head').accordion();

function accordion(accordionTrigger) {
    const accordionBars = document.querySelectorAll(accordionTrigger);

    if (accordionBars[0].tagName != 'button') {
        accordionBars.forEach(el => {
            el.addEventListener('keydown', (event) => {
                if (event.keyCode == 13 || event.keyCode == 32) { run(el) }
            })
        });
    }

    accordionBars.forEach(el => {
        el.addEventListener('click', () => { run(el) })
    })

    function run(el) {
        el.setAttribute('aria-expanded', false);
        el.classList.toggle('active');
        el.nextElementSibling.classList.toggle('active');

        if (el.classList.contains('active')) {
            el.setAttribute('aria-expanded', true);
            el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + "px";
        } else {
            el.nextElementSibling.style.maxHeight = '0px';
        }

    }
}

accordion('.accordion__head');