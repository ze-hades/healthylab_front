// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root : true,
  parser : 'babel-eslint',
  parserOptions : {
    sourceType : 'module'
  },
  env : {
    browser : true,
  },
  extends : 'airbnb-base',
  // required to lint *.vue files
  plugins : [
    'html'
  ],
  // check if imports actually resolve
  'settings' : {
    'import/resolver' : {
      'webpack' : {
        'config' : 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules' : {
    /* Healthylab rules starts here */
    'semi' : ['error', 'never'],
    'key-spacing' : ["error", { "beforeColon" : true }],
    'no-console' : ["error", { allow : ["log", "warn", "error"] }],
    'no-param-reassign' : ["error", { "props" : false }],
    'comma-dangle' : ["error", "only-multiline",{ "functions" : "never" }, "always"],
    /* Healthylab rules ends here */

    // don't require .vue extension when importing
    'import/extensions' : ['error', 'always', {
      'js' : 'never',
      'vue' : 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies' : ['error', {
      'optionalDependencies' : ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger' : process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
