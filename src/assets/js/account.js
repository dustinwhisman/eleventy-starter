import { observeAuthState } from './utilities/auth/observe-auth-state.js';
import { signUserOut } from './utilities/auth/sign-user-out.js';

(() => {
  const showAccountDetails = (details) => {
    const { email } = details;
    const loggedInAsMessage = document.querySelector('[data-logged-in-as]');
    const emailPhrase = document.querySelector('[data-email-address]');

    loggedInAsMessage.removeAttribute('hidden');
    emailPhrase.textContent = email;
  };

  const showLogoutButton = () => {
    const logoutBlock = document.querySelector('[data-logout-block]');
    logoutBlock.removeAttribute('hidden');
  };

  const handleLoggedInEvent = (event) => {
    showAccountDetails(event.detail);
    showLogoutButton();
  };

  const handleLoggedOutEvent = () => {
    window.location.href = '/';
  };

  document.addEventListener('user-logged-in', handleLoggedInEvent);
  document.addEventListener('user-logged-out', handleLoggedOutEvent);

  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-logout-button]')) {
      signUserOut(handleLoggedOutEvent, console.error);
    }
  });

  observeAuthState();
})();
