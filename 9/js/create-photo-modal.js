import {photos} from './create-photo-description.js';
import {modal} from './modal.js';
import {renderComments} from './render-comments.js';

function createPhotoModal (photoId) {
  const currentPhoto = photos.find((photo) => photo.id === Number(photoId));

  modal.querySelector('.big-picture__img').querySelector('img').src = currentPhoto.url;
  modal.querySelector('.likes-count').textContent = currentPhoto.likes;
  modal.querySelector('.social__caption').textContent = currentPhoto.description;

  renderComments(currentPhoto.comments);
}

export {createPhotoModal};
