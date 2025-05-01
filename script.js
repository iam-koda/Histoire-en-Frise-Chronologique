document.querySelectorAll('.event-point').forEach(point => {
    point.addEventListener('click', () => {
      const title = point.getAttribute('data-title');
      const details = point.getAttribute('data-details');
  
      const popup = document.querySelector('.event-popup');
      popup.classList.remove('hidden');
      popup.querySelector('.left-text').textContent = title;
      popup.querySelector('.right-text').textContent = details;
  
      const rect = point.getBoundingClientRect();
      const line = popup.querySelector('.line');
      line.style.marginLeft = `${rect.left + rect.width / 2}px`;
    });
  });
  