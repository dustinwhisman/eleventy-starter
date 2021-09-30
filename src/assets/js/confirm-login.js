import { observeAuthState } from './utilities/auth/observe-auth-state.js';
import { completeSignIn } from './utilities/auth/complete-sign-in.js';

(() => {
  observeAuthState();

  const handleSuccess = () => {
    window.localStorage.removeItem('emailForSignIn');

    const successMessageContainer = document.querySelector('[data-success-message]');
    successMessageContainer.removeAttribute('hidden');

    window.location.href = '/';
  };

  const handleError = () => {
    const errorMessageContainer = document.querySelector('[data-error-message]');
    errorMessageContainer.removeAttribute('hidden');
  };

  const showConfirmationForm = () => {
    const waitMessage = document.querySelector('[data-wait-message]');
    const form = document.querySelector('[data-confirm-form]');
    waitMessage.setAttribute('hidden', true);
    form.removeAttribute('hidden');
  };

  const emailForSignIn = window.localStorage.getItem('emailForSignIn');
  if (!emailForSignIn) {
    showConfirmationForm();

    document.addEventListener('submit', (event) => {
      if (event.target.matches('[data-confirm-form]')) {
        event.preventDefault();

        const email = event.target.elements['confirm-email'].value;
        completeSignIn(email, handleSuccess, handleError);
      }
    });
  } else {
    completeSignIn(emailForSignIn, handleSuccess, handleError);
  }
})();
