document.addEventListener('DOMContentLoaded', () => {
  const h = location.hash.match(/article-(\d+)/i);
  if (h) {
    const n = h[1];
    const el = Array.from(document.querySelectorAll('details'))[n-1];
    if (el) { el.open = true; el.scrollIntoView({behavior:'smooth', block:'start'}); }
  }
});
