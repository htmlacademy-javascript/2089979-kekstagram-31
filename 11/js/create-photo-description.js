// import {getRandomInteger, getUniqueNumber, getRandomArrayElement} from './util.js';
// import {PUBLISHED_IMG_COUNT, NAMES, DESCRIPTION, MESSAGE} from './data.js';

// const photoId = getUniqueNumber();
// const commentId = getUniqueNumber();
// const urlNumber = getUniqueNumber();
// const avatarNumber = () => getRandomInteger(1, 6);
// const likesCount = () => getRandomInteger(15, 200);
// const commentsCount = () => getRandomInteger(0, 30);

// // Функция создания комментариев
// const getComment = () => ({
//   id: commentId(),
//   avatar: `img/avatar-${avatarNumber()}.svg`,
//   message: getRandomArrayElement(MESSAGE),
//   name: getRandomArrayElement(NAMES),
// });

// // Функция создания объекта
// const createPhotoDescription = () => ({
//   id: photoId(),
//   url: `photos/${urlNumber()}.jpg`,
//   description: getRandomArrayElement(DESCRIPTION),
//   likes: likesCount(),
//   comments: Array.from({length: commentsCount()}, getComment),
// });

// const photoDescription = () => Array.from({length: PUBLISHED_IMG_COUNT}, createPhotoDescription);
// const photos = photoDescription();
