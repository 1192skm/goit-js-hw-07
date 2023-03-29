import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
      return;
    }

    const originalImage = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img
      src="${originalImage}"
    />
`);
    instance.show();

    if (basicLightbox.visible()) {
        window.addEventListener("keydown", closeModal);
    }

    function closeModal(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        } 
    }
}
