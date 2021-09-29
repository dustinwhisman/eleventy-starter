import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth.js';

export const observeAuthState = (handleIsLoggedIn, handleIsLoggedOut) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      handleIsLoggedIn(user);
    } else {
      handleIsLoggedOut();
    }
  });
};
