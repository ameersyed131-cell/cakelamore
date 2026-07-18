// ===== Active nav highlight =====
const currentPage = document.body.getAttribute('data-page');
if(currentPage){
  const link = document.querySelector(`nav.links a[data-nav="${currentPage}"]`);
  if(link) link.classList.add('active');
}

// ===== Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if(!loader) return;
  setTimeout(() => loader.classList.add('hide'), 750);
});

// ===== Mobile nav =====
const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav.links');
if(burger){
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ===== Scroll reveal =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); });
}, { threshold: .15 });
document.querySelectorAll('.reveal, .swirl').forEach(el => revealObserver.observe(el));

// ===== Accordion (Policies page) =====
document.querySelectorAll('.accordion-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const body = item.querySelector('.accordion-body');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-body').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// ===== Simple form success message (no backend wired yet) =====
document.querySelectorAll('form[data-demo-form]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-success');
    if(note) note.style.display = 'block';
    form.reset();
  });
});
