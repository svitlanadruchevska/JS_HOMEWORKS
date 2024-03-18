(function () {
  const form = document.getElementById('surveyForm');
  const titleInput = document.getElementById('surveyName');
  const addOptionButton = document.getElementById('addOptionButton');

  let fieldsetCount = 1;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fieldsetInputs = document.querySelectorAll('input[name^="option"]');
    const fieldsetValues = Array.from(fieldsetInputs).map(input => input.value.trim());
    if (titleInput.value.trim() === '' || fieldsetValues.length < 2) {
      document.getElementById('error').textContent = 'Назва опитування не може бути порожньою та кількість варіантів відповідей повинна бути не менше двох.';
      return;
    } else {
      document.getElementById('error').textContent = '';
    }
    const surveyNameDisplay = document.getElementById('surveyNameDisplay');
    const surveyOptionsDisplay = document.getElementById('surveyOptionsDisplay');
    surveyNameDisplay.textContent = 'Назва опитування: ' + titleInput.value;
    surveyOptionsDisplay.innerHTML = '';
    fieldsetValues.forEach(function (option) {
      const li = document.createElement('li');
      li.textContent = option;
      surveyOptionsDisplay.appendChild(li);
    });
    document.getElementById('surveyResult').style.display = 'block';
    form.reset();
    fieldsetCount = 1;
  });

  addOptionButton.addEventListener('click', function () {
    const newFieldset = document.createElement('div');
    fieldsetCount++;
    newFieldset.innerHTML = `
            <label for="option${fieldsetCount}">Варіант відповіді ${fieldsetCount}:</label><br>
            <input type="text" id="option${fieldsetCount}" name="option${fieldsetCount}" required placeholder="Варіант відповіді"><br>
        `;
    document.getElementById('optionsContainer').appendChild(newFieldset);
  });
})();
