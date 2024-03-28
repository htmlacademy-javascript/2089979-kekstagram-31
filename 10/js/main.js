import './util.js';
import './modal.js';
import {getData} from './api.js';
import {setUserFormSubmit, closeUploadForm} from './img-upload-form.js';
import {renderUsersPhotos} from './create-miniature.js';

const data = await getData();
renderUsersPhotos(data);

setUserFormSubmit(closeUploadForm);

export {data};
