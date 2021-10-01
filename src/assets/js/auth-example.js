import { fetcher } from './utilities/fetcher.js';

(() => {
  const displayEndpointResult = (result) => {
    const resultBlock = document.querySelector('[data-result-block]');
    resultBlock.textContent = result;
  };

  const hitProtectedEndpoint = async () => {
    const request = await fetcher('/api/protected');
    const response = await request.json();
    displayEndpointResult(JSON.stringify(response, null, 2));
  };

  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-test-endpoint]')) {
      hitProtectedEndpoint();
    }
  });
})();
