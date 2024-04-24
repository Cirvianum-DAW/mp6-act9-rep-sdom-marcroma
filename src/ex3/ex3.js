let uls = document.getElementsByTagName('ul');

Array.from(uls).forEach((ul) => {
  ul.firstElementChild.innerHTML = 'Primer';

  ul.lastElementChild.innerHTML = 'Últim';
});
