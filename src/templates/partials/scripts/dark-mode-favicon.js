const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateFavicon() {
  const icon = document.querySelector('link[rel=icon]');
  const alternateIcon = document.querySelector('link[rel="alternate icon"]');
  const maskIcon = document.querySelector('link[rel=mask-icon]');
  if (!icon || !alternateIcon || !maskIcon) {
    return;
  }

  if (darkModeQuery.matches) {
    icon.href = '/favicon-dark-mode.svg';
    alternateIcon.href = '/favicon-dark-mode.png';
    maskIcon.href = '/favicon-dark-mode.svg';
  } else {
    icon.href = '/favicon.svg';
    alternateIcon.href = '/favicon.png';
    maskIcon.href = '/favicon.svg';
  }
}

darkModeQuery.addEventListener('change', updateFavicon);
updateFavicon();
