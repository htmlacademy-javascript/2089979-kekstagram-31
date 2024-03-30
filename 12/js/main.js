import './util.js';
import './modal.js';
import './upload-photo-preview.js';
import {configFilter} from './filter.js';
import {savePhotos} from './create-photo-modal.js';
import {getData} from './api.js';
import {setUserFormSubmit, closeUploadForm} from './img-upload-form.js';
import {renderUsersPhotos} from './create-miniature.js';

const bootstrap = async () => {
  const data = await getData();
  savePhotos(data);
  renderUsersPhotos(data);
  configFilter(data);
};

bootstrap();
setUserFormSubmit(closeUploadForm);
