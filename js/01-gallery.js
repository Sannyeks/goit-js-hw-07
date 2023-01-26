import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const itemsMarkup = galleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend',itemsMarkup);

function galleryItemsMarkup(galleryItems){
    return galleryItems
    .map( ({preview,original,description}) => 
   {return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image lazyload"
            data-src=${preview}
            loading="lazy"
            data-source= ${original}
            alt= ${description}
            />
        </a>
    </div>`;
})
.join('');
};

gallery.addEventListener('click',selectGalleryElem);

function selectGalleryElem(evt){
    evt.preventDefault();
    const selectedGalleryElem = evt.target.dataset.source;
    if (evt.target.nodeName !== 'IMG'){
        return;
    }

    const instance = basicLightbox.create(`
    <img src=${selectedGalleryElem}>`
    )
    instance.show()

    gallery.addEventListener('keydown',(evt) =>{
        if(evt.code === 'Escape'){
            console.log('close modal');
            instance.close();
        }
    });
};

if('loading' in HTMLImageElement.prototype){
    const lazyImg = document.querySelectorAll('img[loading="lazy"]');
    lazyImg.forEach(img =>{
        img.src = img.dataset.src;
    });
}





