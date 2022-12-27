document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.querySelectorAll('.cite')).forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            const citeId = e.target.href.substring(e.target.href.indexOf('#') + 1);

            let citeBox = document.querySelector('.cite-box');

            if (!citeBox) {
                const el = document.createElement('div');
                el.classList.add('cite-box');
                const innerEl = document.createElement('div');
                innerEl.classList.add('cite-box--inner');
                const closeButton = document.createElement('button');
                closeButton.classList.add('cite-box--close');
                closeButton.innerHTML = 'X';
                closeButton.addEventListener('click', () => {
                    document.querySelector('.cite-box').classList.add('hide');
                });
                el.appendChild(innerEl);
                el.appendChild(closeButton);
                document.querySelector('.post-content').childNodes[0].appendChild(el);
                citeBox = document.querySelector('.cite-box');
            }

            const hide = citeBox.dataset.citeId === citeId && !citeBox.classList.contains('hide');

            if (hide) {
                citeBox.classList.add('hide');
                return;
            } else {
                citeBox.classList.remove('hide');
            }

            citeBox.dataset.citeId = citeId;
            citeBox.style.top = `${e.target.offsetTop + e.target.offsetHeight}px`;
            citeBox.querySelector('.cite-box--inner').innerHTML = document.querySelector(`li#${citeId}`).innerHTML;

        });
    });
});
