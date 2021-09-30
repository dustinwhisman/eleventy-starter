import { sendSignInLinkToEmail } from '@firebase/auth';
import { auth } from './auth.js';

export const sendSignInLink = (url, email, handleSuccess, handleError) => {
  sendSignInLinkToEmail(auth, email, {
    url,
    handleCodeInApp: true,
  })
    .then(() => handleSuccess(email))
    .catch(handleError);
};
