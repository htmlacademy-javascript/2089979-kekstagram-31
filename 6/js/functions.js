// Функции для тренировки

// Проверка длины строки
function checkStringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

checkStringLength('Hello World', 6);

// Является ли строка палиндромом
function isPalindrome (string) {
  const noSpacesString = string.replaceAll(' ', '');
  const newString = noSpacesString.toUpperCase();

  let palindrome = '';
  for (let i = string.length - 1; i >= 0; i--) {
    palindrome += newString[i];
  }

  if (palindrome === newString) {
    return true;
  }

  return false;
}

isPalindrome('топот');
