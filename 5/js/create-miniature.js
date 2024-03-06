import {photoDescription} from './create-photo-description.js';

const picturesList = document.querySelector('.pictures');
const usersPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherUsersPhoto = photoDescription();

const otherUsersPhotoFragment = document.createDocumentFragment();

otherUsersPhoto.forEach(({url, description, likes, comments}) => {
  const usersPhoto = usersPhotoTemplate.cloneNode(true);
  usersPhoto.querySelector('.picture__img').src = url;
  usersPhoto.querySelector('.picture__img').alt = description;
  usersPhoto.querySelector('.picture__likes').textContent = likes;
  usersPhoto.querySelector('.picture__comments').textContent = comments.length;
  otherUsersPhotoFragment.appendChild(usersPhoto);
});

picturesList.appendChild(otherUsersPhotoFragment);
