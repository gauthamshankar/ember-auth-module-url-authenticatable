Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.module.url-authenticatable'
    after: 'ember-auth'

    initialize: (container, app) ->
      app.register 'authModule:urlAuthenticatable', Em.Auth.UrlAuthenticatableAuthModule
