import {photoDescription} from './create-photo-description.js';

const picturesList = document.querySelector('.pictures');

const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherUsersPhoto = photoDescription();

const otherUsersPhotoFragment = document.createDocumentFragment();

otherUsersPhoto.forEach(({url, description, likes, comments}) => {
  const userPhoto = userPhotoTemplate.cloneNode(true);
  userPhoto.querySelector('.picture__img').src = url;
  userPhoto.querySelector('.picture__img').alt = description;
  userPhoto.querySelector('.picture__likes').textContent = likes;
  userPhoto.querySelector('.picture__comments').textContent = comments.length;
  otherUsersPhotoFragment.appendChild(userPhoto);
});

picturesList.appendChild(otherUsersPhotoFragment);

export {picturesList, otherUsersPhoto};
