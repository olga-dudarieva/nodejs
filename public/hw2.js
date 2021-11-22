const list = ['Alex', 'Nina', 'Yuriy', 'Oleg', 'Svitlana'];

const $form = document.querySelector('form');
const $input = $form.querySelector('input');
const $ul = document.querySelector('#list');
const $error = document.querySelector('#listError');

const $errorText = 'Enter Name!!!';
const $maxListLength = 10;

const renderList = () => {
  $ul.innerHTML = '';

  list.forEach((item, index) => {
    const $li = document.createElement('li');
    $li.innerText = `${item} `;

    addBtn($li, index);

    $ul.appendChild($li);
  });
};

const addBtn = ($node, indexOfItem) => {
  const $btn = document.createElement('button');
  $btn.innerText = 'x';
  $btn.addEventListener('click', () => {
    list.splice(indexOfItem, 1);
    if (list.length === $maxListLength - 1) {
      document.querySelector('button').disabled = false;
    }
    renderList();
  });
  $node.appendChild($btn);
};

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = $input;

  if (value) {
    list.push(value);
    renderList();
    $error.innerHTML = '';
    $input.value = '';

    if (list.length === $maxListLength) document.querySelector('button').disabled = true;
  } else {
    $error.innerHTML = `<small>${$errorText}</small>`;
  }
});

renderList();
