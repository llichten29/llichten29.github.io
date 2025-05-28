
document.querySelectorAll('.icon-wrapper').forEach(wrapper => {
  const tooltip = wrapper.querySelector('.icon-tooltip');
  wrapper.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
  });
  wrapper.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

document.querySelectorAll('.clickable-image').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modalImg.src = img.src;
    window.location.hash = 'image-modal';
  });
});

 function toggleMatieresCnam(el) {
    const container = el.closest('.matieres-grid-container');
    const grid = container.querySelector('.matieres-cnam-grid');
    const icon = el.querySelector('.chevron i');
    const isVisible = grid.style.display === 'block';
    grid.style.display = isVisible ? 'none' : 'block';
    icon.classList.toggle('bi-chevron-down', isVisible);
    icon.classList.toggle('bi-chevron-up', !isVisible);
  }

  function toggleMatieres(el) {
    const container = el.closest('.matieres-grid-container');
    const grid = container.querySelector('.matieres-grid');
    const icon = el.querySelector('.chevron i');
    const isVisible = grid.style.display === 'block';
    grid.style.display = isVisible ? 'none' : 'block';
    icon.classList.toggle('bi-chevron-down', isVisible);
    icon.classList.toggle('bi-chevron-up', !isVisible);
  }