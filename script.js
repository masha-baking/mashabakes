// Simple click-to-enlarge lightbox for entry photos
document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  document.querySelectorAll('.entry-photo img').forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  lightbox.addEventListener('click', function () {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    }
  });
});
