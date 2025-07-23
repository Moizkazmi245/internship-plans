const cells = document.querySelectorAll('.row .cell');

cells.forEach(cell => {
  cell.addEventListener('mouseenter', () => {
    const colIndex = Array.from(cell.parentNode.children).indexOf(cell);
    document.querySelectorAll(`.row .cell:nth-child(${colIndex + 1})`)
      .forEach(c => c.classList.add('highlight'));
  });

  cell.addEventListener('mouseleave', () => {
    document.querySelectorAll('.cell').forEach(c => c.classList.remove('highlight'));
  });
});
