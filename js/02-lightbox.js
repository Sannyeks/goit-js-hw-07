import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const itemsMarkup = galleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend',itemsMarkup);

function galleryItemsMarkup(galleryItems){
    return galleryItems
    .map( ({preview,original,description}) => 
   {return `<a class="gallery__item" href=${original}>
            <img class="gallery__image lazyload" 
            data-src=${preview} 
            loading="lazy"
            alt=${description} 
            />
            </a>`;
})
.join('');
};

new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionsDelay: 250,
}
);

if('loading' in HTMLImageElement.prototype){
    const lazyImg = document.querySelectorAll('img[loading="lazy"]');
    lazyImg.forEach(img =>{
        img.src = img.dataset.src;
    });
}
