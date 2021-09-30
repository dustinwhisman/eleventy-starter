import { observeAuthState } from './utilities/auth/observe-auth-state.js';
import { reauthenticateUser } from './utilities/auth/reauthenticate-user.js';
import { updateUserEmail } from './utilities/auth/update-user-email.js';

(() => {
  let isLoggedIn = false;

  const revealElement = (selector) => {
    const element = document.querySelector(selector);
    element.removeAttribute('hidden');
  };

  const handleLoggedInEvent = () => {
    // prevent reauthentication from triggering this again
    if (isLoggedIn) {
      return;
    }

    isLoggedIn = true;

    reauthenticateUser(
      () => { revealElement('[data-update-email-form]') },
      () => { revealElement('[data-reauthentication-failure]') },
    );
  };

  const handleLoggedOutEvent = () => {
    revealElement('[data-logged-out]');
  };

  document.addEventListener('user-logged-in', handleLoggedInEvent);
  document.addEventListener('user-logged-out', handleLoggedOutEvent);

  document.addEventListener('submit', (event) => {
    if (event.target.matches('[data-update-email-form]')) {
      event.preventDefault();

      const newEmail = event.target.elements['new-email'].value;
      updateUserEmail(
        newEmail,
        () => { revealElement('[data-success-message]') },
        () => { revealElement('[data-failure-message]') },
      );
    }
  });

  observeAuthState();
})();
