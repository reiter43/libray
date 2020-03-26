function check(checkInputs) {
    document.querySelectorAll(checkInputs).forEach(el => {
        el.addEventListener('input', () => {
            if (el.checked) { el.setAttribute('aria-checked', 'true') }
            else { el.setAttribute('aria-checked', 'false') };
        })
    });
}

check('.checkbox__input');