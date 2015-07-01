import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('login')
  this.route('protected', { path: '/' }, function() {
    this.resource('index', { path: '/' })
  })
})

export default Router
