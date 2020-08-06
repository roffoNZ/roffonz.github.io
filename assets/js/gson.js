import fetch from 'axios';
import mock from './mock.json';

export async function getData(sheetsURL) {
  const gson = `https://gson.now.sh?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vRo_gRo2HIWYD5adpZdIFY2qGpWdWw-eQ0-kj0yR25DjlMzLZSZ7a70-nOq6EsTw2NugHxriv_9TJiw/pub?gid=0&single=true&output=csv`;

  const grab = await fetch(gson);

  return grab.data;
  // return mock;
}

// old gson link
// const gson = `https://gson.fayazara.now.sh?url=${sheetsURL}`;
