function updateAuthLinks(isLoggedIn) {
  const loginLink = document.querySelector('[data-login-link]');
  const accountLink = document.querySelector('[data-account-link]');
  if (!loginLink || !accountLink) {
    return;
  }

  if (isLoggedIn) {
    loginLink.setAttribute('hidden', true);
    accountLink.removeAttribute('hidden');
  } else {
    loginLink.removeAttribute('hidden');
    accountLink.setAttribute('hidden', true);
  }
}

document.addEventListener('user-logged-in', function() {
  updateAuthLinks(true);
});

document.addEventListener('user-logged-out', function() {
  updateAuthLinks(false);
});