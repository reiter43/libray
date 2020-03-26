// import $ from '../core';

// $.prototype.tab = function() {
//     for (let i = 0; i < this.length; i++) {
//         $(this[i]).on('click', () => {
//             $(this[i])
//                 .addClass('tab__item--active')
//                 .siblings()
//                 .removeClass('tab__item--active')
//                 .closest('.tab')
//                 .find('.tab__panel')
//                 .removeClass('tab__panel--active')
//                 .eq($(this[i]).index())
//                 .addClass('tab__panel--active');
//         });
//     }
// };

// $('[data-tabpanel] .tab__item').tab();


function tab(itemsSelector, contentstSelector) {
    const tabs = document.querySelectorAll(itemsSelector);
    const panels = document.querySelectorAll(contentstSelector);
    const tabList = tabs[0].parentNode;

    function hideTab() {
        panels.forEach(el => {
            el.setAttribute('hidden', '');            
        });

        tabs.forEach(el => {
            el.classList.remove('active');
            el.setAttribute('aria-selected', 'false');
        });
    }

    function showTab(elem, tab) {
        elem.removeAttribute('hidden');
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
    }

    tabList.addEventListener('click', run);

    if (tabs[0].tagName != 'button') {
        tabList.addEventListener('keydown', (event) => {
            if (event.keyCode == 13 || event.keyCode == 32) { run(event) }
        });
    }

    function run(e) {
        const target = e.target;

        if (target && (target.classList.contains(itemsSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(itemsSelector.replace(/\./, "")))) {
            tabs.forEach(el => {
                if (target == el || target.parentNode == el) {
                    hideTab();

                    let id = el.getAttribute('aria-controls');

                    panels.forEach(item => {
                        if (item.getAttribute('id') == id) {
                            showTab(item, el);
                        }
                    })
                }
            });
        }
    };
}

tab('.tab__item', '.tab__panel');