/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
};

export default config;
