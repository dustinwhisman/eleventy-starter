const fetchOptions = async (options) => {
  const updatedOptions = { ...options };
  if (window.CURRENT_USER) {
    const accessToken = await window.CURRENT_USER.getIdToken();
    updatedOptions.headers = {
      ...updatedOptions.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  return updatedOptions;
};

export const fetcher = async (url, options = {}) => fetch(url, await fetchOptions(options));
