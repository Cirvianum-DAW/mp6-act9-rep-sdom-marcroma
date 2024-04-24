var languages = [
  {
    name: 'JavaScript',
    releaseDate: 1995,
    fileExtension: '.js',
    creator: 'Brendan Eich',
  },
  {
    name: 'Java',
    releaseDate: 1995,
    fileExtension: '.java',
    creator: 'James Gosling',
  },
  {
    name: 'PHP',
    releaseDate: 1995,
    fileExtension: '.php',
    creator: 'Rasmus Lerdorf',
  },
  {
    name: 'C++',
    releaseDate: 1985,
    fileExtension: '.cpp',
    creator: 'Bjarne Stroustrup',
  },
];

function tableCreator(dataArray, targetElement) {
  // Crea els elements de la taula
  const table = document.createElement('table');
  table.style.border = '1px solid;';
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  const thead = document.createElement('thead');
  thead.style.border = '1px solid';

  const tbody = document.createElement('tbody');
  tbody.style.border = '1px solid';

  const headerRow = document.createElement('tr');
  headerRow.style.border = '1px solid';

  const th1 = document.createElement('th');
  th1.style.border = '1px solid';
  th1.innerHTML = 'Nom';
  headerRow.appendChild(th1);

  const th2 = document.createElement('th');
  th2.style.border = '1px solid';
  th2.innerHTML = 'Data de Llançament';
  headerRow.appendChild(th2);

  const th3 = document.createElement('th');
  th3.style.border = '1px solid';
  th3.innerHTML = 'Extensió de Fitxer';
  headerRow.appendChild(th3);

  const th4 = document.createElement('th');
  th4.style.border = '1px solid';
  th4.innerHTML = 'Creador';
  headerRow.appendChild(th4);

  thead.appendChild(headerRow);

  table.appendChild(tbody);
  table.appendChild(thead);

  //   TABLE ROW CREATION ===
  dataArray.forEach((element) => {
    const row = document.createElement('tr');
    let data = '';

    let values = Object.values(element);

    values.forEach((value) => {
      data = document.createElement('td');
      data.style.border = '1px solid';

      data.innerHTML = value;

      row.appendChild(data);
    });

    tbody.appendChild(row);
  });
  //   ===

  targetElement.appendChild(table);
}

// Crida a la funció
tableCreator(languages, document.getElementById('table-container'));
