// Generated by EmberScript 0.0.7
var get$ = Ember.get;
Em.onLoad('Ember.Application', function (application) {
  application.initializer({
    name: 'ember-auth.module.url-authenticatable',
    before: 'ember-auth-load',
    initialize: function (container, app) {
      app.register('authModule:urlAuthenticatable', get$(get$(Em, 'Auth'), 'UrlAuthenticatableAuthModule'), { singleton: true });
      return app.inject('authModule:urlAuthenticatable', 'auth', 'auth:main');
    }
  });
  return application.initializer({
    name: 'ember-auth.module.url-authenticatable-load',
    after: 'ember-auth-load',
    initialize: function (container, app) {
      return container.lookup('authModule:urlAuthenticatable');
    }
  });
});// Generated by EmberScript 0.0.7
void function () {
  var $;
  var get$ = Ember.get;
  var set$ = Ember.set;
  $ = jQuery;
  set$(get$(Em, 'Auth'), 'UrlAuthenticatableAuthModule', Ember.Object.extend({
    init: function () {
      get$(this, 'auth')._config('urlAuthenticatable', get$(this, '_defaultConfig'));
      null != get$(this, 'config') || set$(this, 'config', get$(this, 'auth')._config('urlAuthenticatable'));
      return this.patch();
    },
    _defaultConfig: {
      params: [],
      endPoint: null
    },
    authenticate: function (queryParams, opts) {
      var data, empty, param;
      if (null == opts)
        opts = {};
      if (get$(get$(this, 'auth'), 'signedIn'))
        return new (get$(get$(Em, 'RSVP'), 'resolve'));
      data = {};
      empty = true;
      for (var i$ = 0, length$ = get$(get$(this, 'config'), 'params').length; i$ < length$; ++i$) {
        param = get$(get$(this, 'config'), 'params')[i$];
        if (null != queryParams[param]) {
          data[param] = queryParams[param];
          empty = false;
        }
      }
      if (empty)
        return new (get$(get$(Em, 'RSVP'), 'resolve'));
      set$(opts, 'data', $.extend(true, data, get$(opts, 'data') || {}));
      if (null != get$(get$(this, 'config'), 'endPoint')) {
        return get$(this, 'auth').signIn(get$(get$(this, 'config'), 'endPoint'), opts);
      } else {
        return get$(this, 'auth').signIn(opts);
      }
    },
    patch: function () {
      var self;
      self = this;
      return get$(Em, 'Route').reopen({
        beforeModel: function (queryParams, transition) {
          var ret;
          ret = this._super.apply(this, arguments);
          if (!(null != transition))
            return ret;
          if (typeof get$(ret, 'then') === 'function') {
            return ret.then(function () {
              return self.authenticate(queryParams);
            });
          } else {
            return self.authenticate(queryParams);
          }
        }
      });
    }
  }));
}.call(this);