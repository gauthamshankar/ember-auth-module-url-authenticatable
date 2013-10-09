# -*- encoding: utf-8 -*-
require 'json'

package = JSON.parse(File.read('package.json'))

Gem::Specification.new do |gem|
  gem.name        = 'ember-auth-module-url_authenticatable-source'
  gem.version     = package['version']
  gem.authors     = ['heartsentwined']
  gem.email       = ['heartsentwined.me@gmail.com']
  gem.date        = Time.now.strftime('%Y-%m-%d')
  gem.summary     = 'Ember-auth url authenticatable module source code wrapper'
  gem.description = 'Ember-auth url authenticatable module source code wrapper for ruby libs.'
  gem.homepage    = 'https://github.com/heartsentwined/ember-auth-module-url-authenticatable'

  gem.files       = ['dist/ember-auth-module-url-authenticatable.js',
                     'lib/ember/auth/module/url_authenticatable/source.rb']

  # TODO we actually need beta builds in master
  #   for the url query-params feature
  #
  # change to "real" version
  # when this feature is released into a source gem version
  gem.add_dependency 'ember-source',      '>= 1.0'
  gem.add_dependency 'ember-auth-source', '~> 9.0'

  gem.license     = 'MIT'
end
