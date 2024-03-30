const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const effectsPhotoPreview = document.querySelectorAll('.effects__preview');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

  if (matches) {
    const url = URL.createObjectURL(file);
    preview.src = url;
    effectsPhotoPreview.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  }
});
