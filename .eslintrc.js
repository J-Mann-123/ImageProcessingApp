module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    // tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-misused-promises': 'off'
  }
}
