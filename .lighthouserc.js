module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      // uncomment to run on all pages (this will take a long time)
      // maxAutodiscoverUrls: 0,
      // run on a handful of representative pages, update as needed
      url: [
        'http://localhost/index.html',
        'http://localhost/docs/index.html',
        'http://localhost/docs/javascript/index.html',
        'http://localhost/docs/forms/index.html',
        'http://localhost/blog/index.html',
        'http://localhost/blog/first-post/index.html',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
