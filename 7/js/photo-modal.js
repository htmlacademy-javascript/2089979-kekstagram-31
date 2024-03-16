import {createPhotoModal} from './create-photo-modal.js';
import {picturesList} from './create-miniature.js';
import {clearComments} from './render-comments.js';
import {isEscapeKey} from './util.js';

const modal = document.querySelector('.big-picture');
const closeModalBtn = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

function openPhotoModal () {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closePhotoModal () {
  clearComments();
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

picturesList.addEventListener('click', (evt) => {
  const currentPictureItem = evt.target.closest('.picture');
  openPhotoModal();

  if (currentPictureItem) {
    evt.preventDefault();
    createPhotoModal(currentPictureItem.dataset.photoId);
  }
});

closeModalBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePhotoModal();
});

export {modal};
