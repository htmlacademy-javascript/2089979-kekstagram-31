import {onDocumentKeydown} from './modal.js';
import {onPhotoEffectChange} from './slider-effects.js';
import {error, isHashtagValid} from './hashtag-validity.js';

const SCALE_STEP = 0.25;

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const smallerBtn = imgUploadForm.querySelector('.scale__control--smaller');
const biggerBtn = imgUploadForm.querySelector('.scale__control--bigger');
const imgPreview = imgUploadForm.querySelector('.img-upload__preview img');
const scaleControl = imgUploadForm.querySelector('.scale__control--value');
const effectsLevel = imgUploadForm.querySelector('.img-upload__effect-level');
const effectsList = imgUploadForm.querySelector('.effects__list');
const inputHashtag = imgUploadForm.querySelector('.text__hashtags');

let scale = 1;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const onHashtagInput = () => {
  isHashtagValid(inputHashtag.value);
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    inputHashtag.value = inputHashtag.value.trim().replaceAll(/\s+/g, ' ');
    imgUploadForm.submit();
  }
};

const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    imgPreview.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBiggerClick = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    imgPreview.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

function openUploadForm () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUploadForm () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  scale = 1;
  imgPreview.style.transform = `scale(${scale})`;
  effectsLevel.classList.add('hidden');
  imgPreview.style.filter = 'none';
  imgUploadForm.reset();

  document.removeEventListener('keydown', onDocumentKeydown);
}

pristine.addValidator(inputHashtag, isHashtagValid, error, 2, false);

inputHashtag.addEventListener('input', onHashtagInput);
imgUploadForm.addEventListener('submit', onFormSubmit);
smallerBtn.addEventListener('click', onSmallerClick);
biggerBtn.addEventListener('click', onBiggerClick);
effectsList.addEventListener('change', onPhotoEffectChange);

export {imgUploadForm, openUploadForm, closeUploadForm};
