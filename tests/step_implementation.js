/* globals gauge*/
"use strict";
const frisby = require('frisby');


step("Call httpbin.org and get a teabot", async () => {
  // Return the Frisby.js Spec in the 'it()' (just like a promise)
  return frisby.get('http://httpbin.org/status/418')
    .expect('status', 418);
});


