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

const DESCRIPTION = [
  'Прогулка по набережной',
  'Мой день рождения',
  'Сегодня экзамен',
  'Скучаю',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Функция получения рандомного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// Функция создания уникального числа
const getUniqueNumber = () => {
  let number = 0;
  return function () {
    number += 1;
    return number;
  };
};

const photoId = getUniqueNumber ();
const commentId = getUniqueNumber ();
const urlNumber = getUniqueNumber ();

// Функция получения рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

// Функция создания объекта
const createPhotoDescription = () => ({
  id: photoId(),
  url: `photos/${urlNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, getComment),
});

const photoDescription = Array.from({length: PUBLISHED_IMG_COUNT}, createPhotoDescription);

photoDescription();
