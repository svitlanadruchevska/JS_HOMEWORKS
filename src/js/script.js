(function () {
  const saveText = function () {
    const inputField = document.getElementById('inputText');
    const text = inputField.value;
    if (text.trim() !== '') {
      const newElement = document.createElement('p');
      newElement.innerHTML = text;
      const outputDiv = document.getElementById('output');
      outputDiv.prepend(newElement);
      inputField.value = '';
    } else {
      alert('Будь ласка, введіть текст!');
    }
  };
  document.getElementById('saveButton').addEventListener('click', saveText);
})();
