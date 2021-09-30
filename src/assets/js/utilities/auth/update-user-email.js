import { updateEmail } from '@firebase/auth';
import { auth } from './auth.js';

export const updateUserEmail = (newEmail, handleSuccess, handleError) => {
  updateEmail(auth.currentUser, newEmail)
    .then(handleSuccess)
    .catch(handleError);
};
