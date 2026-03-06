// Toggle section open / close
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.section h2').forEach(function (heading) {
    heading.addEventListener('click', function () {
      var body = this.nextElementSibling;
      var icon = this.querySelector('.toggle-icon');

      if (body.style.maxHeight && body.style.maxHeight !== '0px') {
        // Collapse
        body.style.maxHeight = '0px';
        body.style.overflow = 'hidden';
        icon.classList.add('collapsed');
      } else {
        // Expand
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.overflow = 'visible';
        icon.classList.remove('collapsed');
      }
    });

    // Initialize: all sections expanded
    var body = heading.nextElementSibling;
    if (body) {
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.overflow = 'visible';
    }
  });
});
