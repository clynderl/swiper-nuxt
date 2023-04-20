module.exports = {
    root: true,
    extends: [
        '@nuxt/eslint-config',
        '@vue/eslint-config-airbnb-with-typescript',
        'plugin:prettier/recommended',

    ],
    rules: {
        'no-undef': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
