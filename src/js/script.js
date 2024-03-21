'use strict';
const DATA_KEY = 'formData';

(function () {
  const formData = () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', evt => {
      evt.preventDefault();
      const elements = evt.target.querySelectorAll('input, textarea, select');

      const data = {};

      elements.forEach((input) => {
        if (input.value.trim() !== '') {
          data[input.name] = input.value;
        }
      });

      if (Object.keys(data).filter(key => key !== 'terms').length === 0) {
        const main = document.querySelector('main');
        main.innerHTML = 'Немає даних для відображення';
        return;
      }
      localStorage.setItem(DATA_KEY, JSON.stringify(data));
      evt.target.reset();
      const url = location.origin + '/JS_HOMEWORKS/src/new.html';
      window.open(url, '_blank');
    });
  };

  const renderData = () => {
    const data = JSON.parse(localStorage.getItem(DATA_KEY));
    const dataContainer = document.querySelector('.data-container');
    const main = document.querySelector('main');
    if (!data) {
      main.innerHTML = 'Немає даних для відображення';
      return;
    }

    const ul = document.createElement('ul');

    for (const key in data) {
      const li = document.createElement('li');
      li.innerHTML = `<b>${key}:</b> <i>${data[key]}</i>`;
      ul.append(li);
    }
    dataContainer.innerHTML = '';
    dataContainer.append(ul);
  };

  if (location.pathname.includes('index.html')) {
    formData();
  } else if (location.pathname.includes('new.html')) {
    renderData();
  }
})();
