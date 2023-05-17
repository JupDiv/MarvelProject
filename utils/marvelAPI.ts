const axios = require('axios');

import { MarvelApiTypes } from '../entities/marvelApi';

const publicKey = '94bef3ae633d58c11751efe1409942a3';
const privateKey = '621bae30c583f24e4bc95594da2f5c95bfc1c6ed';
const ts = new Date().getTime().toString();
const hash = require('crypto')
  .createHash('md5')
  .update(ts + privateKey + publicKey)
  .digest('hex');

const getMarvelHeroes = async (): Promise<MarvelApiTypes> => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error();
  }
};

export default getMarvelHeroes;
