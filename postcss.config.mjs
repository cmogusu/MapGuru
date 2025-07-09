const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "@csstools/postcss-global-data": {
      files: ["src/global.module.css"],
    },
    "postcss-custom-media": {},
  },
};

export default config;
