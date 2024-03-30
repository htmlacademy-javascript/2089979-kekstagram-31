import {renderUsersPhotos} from './create-miniature.js';
import {debounce} from './util.js';

const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

let currentFilter = FILTER.default;
let pictures = [];
const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const debounceRender = debounce(renderUsersPhotos);

function onFilterChange (evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

  if (!targetButton.matches('button')) {
    return;
  }

  if (activeButton === targetButton) {
    return;
  }

  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
}

function applyFilter () {
  let filteredPictures = [];

  if (currentFilter === FILTER.default) {
    filteredPictures = pictures;
  }

  if (currentFilter === FILTER.random) {
    filteredPictures = pictures.slice().sort(() => 0.5 - Math.random()).slice(0, 10);
  }

  if (currentFilter === FILTER.discussed) {
    filteredPictures = pictures.slice().sort((a, b) => b.comments.length - a.comments.length);
  }

  debounceRender(filteredPictures);
}

function configFilter (photos) {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = photos;
}

export {configFilter};
