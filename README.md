# url authenticatable module for ember-auth

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
