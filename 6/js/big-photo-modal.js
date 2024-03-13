import {picturesList, otherUsersPhoto} from './create-miniature.js';
import {isEscapeKey} from './util.js';

const otherUserPhotoList = picturesList.querySelectorAll('a');
const photoModal = document.querySelector('.big-picture');
const closeModalBtn = document.querySelector('.big-picture__cancel');
const commentsList = photoModal.querySelector('.social__comments');
const commentsListItem = commentsList.querySelector('.social__comment');

const otherUserCommentFragment = document.createDocumentFragment();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

function openPhotoModal () {
  photoModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  photoModal.querySelector('.social__comment-count').classList.add('hidden');
  photoModal.querySelector('.comments-loader').classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closePhotoModal () {
  photoModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

for (let i = 0; i < otherUserPhotoList.length; i++) {
  otherUserPhotoList[i].addEventListener('click', () => {
    photoModal.querySelector('.big-picture__img').querySelector('img').src = otherUsersPhoto[i].url;
    photoModal.querySelector('.likes-count').textContent = otherUsersPhoto[i].likes;
    photoModal.querySelector('.social__caption').textContent = otherUsersPhoto[i].description;
    photoModal.querySelector('.social__comment-shown-count').textContent = document.querySelector('.social__comments').childElementCount;
    photoModal.querySelector('.social__comment-total-count').textContent = otherUsersPhoto[i].comments.length;

    for (let j = 0; j < otherUsersPhoto[i].comments.length; j++) {
      const userComment = commentsListItem.cloneNode(true);
      userComment.querySelector('.social__picture').src = otherUsersPhoto[i].comments[j].avatar;
      userComment.querySelector('.social__picture').alt = otherUsersPhoto[i].comments[j].name;
      userComment.querySelector('.social__text').textContent = otherUsersPhoto[i].comments[j].message;
      otherUserCommentFragment.appendChild(userComment);
    }

    commentsList.appendChild(otherUserCommentFragment);
    openPhotoModal();
  });
}

closeModalBtn.addEventListener('click', () => {
  closePhotoModal();
});
