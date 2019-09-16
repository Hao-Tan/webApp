// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // 将 ESLint 限制到一个特定的项目，在配置文件里设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //语句结尾要加分号
    'semi':['error','always'],
    //为了去控制vue文件中的缩进，关闭eslint自带的缩进而配置为vue提供的缩进
    'indent':'off',
    'vue/script-indent':['error', 4, {'baseIndent':1}],
    'space-before-function-paren':['error', {'anonymous':'never','named':'never','asyncArrow':'always'}]
  }
}
