const picturesList = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderUsersPhotos = (data) => {
  clearPhotoList();
  const otherUsersPhotoFragment = document.createDocumentFragment();

  data.forEach(({id, url, description, likes, comments}) => {
    const userPhoto = userPhotoTemplate.cloneNode(true);

    userPhoto.dataset.photoId = id;
    userPhoto.querySelector('.picture__img').src = url;
    userPhoto.querySelector('.picture__img').alt = description;
    userPhoto.querySelector('.picture__likes').textContent = likes;
    userPhoto.querySelector('.picture__comments').textContent = comments.length;
    otherUsersPhotoFragment.appendChild(userPhoto);
  });

  picturesList.appendChild(otherUsersPhotoFragment);
};

function clearPhotoList () {
  picturesList.querySelectorAll('a.picture').forEach((item) => item.remove());
}

export {renderUsersPhotos, picturesList};
