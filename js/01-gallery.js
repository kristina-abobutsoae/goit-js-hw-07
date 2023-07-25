import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click",onClickGallery);
setGalleryHtml("beforeend", galleryElCreateMarkup(galleryItems));

function onClickGallery(evt) {
 evt.preventDefault();
 if (evt.target.nodeName !== "IMG"){
     return ;
 }
 openFullImages(evt.target.dataset.source);
}

function galleryElCreateMarkup(galleryItems){
    return galleryItems
    .map(({ preview,original,description}) => {
       return `<li class = "gallery__item">
              <a class ="gallery__link">
              <img
              class ="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
              </a>
       </li>`;
    })
    .join("");
}

function setGalleryHtml(place, gallery){
    galleryList.insertAdjacentHTML(place, gallery);
}

function openFullImages(target){
    const instance  = basicLightbox.create(`<img src="${target}"  width="800" height="600">`,{
        onShow:(instance) =>
        console.log(`keydown`,onCloseEscape),
        onClose:(instance) =>
        console.log(`keydown`,onCloseEscape)
    });
    instance.show();
    console.dir(instance);
   function onCloseEscape(evt) {
        if (evt.code === "Escape") {
        instance.close();
        }
        };
    
}
console.log(galleryItems);
