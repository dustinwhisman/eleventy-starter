import { auth } from './utilities/auth/auth.js';
import { observeAuthState } from './utilities/auth/observe-auth-state.js';
import { signUserOut } from './utilities/auth/sign-user-out.js';
import { sendSignInLink } from './utilities/auth/send-sign-in-link.js';

(() => {
  const showEmailAddress = (details) => {
    const { email } = details;
    const emailPhrase = document.querySelector('[data-email-address]');

    emailPhrase.textContent = email;
  };

  const showLoggedInState = () => {
    const loggedInBlocks = document.querySelectorAll('[data-logged-in]');
    loggedInBlocks.forEach((block) => {
      block.removeAttribute('hidden');
    });

    const loggedOutBlocks = document.querySelectorAll('[data-logged-out]');
    loggedOutBlocks.forEach((block) => {
      block.setAttribute('hidden', true);
    });
  };

  const showLoggedOutState = () => {
    const loggedInBlocks = document.querySelectorAll('[data-logged-in]');
    loggedInBlocks.forEach((block) => {
      block.setAttribute('hidden', true);
    });

    const loggedOutBlocks = document.querySelectorAll('[data-logged-out]');
    loggedOutBlocks.forEach((block) => {
      block.removeAttribute('hidden');
    });
  };

  const handleLoggedInEvent = (event) => {
    showEmailAddress(event.detail);
    showLoggedInState();
  };

  const handleLoggedOutEvent = () => {
    showLoggedOutState();
  };

  const handleLogoutError = () => {
    const errorMessage = document.querySelector('[data-logout-failure]');
    errorMessage.removeAttribute('hidden');
  };

  const revealMessage = (selector) => {
    const element = document.querySelector(selector);
    element.removeAttribute('hidden');
  };

  document.addEventListener('user-logged-in', handleLoggedInEvent);
  document.addEventListener('user-logged-out', handleLoggedOutEvent);

  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-logout-button]')) {
      signUserOut(handleLoggedOutEvent, handleLogoutError);
      return;
    }

    if (event.target.matches('[data-update-email-button]')) {
      const url = `${window.location.origin}/account/update-email`;
      const { email } = auth.currentUser;
      sendSignInLink(
        url,
        email,
        () => { revealMessage('[data-update-email-success]'); },
        () => { revealMessage('[data-update-email-failure]'); },
      );
    }

    if (event.target.matches('[data-delete-account-button]')) {
      const url = `${window.location.origin}/account/delete-account`;
      const { email } = auth.currentUser;
      sendSignInLink(
        url,
        email,
        () => { revealMessage('[data-delete-account-success]'); },
        () => { revealMessage('[data-delete-account-failure]'); },
      );
    }
  });

  observeAuthState();
})();
