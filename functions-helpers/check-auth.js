export const checkAuth = async (event) => {
  // success
  return { uid: 12345 };

  // failure
  throw new Error('This request was not authorized.');
};
