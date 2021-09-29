import { sendSignInLinkToEmail } from '@firebase/auth';
import { auth } from './auth.js';

const actionCodeSettings = {
  url: `${window.location.origin}/login/confirm`,
  handleCodeInApp: true,
};

export const sendSignInLink = (email, handleSuccess, handleError) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(handleSuccess)
    .catch(handleError);
};
