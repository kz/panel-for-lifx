if (ENVIRONMENT === 'dev-browser' /* running dev copy in browser, not as a chrome app */) {

  // mock Chrome APIs
  window.chrome = {};

}
