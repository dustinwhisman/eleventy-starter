import { observeAuthState } from './utilities/auth/observe-auth-state.js';
import { reauthenticateUser } from './utilities/auth/reauthenticate-user.js';
import { deleteAccount } from './utilities/auth/delete-account.js';

(() => {
  let isLoggedIn = false;
  let isDeleted = false;

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
      () => { revealElement('[data-delete-account]'); },
      () => { revealElement('[data-reauthentication-failure]'); },
    );
  };

  const handleLoggedOutEvent = () => {
    if (!isDeleted) {
      revealElement('[data-logged-out]');
    }
  };

  document.addEventListener('user-logged-in', handleLoggedInEvent);
  document.addEventListener('user-logged-out', handleLoggedOutEvent);

  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-delete-account-button]')) {
      isDeleted = true;
      deleteAccount(
        () => { revealElement('[data-success-message]'); },
        () => { revealElement('[data-failure-message]'); },
      );
    }
  });

  observeAuthState();
})();
