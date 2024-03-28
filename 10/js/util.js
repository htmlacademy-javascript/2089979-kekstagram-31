// const ALERT_SHOW_TIME = 5000;

// Функция получения рандомного числа
// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// Функция создания уникального числа
// const getUniqueNumber = () => {
//   let number = 1;
//   return function () {
//     return number++;
//   };
// };

// Функция получения рандомного элемента массива
// const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num % 10 === 0 || num % 100 > 4 && num % 100 < 21) {
    return genitivePlural;
  }
  return num % 10 === 1 ? nominative : genitiveSingular;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const closeAlert = () => {
  document.querySelector('.error').remove();
  document.querySelector('.success').remove();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeAlert();
  }
};

const showErrorAlert = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorBtn = errorTemplate.querySelector('.error__button');
  const error = errorTemplate.cloneNode(true);

  document.body.append(error);

  errorBtn.addEventListener('click', () => {
    error.remove();
  });

  document.addEventListener('keydown', onDocumentKeydown);
};

const showSuccessAlert = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successBtn = successTemplate.querySelector('.success__button');
  const success = successTemplate.cloneNode(true);

  document.body.append(success);

  successBtn.addEventListener('click', () => {
    success.remove();
  });

  document.addEventListener('keydown', onDocumentKeydown);
};

export {numDecline, showErrorAlert, showSuccessAlert, isEscapeKey};
