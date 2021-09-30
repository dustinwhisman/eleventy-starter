import { fetcher } from './utilities/fetcher.js';

(() => {
  const hitProtectedEndpoint = async () => {
    const request = await fetcher('/api/protected');
    const response = await request.json();
    console.log(response);
  };

  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-test-endpoint]')) {
      hitProtectedEndpoint();
    }
  });
})();
