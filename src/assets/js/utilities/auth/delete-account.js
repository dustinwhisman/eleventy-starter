import { deleteUser } from 'firebase/auth';
import { auth } from './auth.js';

export const deleteAccount = (handleSuccess, handleError) => {
  const user = auth.currentUser;
  deleteUser(user)
    .then(handleSuccess)
    .catch(handleError);
};
