import {createPhotoModal} from './create-photo-modal.js';
import {picturesList} from './create-miniature.js';
import {clearComments} from './render-comments.js';
import {isEscapeKey} from './util.js';
import {imgUploadForm, imgUploadOverlay} from './img-upload-form.js';

const modal = document.querySelector('.big-picture');
const closeModalBtn = document.querySelector('.big-picture__cancel');

const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCancel = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)
    && !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description')) {
    evt.preventDefault();
    closePhotoModal();
    closeUploadForm();
  }
};

function openUploadForm () {
  imgUploadForm.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUploadForm () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadForm.reset();

  document.removeEventListener('keydown', onDocumentKeydown);
}

imgUploadInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  openUploadForm();
});

imgUploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUploadForm();
});

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

  if (currentPictureItem) {
    evt.preventDefault();
    createPhotoModal(currentPictureItem.dataset.photoId);
    openPhotoModal();
  }
});

closeModalBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePhotoModal();
});

export {modal};
