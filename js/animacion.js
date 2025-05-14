const image = document.getElementById('image');
  const text = document.getElementById('text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(image);
  observer.observe(text);
