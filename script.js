const switchModoDark = document.querySelector('#switchModoDark');
const body = document.querySelector('body');

switchModoDark.addEventListener('change', (c) => {
    var modo = c.target.checked ? 'dark':'light';
    body.setAttribute('data-bs-theme', modo);
});
