'use strict';

const title = document.querySelectorAll('thead th');
const titleArray = Array.from(title);

const tdName = document.querySelectorAll('tbody tr');
const tdArray = Array.from(tdName);

const tbody = document.querySelector('tbody');

titleArray.forEach((th) => {
  th.addEventListener('click', (e) => {
    const cellIndex = e.target.cellIndex;

    // tdArray.forEach((tr) => {
    //   console.log(tr.cells[cellIndex].textContent);
    // });

    tdArray.sort((rowA, rowB) => {
      const valueA = rowA.cells[cellIndex].textContent;
      const valueB = rowB.cells[cellIndex].textContent;
      return valueA.localeCompare(valueB);
    });

    tbody.innerHTML = '';
    tdArray.forEach((row) => tbody.appendChild(row));
  });
});
