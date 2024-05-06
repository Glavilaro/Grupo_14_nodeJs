
  document.querySelector('.discount-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
  });

  function closePopup() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
  }
