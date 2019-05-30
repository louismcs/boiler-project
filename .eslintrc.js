module.exports = {
    parser: 'vue-eslint-parser',
    root: true,
    env: {
        node: true,
        es6: true,
        browser: true,
        commonjs: true
    },
    extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended', 'plugin:vue/essential', '@vue/typescript'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
};
