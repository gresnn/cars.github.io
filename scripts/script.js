

//*alert("Скрипт подключён !");
//document.querySelector("h1").style.color = "red";
//document.getElementById("main-action-button").onclick = function() {
//  alert("НАЖАЛИ КНОПКУ !");
//}

const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');
console.log(filterItems);
console.log(carItems);
console.log(carsContent);
filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLocaleLowerCase();
    console.log(filterText);
    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car
          .querySelector('h4')
          .textContent.toLocaleLowerCase()
          .includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

/////////////////
const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

document.getElementById('order-action').addEventListener('click', function () {
  const fields = [carField, nameField, phoneField];
  let hasError = false;
  fields.forEach((field) => {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red';
      hasError = true;
    } else {
      field.style.borderColor = 'white';
    }
  });

  // Дополнительно проверяем длину телефонного номера
  if (phoneField.value.length < 10) {
    phoneField.style.borderColor = 'red';
    alert('Номер телефона должен быть не менее 10 символов!');
    hasError = true;
  } else {
    phoneField.style.borderColor = 'white';
  }

  if (!hasError) {
    alert('Спасибо за заявку! Мы скоро связемся с вами!');
    fields.forEach((field) => (field.value = ''));
  }
});
