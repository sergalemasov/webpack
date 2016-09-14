'use strict';

document.getElementById('loginButton').onclick = function () {
  require.ensure(['./login'], function(require) {
    let login = require('./login');

    login();
  }, 'auth');
}

document.getElementById('logoutButton').onclick = function () {
  require.ensure([], function(require) {
    let logout = require('./logout');

    logout();
  }, 'auth');
}