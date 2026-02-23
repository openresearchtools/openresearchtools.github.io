const cards = [...document.querySelectorAll('.tool-cube')];

cards.forEach((card, index) => {
  card.setAttribute('data-index', String(index));

  const shell = card.querySelector('.tool-cube-shell');
  if (!shell) {
    return;
  }

  const activate = (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    shell.style.transform = `translateY(-4px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
  };

  const reset = () => {
    shell.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
  };

  card.addEventListener('pointermove', activate);
  card.addEventListener('pointerleave', reset);
  card.addEventListener('focusin', () => {
    shell.style.transform = 'translateY(-2px)';
  });
  card.addEventListener('focusout', reset);
});

requestAnimationFrame(() => {
  cards.forEach((card, index) => {
    card.style.setProperty('--index', index);
  });
});
