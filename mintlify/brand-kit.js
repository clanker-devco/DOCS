// Brand Assets page: copy hex codes on click or keyboard, and open logo SVGs in a new tab.
const swatchSelector = 'img[src*="/assets/clanker-color-"]';

let status;
function announce(message) {
  if (!status) {
    status = document.createElement('div');
    status.setAttribute('role', 'status');
    status.style.cssText =
      'position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
    document.body.append(status);
  }
  status.textContent = '';
  setTimeout(() => (status.textContent = message), 50);
}

function showStatus(cell, message) {
  cell.dataset.copyStatus = message;
  clearTimeout(cell.copyStatusTimer);
  cell.copyStatusTimer = setTimeout(() => delete cell.dataset.copyStatus, 3000);
}

function copyHex(cell) {
  const hex = cell.querySelector(swatchSelector).alt;
  const code = cell.querySelector('code');
  Promise.resolve()
    .then(() => navigator.clipboard.writeText(hex))
    .then(
      () => {
        showStatus(cell, 'Copied');
        announce(`Copied ${hex}`);
      },
      () => {
        if (code) window.getSelection().selectAllChildren(code);
        showStatus(cell, 'Press Ctrl+C to copy');
        announce(`Could not copy ${hex}. The code is selected, press Ctrl+C to copy it.`);
      },
    );
}

// Make each hex code a keyboard-focusable button. Re-run as Mintlify renders new pages.
function enhance() {
  for (const swatch of document.querySelectorAll(swatchSelector)) {
    const code = swatch.closest('td')?.querySelector('code');
    if (!code || code.hasAttribute('data-copy-hex')) continue;
    code.setAttribute('data-copy-hex', '');
    code.setAttribute('role', 'button');
    code.setAttribute('tabindex', '0');
    code.setAttribute('aria-label', `Copy hex code ${swatch.alt}`);
  }
}
let pending = false;
new MutationObserver(() => {
  if (pending) return;
  pending = true;
  requestAnimationFrame(() => {
    pending = false;
    enhance();
  });
}).observe(document.documentElement, { childList: true, subtree: true });
enhance();

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
    if (!cell?.querySelector(swatchSelector)) return;
    event.preventDefault();
    event.stopPropagation();
    copyHex(cell);
  },
  true,
);

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const code = event.target.closest?.('[data-copy-hex]');
  if (!code) return;
  event.preventDefault();
  copyHex(code.closest('td'));
});
