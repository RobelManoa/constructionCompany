// loader code
window.addEventListener('load', function(){
    setTimeout(function(){
        document.querySelector('#preloader').style.display = 'none';
    }, 1000);
});


//filtre code
const buttons = document.querySelectorAll('.filter-button');
const images = document.querySelectorAll('.container img');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    images.forEach(image => {
      if (filter === 'all' || image.dataset.tags.includes(filter)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});