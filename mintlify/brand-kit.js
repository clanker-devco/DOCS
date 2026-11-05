// Brand Assets page: copy hex codes on click and open logo SVGs in a new tab.
document.addEventListener(
  'click',
  (event) => {
    const link = event.target.closest('a[href*="/assets/clanker-logo-"]');
    if (link) {
      event.preventDefault();
      event.stopPropagation();
      window.open(link.href, '_blank', 'noopener');
      return;
    }

    const cell = event.target.closest('td');
    const swatch = cell?.querySelector('img[src*="/assets/clanker-color-"]');
    if (!swatch) return;
    event.preventDefault();
    event.stopPropagation();
    const code = cell.querySelector('code');
    navigator.clipboard.writeText(swatch.alt).then(() => {
      if (!code) return;
      code.textContent = 'Copied';
      clearTimeout(code.resetTimer);
      code.resetTimer = setTimeout(() => (code.textContent = swatch.alt), 1200);
    });
  },
  true,
);
