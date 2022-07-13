export const paintCards = () => {
  let elem = document.body.querySelector('li');
  let count = 1;
  while (elem) {
    if (count % 2) elem.style.backgroundColor = 'red';
    elem = elem.nextElementSibling;
    count++;
  }
};

export const findElement = () => {
  let elem = document.body.querySelector('li');
  while (elem) {
    if (elem.matches('.likedItem')) elem.style.backgroundColor = 'blue';
    elem = elem.nextElementSibling;
  }
};
