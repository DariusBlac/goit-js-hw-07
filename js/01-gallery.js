import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');

const markup = galleryItems
    .map(element => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img class="gallery__image" src="${element.preview}"
    data-source="${element.original}" alt="${element.description}"/></a>
    </li>`
    })
    .join("")

ulEl.insertAdjacentHTML('afterbegin', markup);
 
ulEl.addEventListener('click', options);

function options(event) {
    event.preventDefault();
    const isImgClick = event.target.classList.contains('gallery__image');
    const srcOriginalImg = event.target.dataset.source;
    if (!isImgClick) {
        return;
    };

    const instance = basicLightbox.create(`<img width="1280" src="${srcOriginalImg}">`);

    instance.show();

    ulEl.addEventListener('keydown', closedEsc);

    function closedEsc(event) {
        if (event.code === 'Escape') {
            instance.close();
            ulEl.removeEventListener('keydown', closedEsc);
        }
    }
}

