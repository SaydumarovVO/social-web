import Vue from 'vue'
import Router from 'vue-router'

// The meta data for your routes
const meta = require('./meta.json');

// Function to create routes
// Is default lazy but can be changed
function route (path, view) {
  return {
    path: path,
    meta: meta[path],
    component: resolve => import(`pages/${view}View.vue`).then(resolve)
  }
}

Vue.use(Router);

export function createRouter () {
  return new Router({
      base: __dirname,
      mode: 'history',
      scrollBehavior: () => ({y: 0}),
      routes: [
        route('/', 'StartPage'),
        route('/data-classification', 'ClassifyData'),
        route('/data-collect', 'CollectUserData'),
        route('/data-results', 'Results'),
        // Global redirect for 404
        {path: '*', redirect: '/'}
      ]
    });
}
