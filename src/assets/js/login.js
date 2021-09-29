import { sendSignInLink } from './utilities/auth/send-sign-in-link.js';

(() => {
  const handleSuccess = (email) => {
    window.localStorage.setItem('emailForSignIn', email);

    const successMessageContainer = document.querySelector('[data-success-message]');
    successMessageContainer?.removeAttribute('hidden');
  }

  const handleError = () => {
    const errorMessageContainer = document.querySelector('[data-error-message]');
    errorMessageContainer?.removeAttribute('hidden');
  };

  document.addEventListener('submit', (event) => {
    if (event.target.matches('[data-sign-in-form]')) {
      event.preventDefault();

      const email = event.target.elements['sign-in-email'].value;
      sendSignInLink(email, handleSuccess, handleError);
    }
  });
})();
