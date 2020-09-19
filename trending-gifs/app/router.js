import EmberRouter from '@ember/routing/router';
import config from 'trending-gifs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('gifs', {path: '/'});
  this.route('not-found', {path: '/*path'});
});
