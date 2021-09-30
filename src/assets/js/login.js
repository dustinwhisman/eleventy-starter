import { observeAuthState } from './utilities/auth/observe-auth-state.js';
import { sendSignInLink } from './utilities/auth/send-sign-in-link.js';

(() => {
  observeAuthState();

  const handleSuccess = (email) => {
    window.localStorage.setItem('emailForSignIn', email);

    const successMessageContainer = document.querySelector('[data-success-message]');
    successMessageContainer.removeAttribute('hidden');
  };

  const handleError = () => {
    const errorMessageContainer = document.querySelector('[data-error-message]');
    errorMessageContainer.removeAttribute('hidden');
  };

  document.addEventListener('submit', (event) => {
    if (event.target.matches('[data-sign-in-form]')) {
      event.preventDefault();

      const url = `${window.location.origin}/login/confirm`;
      const email = event.target.elements['sign-in-email'].value;
      sendSignInLink(url, email, handleSuccess, handleError);
    }
  });
})();
