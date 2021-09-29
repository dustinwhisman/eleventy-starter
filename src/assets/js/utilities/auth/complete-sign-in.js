import { isSignInWithEmailLink, signInWithEmailLink } from '@firebase/auth';
import { auth } from './auth.js';

export const completeSignIn = (email, handleSuccess, handleError) => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    signInWithEmailLink(auth, email, window.location.href)
      .then(handleSuccess)
      .catch(handleError);
  }
};
