
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
