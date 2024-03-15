(function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (name === '' || email === '' || password === '') {
      alert('Будь ласка, заповніть усі поля');
    } else {
      alert('Реєстрація успішна');
    }
  });
})();
