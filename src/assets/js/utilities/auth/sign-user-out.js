import { signOut } from 'firebase/auth';
import { auth } from './auth.js';

export const signUserOut = (handleSuccess, handleError) => {
  signOut(auth)
    .then(handleSuccess)
    .catch(handleError);
};
