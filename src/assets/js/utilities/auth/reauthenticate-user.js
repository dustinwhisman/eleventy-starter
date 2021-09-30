import { reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from './auth.js';

export const reauthenticateUser = (handleSuccess, handleError) => {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credentialWithLink(user.email, window.location.href);
  reauthenticateWithCredential(user, credential)
    .then(handleSuccess)
    .catch(handleError);
};
