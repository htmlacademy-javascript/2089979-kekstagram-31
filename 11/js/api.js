import {dataErrorAlert, showErrorAlert} from './util.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = async (route, errorText, method = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, {method, body});
  if (response.ok) {
    return await response.json();
  } else if (!response.ok) {
    return Promise.reject(errorText());
  }
};

const getData = async () => load(Route.GET_DATA, dataErrorAlert);

const sendData = async (body) => load(Route.SEND_DATA, showErrorAlert, Method.POST, body);

export {getData, sendData};
