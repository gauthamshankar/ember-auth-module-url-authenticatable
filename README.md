# url authenticatable module for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-module-url-authenticatable.png)](http://travis-ci.org/heartsentwined/ember-auth-module-url-authenticatable)
[![Gem Version](https://badge.fury.io/rb/ember-auth-module-url_authenticatable-source.png)](http://badge.fury.io/rb/ember-auth-module-url_authenticatable-source)
[![NPM version](https://badge.fury.io/js/ember-auth.png)](http://badge.fury.io/js/ember-auth-module-url-authenticatable)

Allows auto sign in from entry points like `/foo?token=abcd1234`.

## Config

```coffeescript
App.Auth = Em.Auth.extend
  modules: ['urlAuthenticatable']

  urlAuthenticatable:
    # [array<string>] list of params used for authentication - those that
    #   should be passed on to the server in the sign in call
    params: []

    # [string|null] (opt) a different end point for sign in requests
    #   from urlAuthenticatable
    endPoint: null
```

## Usage

```coffeescript
# call _super() and follow the promise pattern
# if you override Ember.Route.beforeModel()
App.FooRoute = Ember.Route.extend
  beforeModel: ->
    @_super.apply(this, arguments).then -> doSomething()
  # or
  beforeModel: ->
    doSomething()
    @_super.apply(this, arguments) # already returns promise
```
