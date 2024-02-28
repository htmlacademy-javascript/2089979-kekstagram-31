import {getRandomInteger, getUniqueNumber, getRandomArrayElement} from './util.js';

const PUBLISHED_IMG_COUNT = 25;

// Массив имен для комментариев
const NAMES = [
  'Иван',
  'Георгий',
  'Родион',
  'Марина',
  'Александра',
  'Наталия',
  'Павел',
];

// Описание фото
const DESCRIPTION = [
  'Прогулка по набережной',
  'Мой день рождения',
  'Сегодня экзамен',
  'Скучаю',
];

// Текст комментария
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const photoId = getUniqueNumber ();
const commentId = getUniqueNumber ();
const urlNumber = getUniqueNumber ();
const avatarNumber = getRandomInteger(1, 6);
const likesCount = getRandomInteger(15, 200);
const commentsCount = getRandomInteger(0, 30);

const getComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${avatarNumber}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

// Функция создания объекта
const createPhotoDescription = () => ({
  id: photoId(),
  url: `photos/${urlNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: likesCount,
  comments: Array.from({length: commentsCount}, getComment),
});

const photoDescription = Array.from({length: PUBLISHED_IMG_COUNT}, createPhotoDescription);

photoDescription();
