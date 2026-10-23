// Blinqpay landing page – small enhancements on top of Bootstrap
document.addEventListener('DOMContentLoaded', function () {
  // Close the mobile menu after a link is tapped
  var nav = document.getElementById('mainNav');
  if (nav) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
      });
    });
  }

  var revealSections = document.querySelectorAll('main > section, .site-footer');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealSections.forEach(function (section) {
      section.classList.add('scroll-reveal');
      revealObserver.observe(section);
    });
  }

  // Dim the floating avatar whose review is currently showing
  var carousel = document.getElementById('testimonialCarousel');
  var avatars = document.querySelectorAll('.floating-avatars button');
  if (carousel && avatars.length) {
    carousel.addEventListener('slid.bs.carousel', function (e) {
      avatars.forEach(function (btn) {
        btn.style.opacity = Number(btn.dataset.bsSlideTo) === e.to ? '.45' : '1';
      });
    });
  }
});
