// Функция получения рандомного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция создания уникального числа
const getUniqueNumber = () => {
  let number = 1;
  return function () {
    return number++;
  };
};

// Функция получения рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getUniqueNumber, getRandomArrayElement, isEscapeKey};
