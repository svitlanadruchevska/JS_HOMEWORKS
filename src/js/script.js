(function () {
  const form = document.getElementById('form');
  const errorMessage = document.getElementById('errorMessage');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (name === '' || email === '' || password === '') {
      errorMessage.style.display = 'block';
    } else {
      alert('Вітаю! Реєстрація успішна!');
      errorMessage.style.display = 'none';
    }
  });
})();
